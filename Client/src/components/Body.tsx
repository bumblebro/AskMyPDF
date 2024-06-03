import React, { FC } from "react";
import Ask from "./Ask";

interface BodyProps {
}

const Body: FC<BodyProps> = ({}) => {
  return (
    <div className="w-6/12 mx-auto ">
      <div className="pb-4">
        {" "}
        <div className="flex ">
          <h1 className="text-4xl font-semibold pb-5">Chat with PDF</h1>
        </div>{" "}
        {/* <div className="flex items-center justify-center w-full hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600 ">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2  border-dashed rounded-lg cursor-pointer  hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6 hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600">
              <svg
                className="w-8 h-8 mb-4  text-gray-400 hover:bg-bray-800  bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="#959da9"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-400 hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                <span className="font-semibold text-gray-400 hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                  Click to upload
                </span>{" "}
                or drag and drop
              </p>
              <p className="text-xs text-gray-400 hover:bg-bray-800 bg-gray-700  border-gray-600 hover:border-gray-500 hover:bg-gray-600">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div> */}
        <form
          onSubmit={() => {
            alert("Submitted");
          }}
          className=" flex flex-col gap-2 items-start"
        >
          <label className="text-sm " htmlFor="askk">
            Drag and drop file here
          </label>
          <input
            className="bg-[#374151] w-full"
            type="file"
            name=""
            id="askk"
          />
          <button className=" bg-[#374151] rounded-lg px-2 py-1 text-sm">
            Submit
          </button>
        </form>
      </div>

      <Ask />
    </div>
  );
};

export default Body;
