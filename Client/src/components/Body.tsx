import { FC, useState } from "react";
import Ask from "./Ask";
import pdfToText from "react-pdftotext";
import ContentLoader from "react-content-loader";

interface BodyProps {}

const Body: FC<BodyProps> = ({}) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [uploaded, setUploaded] = useState(false);
  const [path, setPath] = useState<string>();
  const [visible, setVisible] = useState(false);
  const [alertText, setAlertText] = useState("");

  function getFileExtension(fileName: string) {
    const parts = fileName.split(".");
    return parts[parts.length - 1];
  }
  function displayalert() {
    const start = () => {
      setTimeout(() => {
        setVisible(false);
        window.location.reload();
      }, 5000);
    };
    setVisible(true);
    start();
  }

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setVisible(false);
    setPath("");
    setText("");
    setAlertText("");
    if (e.target.files && e.target.files.length > 0) {
      console.log(e.target.files[0].size);
      const file = e.target.files[0];
      const allowedExtension = "pdf";
      const fileExtension = getFileExtension(file.name);
      if (fileExtension !== allowedExtension) {
        setPath("");
        setAlertText("Only PDF files are allowed!");
        displayalert();
        return;
      }
      console.log(e.target.files[0].size);
      if (e.target.files[0].size > 2097152) {
        setPath("");
        setAlertText("File size is too big");
        displayalert();
        return;
      }
      setPath(file.name);
      console.log(path);

      setLoading(true);
      await pdfToText(file)
        .then((text) => {
          if (text.length < 10) {
            setPath("");
            setAlertText("Upload pdf with text in it!");
            displayalert();
            return;
          }
          setText(text);
          setLoading(false);
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
      <div className="w-10/12 pb-4 md:w-7/12 pt-14">
        <h1 className="pb-5 text-2xl font-semibold lg:text-4xl">
          Chat with PDF
        </h1>
        <div className="pb-6 mx-auto ">
          <label
            htmlFor="example5"
            className="block mb-1 text-sm font-medium text-gray-700"
          >
            Upload your PDF
          </label>
          <label className="flex items-center justify-center w-full p-6 transition-all border-2 border-gray-200 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary-300">
            <div className="space-y-1 text-center">
              <div className="inline-flex items-center justify-center w-10 h-10 mx-auto bg-gray-500 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#6a7280"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-500 bg-gray-500"
                >
                  <path d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                </svg>
              </div>
              <div className="text-gray-600">
                <a
                  href="#"
                  className="font-medium text-primary-500 hover:text-primary-700"
                >
                  Click to upload
                </a>{" "}
              </div>
              {path ? (
                <p className="text-sm text-green-500">{path}</p>
              ) : (
                <p className="text-sm text-gray-500">
                  PDF (Limit 200MB per file)
                </p>
              )}
            </div>
            <input
              id="example5"
              type="file"
              className="sr-only"
              accept="application/pdf"
              onChange={handleChange}
            />
          </label>
        </div>{" "}
        {visible && (
          <div
            className="w-full p-2 mb-4 text-sm text-center text-red-300 bg-gray-800 rounded-lg lg:p-4 animate-pulse"
            role="alert"
          >
            {alertText}
          </div>
        )}
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
          uploaded && (
            <>
              <Ask text={text} />
            </>
          )
        )}
      </div>{" "}
    </div>
  );
};

export default Body;
