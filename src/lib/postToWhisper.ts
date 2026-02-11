import { createReadStream } from "fs";
import { OpenAI } from "openai";

export async function postToWhisper(openai: OpenAI, audioFilePath: string) {
  const transcript = await openai.audio.transcriptions.create({
    file: createReadStream(audioFilePath) as any,
    model: "whisper-1",
  });
  return transcript.text;
}
