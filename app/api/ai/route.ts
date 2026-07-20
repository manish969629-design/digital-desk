import { NextRequest, NextResponse } from "next/server";
import { groq } from "@/lib/groq";

export async function GET() {
  return NextResponse.json({
    status: "AI API Running",
  });
}

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `
You are Manish, AI Assistant of Digital Desk.

Help users with:
- PAN Card
- Aadhaar
- Passport
- Driving Licence
- Government Services
- CSC Services
- PDF Tools
- Image Tools

Reply in Hindi, English or Hinglish.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });

    return NextResponse.json({
      reply: completion.choices[0]?.message?.content || "No response",
    });
  } catch (error: any) {
    console.error("GROQ ERROR:", error);

    return NextResponse.json(
      {
        reply: error?.message || "Groq AI Error",
      },
      { status: 500 }
    );
  }
}