import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
  DrawerDescription,
} from "@/components/ui/drawer";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { X } from "lucide-react";

export default function SearchDrawer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Search size={24} />
      </DrawerTrigger>
      <DrawerContent className="h-[80vh]">
        <DrawerHeader className="flex justify-between">
          <DrawerTitle>Поиск по событиям</DrawerTitle>
          <DrawerDescription>
            <DrawerClose>
              <X size={18} />
            </DrawerClose>
          </DrawerDescription>
        </DrawerHeader>
        <div>
          <div className="mx-default-mobile-x">
            <Input className="rounded-full" placeholder="События, артисты" />
            <DrawerClose></DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
