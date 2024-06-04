import { FC, useState } from "react";
import Ask from "./Ask";
import pdfToText from "react-pdftotext";
import ContentLoader from "react-content-loader";

interface BodyProps {}

const Body: FC<BodyProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [uploaded, setUploaded] = useState(false);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      console.log(e.target.files[0].size);
      if (e.target.files[0].size > 2097152) {
        alert("File size is too big");
        return;
      }
      setLoading(true);
      await pdfToText(file)
        .then((text) => {
          setText(text);
          setLoading(false);
          console.log(text);
          setUploaded(true);
        })
        .catch(() => {
          console.error("Failed to extract text from pdf");
          setLoading(false);
        });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-9/12 pb-4 lg:w-7/12 pt-14">
        <h1 className="pb-5 text-2xl font-semibold lg:text-4xl">
          Chat with PDF
        </h1>
        <form className="flex flex-col">
          <label className="pb-2 text-xs lg:text-sm" htmlFor="askk">
            Upload your PDF
          </label>
          <input
            className="bg-[#374151]  rounded-md text-xs lg:text-sm"
            type="file"
            name=""
            id="askk"
            accept="application/pdf"
            onChange={handleChange}
          />
        </form>
        <form>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="file_input"
          >
            Upload file
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </form>
        {loading ? (
          <>
            <ContentLoader
              speed={1}
              backgroundColor={"#333"}
              foregroundColor={"#999"}
              viewBox="0 0 380 70"
            >
              <rect x="0" y="0" rx="4" ry="4" width="110" height="10" />
              <rect x="0" y="15" rx="4" ry="4" width="370" height="20" />
              <rect x="0" y="40" rx="3" ry="3" width="40" height="19" />
            </ContentLoader>
          </>
        ) : (
          uploaded && <Ask text={text} />
        )}
      </div>
    </div>
  );
};

export default Body;
