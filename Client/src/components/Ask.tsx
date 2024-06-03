import React, { FC } from "react";

interface AskProps {}

const Ask: FC<AskProps> = ({}) => {
  return (
    <div className="flex flex-col text-sm text-white gap-2">
      <label htmlFor="Ask">Ask questions about your PDF file:</label>
      <input
        type="text"
        name=""
        id="Ask"
        className="bg-[#374151] border-none rounded-lg"
      />
    </div>
  );
};

export default Ask;
