import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

interface AskProps {}

const Ask: FC<AskProps> = ({}) => {
  const [data, setData] = useState();
  const [question, setQuestion] = useState();
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sent");
    console.log(question);
    setLoading(false);
    const response = await axios.post("http://localhost:3000/", {
      payload: question,
    });
    const data = response.data.text;
    setLoading(true);
    setData(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-sm text-white gap-2"
    >
      <label htmlFor="Ask">Ask questions about your PDF file:</label>
      <input
        type="text"
        name=""
        id="Ask"
        className="bg-[#374151] border-none rounded-lg"
        onChange={(e) => {
          setQuestion(e.target.value);
        }}
      />
      <button className=" bg-[#374151] w-1/12 rounded-lg px-2 py-1 text-sm">
        Submit
      </button>
      <div>
        {loading ? <ReactMarkdown>{data}</ReactMarkdown> : <h1>Loading...</h1>}
      </div>
    </form>
  );
};

export default Ask;
