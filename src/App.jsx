// ...existing code...
import React, { useState } from "react";
import SideBar from "./components/SideBar";

function App() {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <SideBar />
    </>
  );
}

export default App;
// ...existing code...
