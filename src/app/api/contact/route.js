import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, message } = body;

    // ✅ Direct SMTP configuration (Hostinger)
    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true, // true for port 465
      auth: {
        user: "tech@studiovyn.in",
        pass: "W8jD5:np@^m",
      },
    });

    // ✅ Define email details
    await transporter.sendMail({
      from: `"Studio Vyn" <tech@studiovyn.in>`, // sender name and email
      to: "yourdestination@email.com", // where you want to receive inquiries
      subject: `New inquiry from ${name || "Website"}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "-"}
Company: ${company || "-"}
Message:
${message}
      `,
    });

    // ✅ Success response
    return new Response(JSON.stringify({ ok: true, message: "Email sent successfully" }), {
      status: 200,
    });
  } catch (err) {
    console.error("Email send failed:", err);
    return new Response(
      JSON.stringify({ ok: false, error: "Email failed to send", details: err.message }),
      { status: 500 }
    );
  }
}
