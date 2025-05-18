import * as shiki from "shiki";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export async function CodeBlock({ code, language = "typescript" }: CodeBlockProps) {
  const highlighter = await shiki.createHighlighter({
    themes: ["one-dark-pro"],
    langs: ["typescript", "javascript"],
  });

  const html = highlighter.codeToHtml(code, {
    lang: language,
    theme: "one-dark-pro",
  });

  return (
    <div className="relative">
      <div
        className="rounded-lg overflow-hidden"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
} 