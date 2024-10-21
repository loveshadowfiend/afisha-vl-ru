import { EventCategories } from "@/types/enums";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { ArrowRight, Heart } from "lucide-react";
import viperr from "../../public/viperr.jpg";
import Image from "next/image";
import Link from "next/link";
import EventBlockImageButtons from "./event-block-image-buttons";

export default async function EventBlock(props: {
  city: string;
  eventCategory: keyof typeof EventCategories;
}) {
  "use server";

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl mx-default-mobile-x">
          {EventCategories[props.eventCategory]}
        </h2>
        <Link
          href={`${props.city}/${props.eventCategory}/`}
          className="flex flex-row gap-1 items-center mr-default-mobile-x text-sm rounded-full border px-[10px] py-[5px]"
        >
          Все <ArrowRight className="h-3 w-3" />
        </Link>
      </div>
      <ScrollArea>
        <div className="flex gap-[16px] py-[15px] w-max mx-default-mobile-x">
          {Object.entries(EventCategories).map(([key, value], index) => {
            return (
              <Link href={"/"} key={index} className="flex flex-col">
                <div className="relative">
                  <Image
                    className="rounded-lg h-auto w-full"
                    src={viperr}
                    alt="viperr"
                    objectFit="contain"
                  />
                  <EventBlockImageButtons />
                </div>
                <div>
                  <div className="text-[18px] font-medium">
                    9mice, Kai Angel
                  </div>
                  <div className="text-[#969696] text-[13px]">Реп</div>
                  <div className="text-[13px]">16 октября в 19:00, Mix</div>
                </div>
              </Link>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}
