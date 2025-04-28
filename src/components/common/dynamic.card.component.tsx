import Image from "next/image";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Bookmark, CircleArrowRight, UserRound } from "lucide-react";

import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  cardVariants,
  CardVariantProps,
  descriptionVariants,
  DescriptionVariantProps,
} from "../ui/card";


interface DynamicCardProps extends CardVariantProps, DescriptionVariantProps {
  cardDescription: string;
  children?: ReactNode;
  imgUrl?: string;
  date?: string;
  className?: string;
  imgClassName?: string;
  tag?:string;
  titleClassName?:string;
}

const DynamicCard = ({
  cardDescription,
  imgUrl,
  variant,
  descriptionVariant,
  date,
  className,
  imgClassName,
  tag,
  titleClassName,
}: DynamicCardProps) => 
    
    {
  return (
    <Card className={cn(cardVariants({ variant }), className)}>
      {imgUrl && (
        <div className={cn(imgClassName)}>
          <Image
            src={imgUrl}
            alt=""
            height={100}
            width={400}
            objectFit="cover"
            className="rounded-t-lg w-full h-full group-hover:scale-110 duration-500"
          />
        </div>
      )}
      { tag &&
        (<div className={cn("flex gap-3 border-b-[1px] pb-5 text-sm ",tag)}>
        <div className="flex items-center">
          <Bookmark className="p-[2px]" /> Company News
        </div>
        <div className="flex items-center">
          <UserRound className="p-[2px]" /> Kirill Onishchenko
        </div>
      </div>)
      }
      <CardHeader>
        <CardTitle className={cn(descriptionVariants({ descriptionVariant }),titleClassName)}>
          {cardDescription}
        </CardTitle>
      </CardHeader>
      <CardContent>
          <div className="flex justify-between overflow-hidden">
            <div className="flex gap-1 -translate-x-[93px] group-hover:translate-x-0 duration-500">
              <span className="">View Details</span>{" "}
              <CircleArrowRight className="p-[2px] text-red-600" />
            </div>
            <div className="">{date}</div>
          </div>
      </CardContent>
    </Card>
  );
};

export default DynamicCard;
