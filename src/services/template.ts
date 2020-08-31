import { readFileSync } from "fs";
import toHTML from "mjml";
import { render } from "mustache";

interface Context {
  [key: string]: any;
}

export function parseTemplate(template: string, context: Context): string {
  const content = readFileSync(`sources/mailing/${template}.mjml`);
  const parsed = toHTML(content.toString());
  if (parsed.errors.length !== 0) {
    const message = parsed.errors.reduce(
      (a, e) => a + `\nError in '${template}':\n\tLine ${e.line} ${e.message}`,
      "\n"
    );
    throw new Error(`Invalid MJML Document:${message}`);
  }
  return render(parsed.html, context);
}
