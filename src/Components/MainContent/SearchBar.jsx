import { useContext } from "react";
import { FiSend } from "react-icons/fi";
import { Context } from "../../context/Context";

export default function SearchBar() {
  const { input, setInput, onsent } = useContext(Context);
  return (
    <div className="mt-auto w-full  mx-auto">
      <div className="relative flex items-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-md px-4 py-3">
        <input
          type="text"
          placeholder="Ask me anything..."
          className="flex-1 bg-transparent outline-none text-gray-800 dark:text-white placeholder-gray-400 text-base"
          aria-label="Prompt input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onsent();
            }
          }}
        />
        <button
          className="text-blue-600 hover:text-blue-700 transition"
          aria-label="Send"
          onClick={() => onsent()}
        >
          <FiSend size={22} />
        </button>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
        Lumina may display inaccurate info, so double-check important details.
      </p>
    </div>
  );
}
