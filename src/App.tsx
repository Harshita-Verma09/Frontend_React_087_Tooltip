import React from "react";
import IconTooltip from "./component/TooltipModel";


import { FaHome, FaEnvelope, FaCog } from "react-icons/fa"; // Modern icons

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#111"
    }}>
      <IconTooltip id="home-icon" icon={<FaHome />} tooltip="Go to Homepage" />
      <IconTooltip id="email-icon" icon={<FaEnvelope />} tooltip="Check your Messages" />
      <IconTooltip id="settings-icon" icon={<FaCog />} tooltip="Adjust your Settings" />
    </div>
  );
}

export default App;
  
