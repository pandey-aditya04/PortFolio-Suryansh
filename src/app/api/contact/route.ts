import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // TODO: Connect to Resend or other email service here
    // Example:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({ ... });

    console.log("Contact form submission:", { name, email, subject, message });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
