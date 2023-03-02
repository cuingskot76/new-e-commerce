import React from "react";

const Paragraph = ({ children, isMuted, isSale, style }) => {
  return (
    <div
      className={`${isMuted && "muted"} ${isSale && "text-[#d61f11]"} ${style}`}
    >
      {children}
    </div>
  );
};

export default Paragraph;
