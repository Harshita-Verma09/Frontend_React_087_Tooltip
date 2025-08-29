import React from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import styles from "./Tooltip.module.css";

interface IconProps {
  id: string;
  icon: React.ReactNode;
  tooltip: string;
}


const IconTooltip: React.FC<IconProps> = ({ id, icon, tooltip }) => {
  return (
    <>
      <span id={id} className={styles.icon}>{icon}</span>
      <Tooltip
        anchorSelect={`#${id}`}
        content={tooltip}
        style={{
          background: "linear-gradient(135deg, #4f023e, #fc00da)",
          color: "#fff",
          fontSize: "14px",
          borderRadius: "6px",
          padding: "6px 10px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          fontWeight: "500",
        }}
      />
    </>
  );
};

export default IconTooltip;
