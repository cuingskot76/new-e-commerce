import React from "react";

interface SidebarProps {
  setIsCategory: (prev: boolean) => void;
}

const Sidebar = ({ setIsCategory }: SidebarProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 z-20 w-[60%] bg-white">
        asdf
      </div>
      <div
        className="sidebar-backdrop fixed top-0 left-0 right-0 bottom-0 z-10"
        onClick={() => setIsCategory(false)}
      ></div>
    </>
  );
};

export default Sidebar;
