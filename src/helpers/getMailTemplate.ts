interface MailTemplateParams {
  name: string;
  phone: string;
  location: string;
  course: string;
  date: string;
  soloGroup: string;
}

export function generateMailTemplate(params: MailTemplateParams): string {
  const { name, phone, location, course, date, soloGroup } = params;

  return `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 10px;">
        <h1 style="color: #333;">Website Enquiry</h1>
        <p>Hello admin,</p>
        <div style="margin: 20px 0;">
          <div style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</div>
          <div style="margin-bottom: 10px;"><strong>Phone:</strong> ${phone}</div>
          <div style="margin-bottom: 10px;"><strong>Location:</strong> ${location}</div>
          <div style="margin-bottom: 10px;"><strong>Course:</strong> ${course}</div>
          <div style="margin-bottom: 10px;"><strong>Date:</strong> ${date}</div>
          <div style="margin-bottom: 10px;"><strong>Solo/Group:</strong> ${soloGroup}</div>
        </div>
        <p>Please get back to above person.</p>
        <p>Best regards,<br>The site mailer</p>
      </div>
    `;
}

export function validateRequestBody(body: any): MailTemplateParams | null {
  const { name, phone, location, course, date, soloGroup } = body;
  if (!name || !phone || !location || !course || !date || !soloGroup) {
    return null;
  }
  return { name, phone, location, course, date, soloGroup };
}
