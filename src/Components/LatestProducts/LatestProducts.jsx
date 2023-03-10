import React from "react";
import Paragraph from "../Atoms/Paragraph";

const LatestProducts = () => {
  const latestProduct = [
    {
      id: 1,
      img: "../../products/hoodie-products.jpg",
      desc: "Greenlight Jaket Crop Hoodie Zipper Wanita 071222",
      original: "379.00",
      sale: "304.500",
      percent: "20%",
    },
    {
      id: 2,
      img: "../../products/sling-bag-products.jpg",
      desc: "Greenlight Quilted Sling Bag 011222",
      original: "450.650",
      sale: "343.321",
      percent: "30%",
    },
    {
      id: 3,
      img: "../../products/jeans-products.jpg",
      desc: "Greenlight Celana Wide Leg Jeans 161222      ",
      original: "489.500",
      sale: "342.500",
      percent: "30%",
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between my-5">
        <Paragraph style="text-xl font-bold">Latest Products</Paragraph>
        <Paragraph isMuted={true} style="cursor-pointer">
          See all
        </Paragraph>
      </div>
      <div className="flex gap-5">
        {latestProduct.map((product) => {
          return (
            <div
              key={product.id}
              className="relative border border-blue-100 pb-3 rounded-md"
            >
              <div className="w-[200px]">
                <img
                  src={product.img}
                  alt="product"
                  className="w-full h-full"
                />
              </div>
              <div className="px-2">
                <Paragraph style="font-medium pt-3 pb-2">
                  {product?.desc?.length > 30
                    ? product.desc.slice(0, 30) + "..."
                    : product.desc}
                </Paragraph>
                <div className="flex gap-3 items-center">
                  <Paragraph isSale={true} style="text-[14px] font-normal">
                    Rp. {product.sale}
                  </Paragraph>
                  <Paragraph style="font-normal line-through text-[10px]">
                    Rp. {product.original}
                  </Paragraph>
                </div>
              </div>
              <div className="absolute items-center top-3 flex justify-between px-3 w-full">
                <div className="bg-red-500 px-2 py-1 rounded-md text-white">
                  <Paragraph style="text-[10px]">{product.percent}</Paragraph>
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

export default LatestProducts;
