import { footerList } from "@/utils/constants/dynamic.cards.data";
import { Plus } from "lucide-react";


export function Dropdown({openMenu, setOpenMenu}:any) {
    
      const handlePlus = (index: number) => {
        setOpenMenu((prevState:any) => ({
          [index]: !prevState[index],
        }));
      };

  return (
    <div className="border-[1px] border-black/20 sm:mt-2 sm:rounded-lg  bg-gray-100 overflow-y-auto max-h-[500px]">
          <ul className="text-black">
            {footerList.map((list, index) => (
              <li
                key={index}
                className="p-5 border-b border-black/20 transition-all duration-500 ease-in-out"
              >
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">{list.listHeading}</h1>
                  <div
                    className={`h-12 w-12 rounded-full bg-[#ffffff] place-items-center content-center cursor-pointer transition-all duration-500 ease-in-out ${
                      openMenu[index] ? "rotate-45" : "rotate-0"
                    }`}
                    onClick={() => handlePlus(index)}
                  >
                    <Plus />
                  </div>
                </div>

                <ul
                  className={`flex flex-col gap-3 overflow-hidden transition-all duration-500 ease-in-out ${
                    openMenu[index] ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                  }`}
                >
                  {list.listItems.map((item, index) => (
                    <li key={index}>{item.text}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
  )
}

