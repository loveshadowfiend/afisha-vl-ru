import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MapPin, Menu } from "lucide-react";
import CitySelect from "./city-select";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu />
      </SheetTrigger>
      <SheetContent className="w-[70vw] px-0" side={"left"}>
        <div className="mx-default-mobile-x">
          <div className="flex items-center">
            <MapPin className="h-[24px]" />
            <CitySelect />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
