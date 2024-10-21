import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import CitySelect from "./city-select";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="w-[75vw]" side={"left"}>
        <SheetHeader>
          <SheetTitle className="text-start">Афиша</SheetTitle>
        </SheetHeader>
        <SheetDescription className="flex items-center">
          <CitySelect />
        </SheetDescription>
        <nav>
          <ul className="flex flex-col gap-4 py-[20px]">
            <li className="flex items-center">
              <Link href="https://vl.ru/">Вернуться на главную VL.ru</Link>
            </li>
            <li></li>
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
