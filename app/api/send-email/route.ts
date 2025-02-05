import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic"; 

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@thenewtonhomes.com",
        pass: "Looking@1996",
      },
    });

    const mailOptions = {
      from: email,
      to: "info@thenewtonhomes.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `You have a new message:

      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
};