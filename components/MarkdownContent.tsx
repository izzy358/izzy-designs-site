"use client";

export default function MarkdownContent({ content }: { content: string }) {
  // Simple markdown-to-html for blog posts
  // Handles: headers, paragraphs, bold, italic, links, lists, code blocks
  const lines = content.split("\n");
  const html: string[] = [];
  let inList = false;
  let inCodeBlock = false;

  for (const line of lines) {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        html.push("</code></pre>");
        inCodeBlock = false;
      } else {
        html.push("<pre><code>");
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      html.push(line.replace(/</g, "&lt;").replace(/>/g, "&gt;"));
      continue;
    }

    if (line.startsWith("- ") || line.startsWith("* ")) {
      if (!inList) {
        html.push("<ul>");
        inList = true;
      }
      html.push(`<li>${formatInline(line.slice(2))}</li>`);
      continue;
    }

    if (inList && !line.startsWith("- ") && !line.startsWith("* ")) {
      html.push("</ul>");
      inList = false;
    }

    if (line.startsWith("### ")) {
      html.push(`<h3>${formatInline(line.slice(4))}</h3>`);
    } else if (line.startsWith("## ")) {
      html.push(`<h2>${formatInline(line.slice(3))}</h2>`);
    } else if (line.startsWith("# ")) {
      // Skip H1 — we show the title separately
      continue;
    } else if (line.trim() === "") {
      continue;
    } else {
      html.push(`<p>${formatInline(line)}</p>`);
    }
  }

  if (inList) html.push("</ul>");

  return (
    <div
      className="prose prose-slate max-w-none prose-headings:font-semibold prose-headings:text-ink prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-accent"
      dangerouslySetInnerHTML={{ __html: html.join("\n") }}
    />
  );
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}
