import { useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import MainContent from "./Components/MainContent/MainContent";

import "./App.css";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar - Desktop */}
      <div className="hidden md:flex">
        <Sidebar />
      </div>

      {/* Sidebar - Mobile Overlay */}
      {isSidebarOpen && (
        <div className="fixed z-50 flex">
          {/* Dark Overlay */}
          {/* <div className="fixed " onClick={() => setIsSidebarOpen(false)}></div> */}

          {/* Sidebar */}
          <div className="relative z-50 w-64">
            <Sidebar onClose={() => setIsSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <MainContent onMenuClick={() => setIsSidebarOpen(true)} />
      </div>
    </div>
  );
}

export default App;
