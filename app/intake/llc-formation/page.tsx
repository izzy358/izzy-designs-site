"use client";

import { useState } from "react";

export default function LLCFormationIntake() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [memberCount, setMemberCount] = useState(1);
  const [agentSelf, setAgentSelf] = useState(true);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Submission failed. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-10 sm:p-14 shadow-sm">
              <div className="mb-6 text-5xl">✓</div>
              <h1 className="mb-4 text-2xl font-semibold text-gray-900">
                Thank You!
              </h1>
              <p className="text-gray-500">
                Your information has been submitted successfully. We&apos;ll review
                everything and follow up within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const inputClasses =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 transition focus:border-sky-500 focus:ring-1 focus:ring-sky-500 focus:outline-none";
  const labelClasses =
    "mb-1.5 block text-xs font-medium uppercase tracking-wide text-gray-500";
  const helperClasses = "mt-1.5 text-xs text-gray-400";
  const sectionHeadingClasses =
    "mb-6 text-lg font-semibold text-gray-900 border-b border-gray-200 pb-3";

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-3xl px-5 sm:px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gray-400 mb-3">
            Client Intake
          </p>
          <h1 className="mb-4 text-3xl font-semibold text-gray-900 sm:text-4xl">
            California LLC Formation
          </h1>
          <p className="text-gray-500">
            Please complete all required fields below. This information will be
            used to file your LLC with the State of California.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Section 1: Personal Information */}
          <section>
            <h2 className={sectionHeadingClasses}>Personal Information</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClasses}>Full Legal Name *</label>
                <input
                  name="fullName"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="As it appears on your government ID"
                />
              </div>
              <div>
                <label className={labelClasses}>Date of Birth *</label>
                <input
                  name="dob"
                  type="date"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>SSN or ITIN *</label>
                <input
                  name="ssn"
                  type="password"
                  required
                  className={inputClasses}
                  placeholder="XXX-XX-XXXX"
                  autoComplete="off"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClasses}>Home Address — Street *</label>
                <input
                  name="homeStreet"
                  type="text"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>City *</label>
                <input
                  name="homeCity"
                  type="text"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>State *</label>
                <input
                  name="homeState"
                  type="text"
                  required
                  className={inputClasses}
                  defaultValue="California"
                />
              </div>
              <div>
                <label className={labelClasses}>ZIP Code *</label>
                <input
                  name="homeZip"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="94XXX"
                />
              </div>
              <div>
                <label className={labelClasses}>Phone Number *</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  className={inputClasses}
                  placeholder="(415) 555-0100"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClasses}>Email Address *</label>
                <input
                  name="email"
                  type="email"
                  required
                  className={inputClasses}
                  placeholder="you@email.com"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Business Information */}
          <section>
            <h2 className={sectionHeadingClasses}>Business Information</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClasses}>
                  Desired LLC Name — Option 1 *
                </label>
                <input
                  name="llcName1"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Your preferred business name"
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Desired LLC Name — Option 2
                </label>
                <input
                  name="llcName2"
                  type="text"
                  className={inputClasses}
                  placeholder="Backup name"
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Desired LLC Name — Option 3
                </label>
                <input
                  name="llcName3"
                  type="text"
                  className={inputClasses}
                  placeholder="Backup name"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClasses}>
                  Business Purpose / Description *
                </label>
                <textarea
                  name="businessPurpose"
                  required
                  rows={3}
                  className={inputClasses}
                  placeholder="Brief description of what the company does"
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClasses}>Business Address *</label>
                <input
                  name="bizStreet"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Can be home address if no office yet"
                />
              </div>
              <div>
                <label className={labelClasses}>City *</label>
                <input
                  name="bizCity"
                  type="text"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>State *</label>
                <input
                  name="bizState"
                  type="text"
                  required
                  className={inputClasses}
                  defaultValue="California"
                />
              </div>
              <div>
                <label className={labelClasses}>ZIP Code *</label>
                <input
                  name="bizZip"
                  type="text"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>Management Structure *</label>
                <select name="management" required className={inputClasses}>
                  <option value="Member-Managed">Member-Managed</option>
                  <option value="Manager-Managed">Manager-Managed</option>
                </select>
                <p className={helperClasses}>
                  Most small LLCs are member-managed, meaning all owners
                  participate in running the business.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Members / Owners */}
          <section>
            <h2 className={sectionHeadingClasses}>Members / Owners</h2>
            <div className="grid gap-5">
              <div>
                <label className={labelClasses}>
                  How many members (owners) will the LLC have? *
                </label>
                <input
                  name="memberCount"
                  type="number"
                  min={1}
                  max={10}
                  required
                  className={`${inputClasses} max-w-[120px]`}
                  value={memberCount}
                  onChange={(e) =>
                    setMemberCount(Math.max(1, parseInt(e.target.value) || 1))
                  }
                />
              </div>

              {memberCount > 1 &&
                Array.from({ length: memberCount - 1 }, (_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 bg-gray-50 p-5"
                  >
                    <p className="mb-3 text-sm font-medium text-gray-900">
                      Additional Member {i + 1}
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <div>
                        <label className={labelClasses}>Full Legal Name *</label>
                        <input
                          name={`member${i + 2}Name`}
                          type="text"
                          required
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>Address *</label>
                        <input
                          name={`member${i + 2}Address`}
                          type="text"
                          required
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label className={labelClasses}>
                          Ownership % *
                        </label>
                        <input
                          name={`member${i + 2}Ownership`}
                          type="text"
                          required
                          className={inputClasses}
                          placeholder="e.g. 50%"
                        />
                      </div>
                    </div>
                  </div>
                ))}

              <div>
                <label className={labelClasses}>Registered Agent *</label>
                <div className="mt-2 space-y-2">
                  <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="radio"
                      name="agentPreference"
                      value="self"
                      defaultChecked
                      onChange={() => setAgentSelf(true)}
                      className="accent-sky-500"
                    />
                    I will serve as my own registered agent
                  </label>
                  <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer">
                    <input
                      type="radio"
                      name="agentPreference"
                      value="service"
                      onChange={() => setAgentSelf(false)}
                      className="accent-sky-500"
                    />
                    I will use a registered agent service
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Agent for Service of Process */}
          <section>
            <h2 className={sectionHeadingClasses}>Agent for Service of Process</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={labelClasses}>Agent Name *</label>
                <input
                  name="agentName"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder={
                    agentSelf
                      ? "Your name (if serving as own agent)"
                      : "Registered agent service name"
                  }
                />
              </div>
              <div className="sm:col-span-2">
                <label className={labelClasses}>
                  Agent Street Address in California *
                </label>
                <input
                  name="agentStreet"
                  type="text"
                  required
                  className={inputClasses}
                  placeholder="Must be a physical CA address — no PO boxes"
                />
              </div>
              <div>
                <label className={labelClasses}>City *</label>
                <input
                  name="agentCity"
                  type="text"
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>ZIP Code *</label>
                <input
                  name="agentZip"
                  type="text"
                  required
                  className={inputClasses}
                />
              </div>
            </div>
          </section>

          {/* Section 5: Financial & Tax */}
          <section>
            <h2 className={sectionHeadingClasses}>Financial & Tax</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClasses}>
                  Estimated Business Start Date
                </label>
                <input
                  name="startDate"
                  type="date"
                  className={inputClasses}
                />
              </div>
              <div>
                <label className={labelClasses}>
                  Expected First-Year Revenue
                </label>
                <select name="revenueRange" className={inputClasses}>
                  <option value="">Select range</option>
                  <option value="Under $50K">Under $50K</option>
                  <option value="$50K-$100K">$50K – $100K</option>
                  <option value="$100K-$250K">$100K – $250K</option>
                  <option value="$250K-$500K">$250K – $500K</option>
                  <option value="$500K+">$500K+</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>
                  Number of Expected Employees
                </label>
                <input
                  name="employeeCount"
                  type="number"
                  min={0}
                  className={inputClasses}
                  placeholder="Enter 0 if just owner(s)"
                />
              </div>
              <div>
                <label className={labelClasses}>Fiscal Year End</label>
                <select
                  name="fiscalYearEnd"
                  className={inputClasses}
                  defaultValue="December 31"
                >
                  <option value="December 31">December 31</option>
                  <option value="March 31">March 31</option>
                  <option value="June 30">June 30</option>
                  <option value="September 30">September 30</option>
                </select>
              </div>
              <div>
                <label className={labelClasses}>
                  Will the LLC need an EIN (Federal Tax ID)?
                </label>
                <select
                  name="needsEIN"
                  className={inputClasses}
                  defaultValue="Yes"
                >
                  <option value="Yes">Yes</option>
                  <option value="Not sure">Not sure</option>
                </select>
                <p className={helperClasses}>
                  Almost all businesses need an EIN.
                </p>
              </div>
              <div>
                <label className={labelClasses}>
                  Will the LLC have employees?
                </label>
                <select name="hasEmployees" className={inputClasses}>
                  <option value="Not initially, just owner(s)">
                    Not initially, just owner(s)
                  </option>
                  <option value="Yes, from the start">
                    Yes, from the start
                  </option>
                  <option value="Not sure">Not sure</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={labelClasses}>
                  Will the LLC sell physical goods?
                </label>
                <select
                  name="sellsPhysicalGoods"
                  className={inputClasses}
                >
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                  <option value="Not sure">Not sure</option>
                </select>
                <p className={helperClasses}>
                  If yes, a California Seller&apos;s Permit may be required.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Additional Notes */}
          <section>
            <h2 className={sectionHeadingClasses}>Additional Notes</h2>
            <div>
              <label className={labelClasses}>
                Anything else we should know?
              </label>
              <textarea
                name="additionalNotes"
                rows={4}
                className={inputClasses}
                placeholder="Optional — any additional context or questions"
              />
            </div>
          </section>

          {/* Error */}
          {error && (
            <div className="rounded-lg border border-red-300 bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* Submit */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full border border-sky-500 bg-sky-500 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition hover:bg-sky-600 hover:border-sky-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Submit Information"}
            </button>
            <p className="mt-4 text-center text-xs text-gray-400">
              Your information is kept confidential and used solely for LLC
              formation purposes.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
