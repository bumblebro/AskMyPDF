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
      <div className="w-8/12 lg:w-7/12 pt-14">
        <div className="flex flex-col items-start pb-4">
          <div className="flex ">
            <h1 className="pb-5 text-2xl font-semibold lg:text-4xl">
              Chat with PDF
            </h1>
          </div>{" "}
          <form className="flex flex-col items-start w-full gap-2 pb-8">
            <label className="text-xs lg:text-sm" htmlFor="askk">
              Upload your PDF
            </label>
            <input
              className="bg-[#374151] w-full rounded-md text-xs lg:text-sm"
              type="file"
              name=""
              id="askk"
              accept="application/pdf"
              onChange={handleChange}
            />
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
    </div>
  );
};

export default Body;
