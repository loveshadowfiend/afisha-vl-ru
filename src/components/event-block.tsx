import { EventCategories } from "@/types/enums";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import viperr from "../../public/viperr.jpg";
import Image from "next/image";

export default function EventBlock(props: {
  eventCategory: keyof typeof EventCategories;
}) {
  return (
    <div className="my-5 ">
      <div className="font-bold text-2xl mx-default-mobile-x">
        {EventCategories[props.eventCategory]}
      </div>
      <ScrollArea>
        <div className="flex gap-2 py-[15px] w-max mx-default-mobile-x">
          {Object.entries(EventCategories).map(([key, value], index) => {
            return (
              <div key={index} className="flex flex-col gap-3">
                <Image
                  className="rounded-lg w-[70vw] h-auto"
                  src={viperr}
                  alt="viperr"
                  width={200}
                  height={250}
                />
                <div>
                  <div className="text-[18px] font-medium">
                    9mice, Kai Angel
                  </div>
                  <div className="text-[#969696] text-[13px]">Реп</div>
                  <div className="text-[13px]">16 октября в 19:00, Mix</div>
                </div>
              </div>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
}
