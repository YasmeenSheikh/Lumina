import { useContext } from "react";
import { Context } from "../../context/Context";
import Cards from "./Cards";
import TopSection from "./TopSection";
import Greetings from "./Greetings";
import SearchBar from "./SearchBar";
import Prompt from "./Prompt";

export default function MainContent({ onMenuClick }) {
  const { showResult } = useContext(Context);
  return (
    <main className="flex-1 h-full flex flex-col bg-gray-50 dark:bg-gray-950 px-6 pt-6">
      {/* ===== Top Bar ===== */}
      <TopSection onMenuClick={onMenuClick} />

      {!showResult ? (
        <div className="flex flex-col items-center justify-center h-screen">
          <div>
            <Greetings />
            <Cards />
          </div>
        </div>
      ) : (
        <Prompt />
      )}

      {/* ===== Bottom Search Bar (inside main, not fixed to viewport) ===== */}
      <SearchBar />
    </main>
  );
}
