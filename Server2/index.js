import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { GoogleGenerativeAI } from "@google/generative-ai";
// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI("AIzaSyBNJKA4LlMqZ0MIwf031-abeJqWL3ELjX8");

const app = express();

app.use(bodyParser.json());

app.use(
  cors({
    origin: "*", // Replace with your web page origin
    methods: "GET,POST,PUT,DELETE", // Allowed HTTP methods
    credentials: true, // Allow cookies (if applicable)
  })
);

app.use("/", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Max-Age", "86400");

  next();
});

app.post("/", (req, res) => {
  const { payload } = req.body;
  async function run() {
    // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // const prompt = " explain this in less than 300 words" + payload;
    const prompt = payload;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Max-Age", "86400");
    res.status(200).json({ text });
    console.log(payload);
  }
  run();
});

app.get("/home", (req, res) => {
  res.send("Working");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// "script": "npx tsc",
//  "start": "node dist/index.js",
//  "dev": "tsc -w & nodemon dist/index.js"

// "starts": "nodemon src/index.ts",
//     "build": "rimraf dist && tsc",
//     "ts.check": "tsc --project tsconfig.json",
//     "add-build": "git add dist",
//     "test": "echo \"Error: no test specified\" && exit 1",
