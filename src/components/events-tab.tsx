import { EventCategories } from "@/types/enums";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import Link from "next/link";

export default function EventsTab() {
  return (
    <ScrollArea>
      <nav>
        <ul className="flex gap-2 py-[15px] w-max mx-default-mobile-x">
          {Object.entries(EventCategories).map(([key, value], index) => {
            return (
              <li
                key={index}
                className="border px-[15px] py-[5px] rounded-full"
              >
                <Link className="text-[14px]" href={key}>
                  {value}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ScrollBar orientation="horizontal" className="hidden" />
    </ScrollArea>
  );
}
