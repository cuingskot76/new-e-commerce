import React, { useEffect, useRef } from "react";

const SearchBar = ({ setIsSearch }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div className="bg-white absolute w-full h-screen top-0 left-0 z-10 px-4 py-5">
      <div className="flex items-center justify-between gap-5">
        <div className="w-full">
          <div className="relative h-12 ">
            <input
              className="peer h-full w-full rounded-full border border-[#e5e5e5] focus:border-[#e5e5e5] focus:outline-none focus:ring-0 text-sm pr-10 pl-12"
              placeholder="search product"
              ref={ref}
            />
            <div className="absolute top-2/4 left-3 grid h-5 w-5 -translate-y-2/4 place-items-center text-blue-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div
          className="bg-[#f3f3f3] px-3 py-3 rounded-full cursor-pointer hover:bg-[#dddddd]"
          onClick={() => setIsSearch(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
