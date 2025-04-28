import { CircleChevronRight } from "lucide-react";

export function Bannar() {
  return (
    <section className="py-16">
      <div className="container mx-auto 2xl:w-[67%] px-5">
        <div className="relative flex flex-col justify-between">
          <div className="relative w-full h-[400px] bg-[url('/asset/banner-small.webp')] md:bg-[url('/asset/bruse-bannar.webp')] bg-cover bg-center rounded-[15px] before:rounded-full before:absolute before:top-[71.8%] before:left-0 before:h-[25px] before:w-[25px] before:[box-shadow:-10px_10px_0_#ffffff]">
            <div className=" absolute flex h-[22%] w-[285px] bottom-0 ">
              <div className="flex w-full relative rounded-tr-3xl rounded-bl-xl border-t-[10px] border-r-[10px] border-white bg-dark before:absolute before:top-0 before:left-0 before:h-[25px] before:w-[25px] after:absolute after:bottom-0 after:right-0 after:h-[25px] after:w-[25px] after:rounded-full before:rounded-full before:[box-shadow:-10px_-10px_0_#ffffff] after:[box-shadow:10px_10px_0_#ffffff] justify-between items-center p-5">
                
                <h1 className="text-center text-white ">
                  Get Free Report
                </h1>
                <CircleChevronRight className="text-white" />
              </div>
              <div className="relative after:absolute after:bottom-0  after:h-[25px] after:w-[25px]  after:rounded-full after:[box-shadow:-10px_10px_0_#ffffff]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
