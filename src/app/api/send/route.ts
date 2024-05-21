import { Resend } from "resend";
import {
  validateRequestBody,
  generateMailTemplate,
} from "@/helpers/getMailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
  const body = await request.json();

  const validatedBody = validateRequestBody(body);
  if (!validatedBody) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }
  const emailVal = generateMailTemplate(validatedBody);

  try {
    const { data, error } = await resend.emails.send({
      from: "offroadacademies website <onboarding@resend.dev>",
      to: ["zerothreshold@gmail.com"],
      subject: "Enquiry",
      html: emailVal,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
