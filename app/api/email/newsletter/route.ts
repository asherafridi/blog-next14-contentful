import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body to get the recipient email
    const { recipient } = await request.json();

    // Validate that recipient is provided
    if (!recipient) {
      return NextResponse.json({ error: 'Recipient email is required' }, { status: 400 });
    }

    // Set up the email transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change to your preferred service
      auth: {
        user: process.env.EMAIL_USER, // Email user from environment variables
        pass: process.env.EMAIL_PASS, // Email password from environment variables
      },
    });

    // Email options to notify the admin
    const mailOptions = {
      from: `"CZIT" <${process.env.EMAIL_USER}>`, // Sender address
      to: process.env.ADMIN_EMAIL, // Admin email from environment variables
      subject: "New Newsletter Signup", // Subject line
      text: `A new user has signed up for the newsletter. Here is their email: ${recipient}`, // Plain text body
    };

    // Send the email using Nodemailer
    await transporter.sendMail(mailOptions);

    // Return success response
    return NextResponse.json({ message: 'Admin notified of new newsletter signup' });
  } catch (error) {
    // Log and return error
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to notify admin' }, { status: 500 });
  }
}
