import { affiliateBrands } from "@/utils/constants/dynamic.cards.data";
import { ArrowRight, Image } from "../platfrom";

export function Affiliate() {
  return (
    <section className="bg-gray-100 pb-16">
      <div className="container mx-auto 2xl:w-[67%] px-5">
        <h1 className="text-center mb-16 text-4xl sm:text-5xl font-sofiya">
          Affiliated Brands
        </h1>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 ">
          {affiliateBrands.map((brand, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md transition-all duration-300 group hover:shadow-none"
            >
              <div className="flex justify-between">
                <Image src={brand.url} alt="" height={80} width={75} />
                <div className="relative before:absolute before:z-0 before:transition-all before:duration-300 before:ease-in-out before:bg-black before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-0 before:opacity-0  group-hover:before:opacity-100  group-hover:before:h-10 group-hover:before:w-10 before:h-0 before:w-0 group-hover:before:scale-100 before:rounded-full bg-gray-100 transition-transform duration-300 p-2 h-10 w-10 rounded-full place-items-center place-content-center">
                  <ArrowRight className="p-1 group-hover:text-white transition-all duration-300 z-10 relative" />
                </div>
              </div>
              <h1 className="font-sofiya my-5">{brand.title}</h1>
              <p className="text-sm font-sofia_Lite text-gray-400">
                {brand.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
