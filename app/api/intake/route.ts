import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY is not configured");
  return new Resend(key);
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const clientName = data.fullName || "Unknown Client";

    // Build formatted email body
    const emailHtml = buildEmailHtml(data);

    const resend = getResend();
    await resend.emails.send({
      from: "Izzy Designs Intake <onboarding@resend.dev>",
      to: "izzy@izzydesigns.io",
      subject: `New LLC Formation Intake — ${clientName}`,
      html: emailHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Intake submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}

function buildEmailHtml(data: Record<string, string>): string {
  const section = (title: string, fields: [string, string | undefined][]) => {
    const rows = fields
      .filter(([, val]) => val && val.trim() !== "")
      .map(
        ([label, val]) =>
          `<tr><td style="padding:6px 12px;font-weight:600;color:#333;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 12px;color:#555;">${val}</td></tr>`
      )
      .join("");

    return `
      <div style="margin-bottom:28px;">
        <h2 style="font-size:16px;font-weight:700;color:#111;border-bottom:2px solid #0ea5e9;padding-bottom:6px;margin-bottom:12px;">${title}</h2>
        <table style="width:100%;border-collapse:collapse;">${rows}</table>
      </div>
    `;
  };

  // Gather additional members
  const memberFields: [string, string | undefined][] = [];
  for (let i = 2; i <= 10; i++) {
    if (data[`member${i}Name`]) {
      memberFields.push([`Member ${i} Name`, data[`member${i}Name`]]);
      memberFields.push([`Member ${i} Address`, data[`member${i}Address`]]);
      memberFields.push([
        `Member ${i} Ownership`,
        data[`member${i}Ownership`],
      ]);
    }
  }

  const html = `
    <div style="font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:640px;margin:0 auto;padding:32px 20px;background:#fff;">
      <div style="text-align:center;margin-bottom:32px;">
        <h1 style="font-size:22px;color:#111;margin:0;">New LLC Formation Intake</h1>
        <p style="color:#666;font-size:14px;margin-top:8px;">Submitted by ${data.fullName || "Unknown"}</p>
      </div>

      ${section("Personal Information", [
        ["Full Legal Name", data.fullName],
        ["Date of Birth", data.dob],
        ["SSN/ITIN", data.ssn],
        ["Home Address", `${data.homeStreet}, ${data.homeCity}, ${data.homeState} ${data.homeZip}`],
        ["Phone", data.phone],
        ["Email", data.email],
      ])}

      ${section("Business Information", [
        ["LLC Name (Option 1)", data.llcName1],
        ["LLC Name (Option 2)", data.llcName2],
        ["LLC Name (Option 3)", data.llcName3],
        ["Business Purpose", data.businessPurpose],
        ["Business Address", `${data.bizStreet}, ${data.bizCity}, ${data.bizState} ${data.bizZip}`],
        ["Management Structure", data.management],
      ])}

      ${section("Members / Owners", [
        ["Number of Members", data.memberCount],
        ...memberFields,
        ["Registered Agent", data.agentPreference === "self" ? "Will serve as own agent" : "Will use a service"],
      ] as [string, string | undefined][])}

      ${section("Agent for Service of Process", [
        ["Agent Name", data.agentName],
        ["Agent Address", `${data.agentStreet}, ${data.agentCity}, CA ${data.agentZip}`],
      ])}

      ${section("Financial & Tax", [
        ["Estimated Start Date", data.startDate],
        ["Expected Revenue", data.revenueRange],
        ["Expected Employees", data.employeeCount],
        ["Fiscal Year End", data.fiscalYearEnd],
        ["Needs EIN", data.needsEIN],
        ["Will Have Employees", data.hasEmployees],
        ["Sells Physical Goods", data.sellsPhysicalGoods],
      ])}

      ${data.additionalNotes ? section("Additional Notes", [["Notes", data.additionalNotes]]) : ""}

      <div style="margin-top:32px;padding-top:16px;border-top:1px solid #eee;text-align:center;">
        <p style="color:#999;font-size:12px;">This submission was sent from the Izzy Designs LLC Formation Intake Form.</p>
      </div>
    </div>
  `;

  return html;
}
