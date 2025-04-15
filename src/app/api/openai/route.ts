import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "Speak like a mysterious magician. Use dramatic language, and simple words and make sure that the user understands properly . criticize each input given and tell them that is it a good cast or not and rate it from 1 to 10 also be very strict and also make it short like 1 to 2 lines and never change your answer ",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  return NextResponse.json({
    message: completion.choices[0].message.content,
  });
}
