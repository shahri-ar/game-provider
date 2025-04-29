"use client";

import Image from "next/image";
import Link from "next/link";
import DynamicButton from "../common/dynamic.button.component";
import { ChevronUp, Mail, Menu } from "lucide-react";
import { Dropdown } from "./nav-drop-items/drop-menu";
import { useState, useEffect } from "react";
import { navItems } from "@/utils/constants/dynamic.cards.data";
import { DropItems } from "./nav-drop-items/items-drop";

function Navbar() {
  const [openDrop, setOpenDrop] = useState(false);
  const [hovered, setHovered] = useState<null | number>(null);
  const [closing, setClosing] = useState<null | number>(null);
  const [openMenu, setOpenMenu] = useState<{ [key: number]: boolean }>({});

  const navlinkItems = [
    { text: "Compliance" },
    { text: "Knowledge Base" },
    { text: "Event" },
  ];

  // Handle animation closing state
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (closing !== null) {
      timer = setTimeout(() => {
        setClosing(null);
      }, 500); // Match this to your animation duration
    }
    return () => clearTimeout(timer);
  }, [closing]);

  const handleMouseEnter = (index: number) => {
    setClosing(null); // Cancel any closing animation
    setHovered(index);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const nextElement = event.relatedTarget as HTMLElement;
  
    // Check if the next element is inside the same nav container
    if (nextElement && nextElement.closest("li")) {
      const newIndex = navItems.findIndex((item) => 
        nextElement.textContent?.includes(item.title)
      );
      
      if (newIndex !== -1) {
        setHovered(newIndex);
        return;
      }
    }
  
    // Set closing state and clear hovered
    if (hovered !== null) {
      setClosing(hovered);
      setHovered(null);
    }
  };

  const handleOpenDrop = (index: number) => {
    setOpenDrop((prevState) => !prevState);
    setOpenMenu((prevState: any) => ({
      [index]: !prevState[index],
    }));
  };

  return (
    <section className="fixed sm:top-2 left-0 w-full z-[9999]">
      <div className="2xl:w-[67%] mx-auto container sm:px-5">
        <div className="relative">
          <div className="bg-white flex justify-between items-center px-6 py-5 gap-4 sm:rounded-2xl shadow-md">
            <div className="flex justify-between h-full items-center w-full order-1 md:order-2">
              <div className="place-content-center h-full">
                <Image
                  src="/asset/logo.png"
                  alt="logo"
                  height={300}
                  width={500}
                  className="h-10 w-24"
                />
              </div>
              <div className="text-sm font-semibold">
                <ul className="hidden lg:flex space-x-0 ">
                  {navItems.map((item, index) => (
                    <li
                      key={index}
                      className="group"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Link
                        className="text-black text-xs py-2 px-2 rounded-xl transition-all duration-500 group-hover:bg-gray-100 flex items-center group"
                        href={item.url}
                      >
                        {item.title}
                        <ChevronUp className="p-1 group-hover:rotate-180 transition-transform duration-500 group-hover:text-red-600" />
                      </Link>

                      {(hovered === index || closing === index) && (
                        <div
                          className={`absolute left-0  w-full  rounded-md transition-all duration-500  ${
                            hovered === index ? "animate-dropdown-enter" : "animate-dropdown-exit"
                          }`}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <DropItems hovered={hovered} />
                        </div>
                      )}
                    </li>
                  ))}
                  {navlinkItems.map((item, index) => (
                    <li
                      key={index}
                      className="text-black text-xs py-2 px-2 rounded-xl transition-all duration-500 hover:bg-gray-100 flex items-center group cursor-pointer lg:hidden xl:flex "
                    >
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-3 h-full">
                <DynamicButton
                  buttonText="En"
                  buttonType="primary"
                  customClass="hidden xl:block"
                />
                <DynamicButton
                  buttonText=""
                  buttonType="ternary"
                  customClass="bg-red-500 text-white"
                >
                  <span className="hidden sm:inline z-10">CONTACT US</span>
                  <Mail className="sm:hidden my-5" />
                </DynamicButton>
              </div>
            </div>

            <div
              onClick={() => handleOpenDrop(-1)}
              className="order-2 md:order-1 md:w-1/2 lg:hidden cursor-pointer"
            >
              <div className="bg-gray-100 flex w-fit justify-center items-center p-2 rounded-lg gap-2 font-sofiya text-sm lg:hidden">
                <Menu className="p-[2px]" />
                <span className="hidden md:inline">MENU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navbar Menu Dropdown */}
        <div className="relative">
          <div
            className={`absolute w-full transition-all duration-500 ease-in-out overflow-hidden z-[-1] ${
              openDrop ? "max-h-[600px] opacity-100" : "max-h-0 -translate-y-10"
            }`}
          >
            <Dropdown openMenu={openMenu} setOpenMenu={setOpenMenu} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;