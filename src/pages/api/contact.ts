import { ContactSchema, contactSchema } from "@/components/sections/Contact";
import mailjet from "@/libs/mailjet";
import { NextApiRequest, NextApiResponse } from "next";
import { getEmailTemplate } from "../../../emails/helper";

async function getRequestBody({ name, to, subject, message }: ContactSchema) {
  const messageBody = await getEmailTemplate<Omit<ContactSchema, "to">>({
    context: { name, subject, message },
    templateName: "contact",
  });
  return {
    Messages: [
      {
        From: {
          Email: process.env.MAILJET_SENDER_EMAIL,
          Name: process.env.MAILJET_SENDER_NAME,
        },
        To: [
          {
            Email: to,
            Name: name,
          },
        ],
        Cc: [
          {
            Email: process.env.MAILJET_SENDER_EMAIL,
            Name: process.env.MAILJET_SENDER_NAME,
          },
        ],
        Subject: "Thanks for contacting us!",
        HTMLPart: messageBody,
      },
    ],
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  if (contactSchema.safeParse(req.body).success === false) {
    res.status(400).json({ message: "Bad Request" });
    return;
  }

  const { name, to, subject, message } = req.body;

  try {
    const body = await getRequestBody({ name, to, subject, message });
    const response = await mailjet.post("/send", body);
    res.status(response.status).json({ success: true, data: response.data });
  } catch (error) {
    res.status(error.status).json({ success: false, data: error.message });
  }
}
