import React, { ReactNode } from "react";

interface ParagraphProps {
  children: ReactNode;
  isMuted?: boolean;
  isSale?: boolean;
  style: string;
}

const Paragraph = ({ children, isMuted, isSale, style }: ParagraphProps) => {
  return (
    <div
      className={`${isMuted && "muted"} ${isSale && "text-[#d61f11]"} ${style}`}
    >
      {children}
    </div>
  );
};

export default Paragraph;
