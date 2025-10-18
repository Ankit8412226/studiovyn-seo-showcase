import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, message: "Name, email, and message are required" }),
        { status: 400 }
      );
    }

    // SMTP configuration (Hostinger)
    const transporter = nodemailer.createTransCreate({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "tech@studiovyn.in",
        pass: "W8jD5:np@^m",
      },
    });

    // Send email to your tech email with all form data
    await transporter.sendMail({
      from: '"StudioVyn Contact Form" <tech@studiovyn.in>',
      to: "tech@studiovyn.in", // ✅ Your email where you'll receive inquiries
      replyTo: email, // ✅ User's email for easy reply
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Company:</strong> ${company || "Not provided"}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone || "Not provided"}</p>
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #f3f4f6; border-radius: 5px;">
            <p style="margin: 0 0 10px 0;"><strong>Message:</strong></p>
            <p style="margin: 0; white-space: pre-wrap;">${message}</p>
          </div>

          <p style="margin-top: 20px; color: #666; font-size: 12px;">
            This email was sent from the StudioVyn contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission
----------------------------

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Phone: ${phone || "Not provided"}

Message:
${message}

----------------------------
This email was sent from the StudioVyn contact form.
      `,
    });

    return new Response(
      JSON.stringify({ ok: true, message: "Message sent successfully" }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (err) {
    console.error("Email send failed:", err);
    return new Response(
      JSON.stringify({
        ok: false,
        message: "Failed to send message. Please try again or email directly.",
        error: err.message
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
