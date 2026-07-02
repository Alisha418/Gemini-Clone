import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

if (!apiKey) {
  console.error(
    "Missing VITE_GEMINI_API_KEY. Add your key to a .env file in the project root."
  );
}

const genAI = new GoogleGenerativeAI(apiKey || "");

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

let chatSession = null;

export function resetChat() {
  chatSession = model.startChat({
    generationConfig,
    history: [],
  });
}

export function loadChatHistory(messages) {
  const history = messages.map((msg) => ({
    role: msg.role === "user" ? "user" : "model",
    parts: [{ text: msg.text }],
  }));

  chatSession = model.startChat({
    generationConfig,
    history,
  });
}

async function run(prompt) {
  if (!apiKey) {
    throw new Error(
      "API key missing. Create a .env file with VITE_GEMINI_API_KEY=your_key from https://aistudio.google.com/apikey"
    );
  }

  if (!chatSession) {
    resetChat();
  }

  const result = await chatSession.sendMessage(prompt);
  return result.response.text();
}

export default run;
