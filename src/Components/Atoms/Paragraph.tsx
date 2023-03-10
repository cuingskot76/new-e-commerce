import React, { PropsWithChildren } from "react";

interface Props {
  isMuted?: boolean;
  isSale?: boolean;
  style: string;
}

const Paragraph: React.FC<PropsWithChildren<Props>> = ({
  children,
  isMuted,
  isSale,
  style,
}) => {
  return (
    <div
      className={`${isMuted && "muted"} ${isSale && "text-[#d61f11]"} ${style}`}
    >
      {children}
    </div>
  );
};

export default Paragraph;
