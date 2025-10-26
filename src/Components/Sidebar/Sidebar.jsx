import { useState, useEffect, useContext } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoSettings } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { Context } from "../../context/Context";

export default function Sidebar({ onClose }) {
  const [extended, setExtended] = useState(true);
  const { onsent, previousPrompt, setRecentPrompt, newChat } =
    useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onsent(prompt);
  };

  return (
    <aside
      className={`${
        extended ? "w-64" : "w-20"
      } h-screen bg-gray-900 text-white flex flex-col p-4 border-r border-gray-800 transition-all duration-300 `}
    >
      {/* Header */}
      <div
        className="mb-6 cursor-pointer flex items-center justify-between"
        onClick={() => setExtended(!extended)}
      >
        <MdOutlineMenu size={28} />
        {onClose && (
          <button onClick={onClose} className="sm:hidden text-gray-400">
            ✖
          </button>
        )}
      </div>
      {/* New Chat Button */}
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-lg w-full mb-6 transition"
        onClick={() => newChat()}
      >
        {extended ? "+ New Chat" : "+"}
      </button>

      {/* Chat History */}

      <div className="flex-1 overflow-y-auto scrollbar-hide">
        {extended && (
          <h2 className="text-gray-400 text-sm uppercase mb-2">Recent</h2>
        )}
        {extended && (
          <ul className="space-y-2">
            {previousPrompt.map((item, index) => {
              return (
                <li
                  className="p-2 rounded-lg hover:bg-gray-800 cursor-pointer"
                  onClick={() => loadPrompt(item)}
                >
                  💬 {item.slice(0, 18)}...
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Footer / Settings */}
      <div className="mt-6 border-t border-gray-700 pt-4 space-y-2">
        <button className="flex items-center gap-2.5 text-gray-300 hover:text-white w-full py-2 px-3 rounded-lg hover:bg-gray-800 transition">
          <IoIosHelpCircleOutline size={20} />
          {extended && "Help"}
        </button>
        <button className="flex items-center gap-2.5 text-gray-300 hover:text-white w-full py-2 px-3 rounded-lg hover:bg-gray-800 transition">
          <FiActivity size={20} />
          {extended && "Activity"}
        </button>
        <button className="flex items-center gap-2.5 text-gray-300 hover:text-white w-full py-2 px-3 rounded-lg hover:bg-gray-800 transition">
          <IoSettings size={20} />
          {extended && "Settings"}
        </button>
      </div>
    </aside>
  );
}
