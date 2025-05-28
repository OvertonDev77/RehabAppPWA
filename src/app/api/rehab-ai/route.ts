import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

const google = createGoogleGenerativeAI({
  apiKey: process.env.GOOGLE_GENAI_API_KEY || "",
});

export const maxDuration = 30;

export async function POST(req: Request) {
  const { prompt } = await req.json();
  console.log("Received prompt:", prompt);

  // Use streamText for streaming responses
  const result = await streamText({
    model: google("gemini-2.0-flash"),
    prompt,
  });
  console.log("Streaming response...");
  return result.toDataStreamResponse();
}
