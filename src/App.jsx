// ...existing code...
import React, { useState } from "react";
import SideBar from "./components/SideBar";

function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* <div className="flex w-full items-center justify-center px-4 py-4">
        <button
          className="text-4xl rounded"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onTouchStart={() => setHovered(true)}
          onTouchEnd={() => setHovered(false)}ls
          aria-label="Home"
        >
          {hovered ? (
            <img
              src={Img}
              alt="User"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
          ) : (
            <i class="fa-solid fa-bars"></i>
          )}
        </button>
      </div> */}
      <SideBar />
    </>
  );
}

export default App;
// ...existing code...
