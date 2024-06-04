import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBNJKA4LlMqZ0MIwf031-abeJqWL3ELjX8");

const app = express();

app.use(bodyParser.json());

// app.use(
//   cors({
//     origin: "https://askmypdff.vercel.app",
//   })
// );

const corsOptions = {
  origin: "https://askmypdff.vercel.app",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.post("/", (req, res) => {
  const { payload } = req.body;
  async function run() {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = payload + " explain this in less than 50 words";
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.json({ text });
    console.log(payload);
  }
  run();
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
