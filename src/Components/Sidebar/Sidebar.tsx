import React, { useState } from "react";
import Paragraph from "../Atoms/Paragraph";
import { sidebar } from "../constants";
import SidebarMenu from "./SidebarMenu";

interface SidebarProps {
  setIsCategory: (prev: boolean) => void;
}

interface MenuItemProps {
  id: number;
  desc: string;
  subMenu: string[];
}

const Sidebar = ({ setIsCategory }: SidebarProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [descMenu, setDescMenu] = useState("");
  const [showMenu, setShowMenu] = useState<MenuItemProps[]>([]);

  const backPrev = () => {
    setIsClicked(false);
  };

  const nextPrev = (id: number) => {
    setIsClicked(true);
    const sidebarId = sidebar.find((item) => item.id === id);
    const sidebarMenu = sidebarId?.menu;

    if (sidebarMenu !== undefined) {
      setShowMenu(sidebarMenu);
    } else {
      setShowMenu([]);
    }

    if (sidebarId !== undefined) {
      setDescMenu(sidebarId?.desc);
    } else {
      setDescMenu("");
    }
  };

  return (
    <>
      <div className="fixed top-0 left-0 bottom-0 z-20 w-[60%] bg-white">
        {isClicked ? (
          <>
            <div className="flex items-center px-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={backPrev}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              <Paragraph style="font-medium text-xl pxs-4 py-4 w-full text-center">
                {descMenu}
              </Paragraph>
            </div>
            <SidebarMenu showMenu={showMenu} />
          </>
        ) : (
          <>
            <Paragraph style="font-medium text-xl px-4 py-4 text-center border border-b-gray-100">
              Menu
            </Paragraph>
            <div className="px-4">
              {sidebar.map((item) => (
                <div
                  key={item.id}
                  className="py-2 flex items-center mb-2 gap-3"
                >
                  <div className="bg-[#f3f3f3] flex flex-wrap justify-between items-center w-full rounded-md">
                    <Paragraph style="font-medium text-lg pl-4">
                      {item.desc}
                    </Paragraph>
                    <div className="h-[80px] rounded-md pr-3">
                      <img
                        src={item.img}
                        alt={item.desc}
                        className="w-full h-full rounded-md"
                      />
                    </div>
                  </div>
                  {item.desc !== "Home" && (
                    <div
                      className="bg-[#f3f3f3] py-7 px-1 rounded-md"
                      onClick={() => nextPrev(item.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="#8c9ba5"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
      <div
        className="sidebar-backdrop fixed top-0 left-0 right-0 bottom-0 z-10"
        onClick={() => setIsCategory(false)}
      ></div>
    </>
  );
};

export default Sidebar;
