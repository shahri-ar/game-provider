import DynamicButton from "../common/dynamic.button.component";
import { ArrowRight } from "lucide-react";
import DynamicCard from "../common/dynamic.card.component";

export function News() {
  return (
    <section className="py-20">
      <div className="container mx-auto 2xl:w-[67%] px-5">
        <div className="place-items-center lg:place-items-start lg:flex lg:justify-between">
          <div className="lg:w-1/2 text-center lg:text-start">
            <h1 className="text-5xl font-sofiya ">Latest News</h1>

            <p className=" font-sofia_Lite my-5 text-gray-600 ">
              Stay updated with our latest news and press releases, and access
              our Knowledge Base for essential insights and guides to excel in
              iGaming.
            </p>
          </div>
          <div className="flex gap-4 mb-10">
            <DynamicButton buttonText="news" buttonType="primary" />
            <DynamicButton buttonText="knowledge base" buttonType="secondary" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 rounded-xl hover:shadow-md">
            <DynamicCard
              descriptionVariant="secondary"
              className="bg-gray-100 rounded-xl group overflow-hidden h-full"
              variant="primary"
              titleClassName="text-2xl"
              cardDescription="SOFTSWISS Partners with Eduardo Barrichello for the 2025 FIA
                    World Endurance Championship"
              imgUrl="/asset/newsImage/Eduardo-Barrichello-1200x800_no-text.webp"
              imgClassName="overflow-hidden lg:h-1/2"
              date="Feb 27, 2025"
              tag="px-5 pt-5 justify-between"
            ></DynamicCard>
          </div>

          <div className=" rounded-xl hover:shadow-md">
            <DynamicCard
              className=" bg-gray-100 rounded-xl group overflow-hidden "
              variant="primary"
              cardDescription="SOFTSWISS Partners with Eduardo Barrichello for the 2025 FIA"
              imgUrl="/asset/newsImage/COHORT-ANALYSIS-1200x800_no-text.webp"
              imgClassName="overflow-hidden h-32 flex items-center rounded-t-lg"
              date="Feb 27, 2025"
            ></DynamicCard>
          </div>
          <div className=" rounded-xl hover:shadow-md">
            <DynamicCard
              className=" bg-gray-100 rounded-xl group overflow-hidden "
              variant="primary"
              cardDescription="SOFTSWISS Partners with Eduardo Barrichello for the 2025 FIA"
              imgUrl="/asset/newsImage/COHORT-ANALYSIS-1200x800_no-text.webp"
              imgClassName="overflow-hidden h-32 flex items-center rounded-t-lg"
              date="Feb 27, 2025"
            ></DynamicCard>
          </div>
          <div className=" rounded-xl hover:shadow-md">
            <DynamicCard
              className=" bg-gray-100 rounded-xl group overflow-hidden "
              variant="primary"
              cardDescription="SOFTSWISS Partners with Eduardo Barrichello for the 2025 FIA"
              imgUrl="/asset/newsImage/COHORT-ANALYSIS-1200x800_no-text.webp"
              imgClassName="overflow-hidden h-32 flex items-center rounded-t-lg"
              date="Feb 27, 2025"
            ></DynamicCard>
          </div>
          <div className=" rounded-xl hover:shadow-md">
            <DynamicCard
              className=" bg-gray-100 rounded-xl group overflow-hidden "
              variant="primary"
              cardDescription="SOFTSWISS Partners with Eduardo Barrichello for the 2025 FIA"
              imgUrl="/asset/newsImage/COHORT-ANALYSIS-1200x800_no-text.webp"
              imgClassName="overflow-hidden h-32 flex items-center rounded-t-lg"
              date="Feb 27, 2025"
            ></DynamicCard>
          </div>
        </div>

        <div className="w-full py-5 text-sm font-sofia_Lite bg-gray-200 mt-5 rounded-lg place-items-center group inset-shadow-md ">
          <div className="flex gap-2 items-center text-center text-red-600 duration-300 group-hover:text-black -translate-x-5 group-hover:translate-x-5 ">
            <ArrowRight className=" w-5 text-transparent group-hover:text-black transfrom transition-all duration-300" />
            ALL NEWS
            <ArrowRight className="w-5 group-hover:text-transparent transfrom transition-all duration-200" />
          </div>
        </div>
      </div>
    </section>
  );
}
