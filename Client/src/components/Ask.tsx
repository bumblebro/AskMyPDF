import axios from "axios";
import { FC, useState } from "react";
import ReactMarkdown from "react-markdown";
import ContentLoader from "react-content-loader";

interface AskProps {
  text: string;
}

const Ask: FC<AskProps> = ({ text }) => {
  const [data, setData] = useState();
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sent");
    console.log(text);
    setLoading(true);
    // const response = await axios.post("https://ask-my-pdf-api.vercel.app/", {
    // const response = await axios.post("https://4641fb45.askmypdff.pages.dev/", {
    const response = await axios.post("http://localhost:3000/", {
      payload: question + text,
    });
    const data = response.data.text;
    setLoading(false);
    setData(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-start gap-2 text-sm text-white"
    >
      <label htmlFor="Ask">Ask questions about your PDF file:</label>
      <input
        type="text"
        name=""
        id="Ask"
        className="bg-[#374151] border-none rounded-lg w-full"
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <button className=" bg-[#374151]  rounded-lg px-4 py-2 text-sm">
        Submit
      </button>
      <div>
        {loading ? (
          <ContentLoader
            height={140}
            speed={1}
            className="w-full h-full"
            backgroundColor={"#333"}
            foregroundColor={"#999"}
            viewBox="0 0 380 70"
          >
            <rect x="0" y="0" rx="4" ry="4" width="370" height="10" />
            <rect x="0" y="15" rx="4" ry="4" width="250" height="10" />
            <rect x="0" y="30" rx="4" ry="4" width="300" height="10" />
          </ContentLoader>
        ) : (
          <ReactMarkdown>{data}</ReactMarkdown>
        )}
      </div>
    </form>
  );
};

export default Ask;
