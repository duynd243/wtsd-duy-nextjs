import path from "path";
import { promises as fs } from "fs";
import { compile } from "handlebars";

export async function getEmailTemplate<T>({
  context,
  templateName,
}: {
  context: T;
  templateName: string;
}) {
  const emailDir = path.join(process.cwd(), "emails");
  const fileContents = await fs.readFile(
    emailDir + `/${templateName}.handlebars`,
    "utf8"
  );
  const template = compile(fileContents);
  const messageBody = template(context);
  return messageBody;
}
