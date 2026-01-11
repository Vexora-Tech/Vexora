import React, { useState } from "react";
import Img from "../assets/logo.png";

export default function SideBar() {
  const [isDark, setIsDark] = useState(true);
  const [closed, setClosed] = useState(true);
  const [isHovering, setIsHovering] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const toggleSidebar = () => {
    setClosed(!closed);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark ? "bg-zinc-950" : "bg-zinc-100"
      }`}
    >
      <nav
        className={`sidebar fixed top-0 left-0 h-full transition-all duration-300 ${
          closed ? "w-16 md:w-20" : "w-60"
        } ${isDark ? "bg-zinc-900" : "bg-zinc-200"} z-50`}
      >
        <div className="h-full flex flex-col">
          {/* Logo and Toggle Section */}
          <div
            className={`flex items-center px-4 py-4 ${
              closed ? "justify-center" : "justify-between"
            }`}
          >
            {!closed && (
              <span>
                <img className="w-10" src={Img} alt="Logo" />
              </span>
            )}
            <span
              onClick={toggleSidebar}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className={`cursor-pointer hover:scale-110 ${
                isDark ? "text-zinc-100" : "text-zinc-900"
              }`}
            >
              {closed && !isHovering ? (
                <img className="w-8" src={Img} alt="Logo" />
              ) : (
                <i className="fa-solid fa-arrow-right-from-bracket fa-rotate-180 transition-none"></i>
              )}
            </span>
          </div>

          {/* New Chat Button */}
          <div className="px-4 py-2">
            <div
              className={`flex gap-3 px-2 cursor-pointer hover:bg-gray-400/10 p-2 rounded-md transition-colors ${
                closed ? "justify-center" : ""
              } ${isDark ? "text-zinc-100" : "text-zinc-900"}`}
            >
              <i className="fa-regular fa-pen-to-square text-sm"></i>
              {!closed && <h1 className="text-sm">New Chat</h1>}
            </div>
          </div>

          {/* Chats Section */}
          <div
            className={`px-4 py-6 flex-1 overflow-y-auto ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            {!closed && (
              <h1 className="text-gray-400 text-xs ml-2 mb-2">Chats</h1>
            )}
            <div className="space-y-1">
              <h1
                className={`text-sm hover:bg-gray-400/10 p-2 rounded-md cursor-pointer transition-colors ${
                  closed ? "text-center" : ""
                }`}
              >
                {closed ? "" : "recent chats"}
              </h1>
            </div>
          </div>

          {/* Mode Changer */}
          <div
            className={`px-4 py-4 ${
              isDark ? "text-zinc-100" : "text-zinc-900"
            }`}
          >
            <div
              className={`flex items-center ${
                closed ? "justify-center flex-col gap-3" : "justify-between"
              }`}
            >
              <div
                className={`flex items-center ${
                  closed ? "flex-col gap-2" : "gap-3"
                }`}
              >
                <div className="relative w-5 h-5 shrink-0">
                  <i
                    className={`fa-solid fa-moon absolute transition-opacity duration-300 ${
                      isDark ? "opacity-100" : "opacity-0"
                    }`}
                  ></i>
                  <i
                    className={`fa-solid fa-sun absolute transition-opacity duration-300 text-yellow-500 ${
                      isDark ? "opacity-0" : "opacity-100"
                    }`}
                  ></i>
                </div>
                {!closed && <h1 className="text-sm">Mode</h1>}
              </div>
              <button
                onClick={toggleTheme}
                className={`relative w-11 h-6 rounded-full transition-colors duration-300 shrink-0 ${
                  isDark ? "bg-gray-700" : "bg-blue-500"
                }`}
                aria-label="Toggle theme"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-transform duration-300 ${
                    isDark ? "translate-x-0" : "translate-x-5"
                  }`}
                ></span>
              </button>
            </div>
          </div>

          {/* Settings Section */}
          <div
            className={`px-4 py-4 border-t ${
              isDark
                ? "border-gray-700 text-zinc-100"
                : "border-gray-300 text-zinc-900"
            }`}
          >
            <div
              className={`flex gap-3 cursor-pointer hover:bg-gray-400/10 p-2 rounded-md transition-colors ${
                closed ? "justify-center" : "items-center"
              }`}
            >
              <i className="fa-solid fa-gear"></i>
              {!closed && <h1 className="text-sm">Settings</h1>}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content area with proper margin */}
      <main
        className={`transition-all duration-300 ${
          closed ? "ml-16 md:ml-20" : "ml-60"
        }`}
      >
        {/* Your main content goes here */}
      </main>
    </div>
  );
}
