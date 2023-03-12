import React from "react";

interface MenuItemProps {
  showMenu: Array<{
    id: number;
    desc: string;
    subMenu: string[];
  }>;
}

const SidebarMenu = ({ showMenu }: MenuItemProps) => {
  return (
    <div>
      {showMenu.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between px-4 mb-3"
        >
          <p>{item.desc}</p>
          <div className="bg-[#f3f3f3] rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="#8c9ba5"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;