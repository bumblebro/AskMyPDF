import React, { FC, useRef } from "react";
import Ask from "./Ask";
import pdfToText from "react-pdftotext";

interface BodyProps {}

const Body: FC<BodyProps> = ({}) => {
  const cur = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cur.current.value);
    const file = cur.current.value;
    pdfToText(file)
      .then((text) => console.log(text))
      .catch((error) => console.error("Failed to extract text from pdf"));
  };
  return (
    <div className="w-6/12 mx-auto ">
      <div className="pb-4">
        {" "}
        <div className="flex ">
          <h1 className="text-4xl font-semibold pb-5">Chat with PDF</h1>
        </div>{" "}
        <form
          onSubmit={handleSubmit}
          className=" flex flex-col gap-2 items-start pb-8"
        >
          <label className="text-sm " htmlFor="askk">
            Drag and drop file here
          </label>
          <input
            className="bg-[#374151] w-full"
            type="file"
            name=""
            id="askk"
            ref={cur}
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <button className=" bg-[#374151] rounded-lg px-2 py-1 text-sm ">
            Submit
          </button>
        </form>
        <Ask />
      </div>
    </div>
  );
};

export default Body;
