import { MdOutlineMenu } from "react-icons/md";
import { assets } from "../../assets/assets";

export default function TopSection({ onMenuClick }) {
  return (
    <div className="w-full flex items-center justify-between mb-2">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Lumina
      </h1>

      <div className="flex items-center gap-4">
        <button
          className="md:hidden text-gray-600 dark:text-gray-300"
          onClick={onMenuClick}
          aria-label="Open menu"
        >
          <MdOutlineMenu size={26} />
        </button>
        <img
          src={assets.user_icon}
          alt="User Profile"
          className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700"
        />
      </div>
    </div>
  );
}
