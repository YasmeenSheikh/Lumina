import { useContext } from "react";
import { Context } from "../../context/Context";
import ReactMarkdown from "react-markdown";
import { assets } from "../../assets/assets";
import Loader from "./Loader";

export default function Prompt() {
  const { recentPrompt, response, loading } = useContext(Context);
  return (
    <div className="mt-1 space-y-4 overflow-y-auto scrollbar-hide mb-6 py-2 ">
      {/* User's Question */}
      <div className="flex justify-start gap-3 pb-2">
        <img
          src={assets.user_icon}
          alt="Gemini"
          className="w-8 h-8 rounded-full"
        />
        <div className="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-md shadow">
          {recentPrompt}
        </div>
      </div>

      {/* Gemini's Answer */}
      <div className="flex items-center gap-3 ">
        <img
          src={assets.gemini_icon}
          alt="Gemini"
          className="w-8 h-8 rounded-full"
        />
        {loading ? (
          <Loader />
        ) : (
          <div className=" w-full max-w-4xl overflow-y-auto bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-2xl leading-8 shadow text-gray-900 dark:text-white ">
            {/* whitespace-pre-wrap */}
            {<ReactMarkdown>{response}</ReactMarkdown>}
          </div>
        )}
      </div>
    </div>
  );
}
