import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Paragraph from "../Atoms/Paragraph";
import "swiper/css";
import { Pagination } from "swiper";

const Viewed = () => {
  const recenlyViewed = [
    {
      id: 1,
      img: "../../viewed/hoodie.jpg",
      desc: "Greenlight Jaket Mid Crop Hoodie Zipper Wanita 010223",
      original: "479.500",
      sale: "384.500",
      percent: "20%",
    },
    {
      id: 2,
      img: "../../viewed/hoodie-2.jpg",
      desc: "Greenlight Jaket Crop Hoodie Zipper Wanita 061222",
      original: "379.650",
      sale: "301.720",
      percent: "20%",
    },
    {
      id: 3,
      img: "../../viewed/s-shirt.jpg",
      desc: "Greenlight Kaos Wanita Lengan Pendek 020123",
      original: "178.500",
      sale: "135.500",
      percent: "20%",
    },
    {
      id: 4,
      img: "../../viewed/shirt.jpg",
      desc: "Greenlight Kemeja Kerah Mandarin Basic Pria 021222",
      original: "399.240",
      sale: "199.200",
      percent: "50%",
    },
    {
      id: 5,
      img: "../../viewed/shirt-2.jpg",
      desc: "Greenlight Kemeja Kerah Mandarin Basic Pria 061222",
      original: "399.000",
      sale: "199.500",
      percent: "50%",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mt-5 mb-3">
        <Paragraph style="text-xl font-bold">Recenly Viewed</Paragraph>
        <Paragraph isMuted={true} style="cursor-pointer">
          See all
        </Paragraph>
      </div>
      <div className="flex gap-5">
        {recenlyViewed.map((sale) => {
          return (
            <div
              key={sale.id}
              className="relative border border-blue-100 pb-3 rounded-md"
            >
              <div className="w-[200px]">
                <img src={sale.img} alt="sale" className="w-full h-full " />
                <div className="px-2">
                  <Paragraph style="font-medium pt-3 pb-2">
                    {sale.desc.length > 30
                      ? sale.desc.slice(0, 30) + " ..."
                      : sale.desc}
                  </Paragraph>
                  <div className="flex gap-3 items-center">
                    <Paragraph isSale={true} style="text-[14px] font-normal">
                      Rp. {sale.sale}
                    </Paragraph>
                    <Paragraph style="font-normal line-through text-[10px]">
                      Rp. {sale.original}
                    </Paragraph>
                  </div>
                </div>
              </div>

              <div className="absolute items-center top-3 flex justify-between px-3 w-full">
                <div className="bg-red-500 px-2 py-1 rounded-md text-white">
                  <Paragraph style="text-[10px]">{sale.percent}</Paragraph>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#8c9ba5"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Viewed;
