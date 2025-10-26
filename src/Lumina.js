import { GoogleGenAI } from "@google/genai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// Initialize Gemini client
const ai = new GoogleGenAI({ apiKey });

export async function askGemini(prompt) {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Fast latest model
      contents: prompt,
    });
    console.log(response.text);
    return response.text;
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Something went wrong.";
  }
}
