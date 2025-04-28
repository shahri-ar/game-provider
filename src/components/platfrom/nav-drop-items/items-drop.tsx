import Image from "next/image";
import React from "react";

import {
  factCardItems,
  productCardItems,
  solutionCardItems,
} from "@/utils/constants/dynamic.cards.data";

export function DropItems({ hovered }: any) {
  const dropDownLists = [
    productCardItems,
    solutionCardItems,
    factCardItems,
    productCardItems,
  ];
  return (
    <div className="translate-y-12">
      {dropDownLists.map((list, hoveredIndex) => (
        <div
          key={hoveredIndex}
          className={`w-full transition-all  ease-in-out overflow-hidden z-[-1] ${
            hovered === hoveredIndex
              ? "max-h-[600px] opacity-100 duration-500"
              : "max-h-0 -translate-y-10 duration-300 "
          }`}
        >
          <div className="rounded-lg grid grid-cols-3 gap-5 p-5 bg-gray-100  group">
            {list?.map((listdrop, index) => (
              <div
                key={index}
                className="flex bg-white rounded-lg p-3 justify-between"
              >
                <div className="w-1/2">
                  <h1 className="mb-5 line-clamp-1">{listdrop.title}</h1>
                  <p className="line-clamp-1">{listdrop.text}</p>
                </div>
                <div className="bg-gray-100 rounded-lg flex justify-center items-center w-1/3">
                  <Image
                    src={listdrop.imgUrl}
                    alt="janina"
                    height={100}
                    width={100}
                    className="h-18 w-14"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
