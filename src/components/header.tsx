import { Heart } from "lucide-react";
import Sidebar from "./sidebar";

export default function Header() {
  return (
    <header className="flex items-center justify-between h-[66px] mx-default-mobile-x">
      <div className="flex gap-[10px]">
        <Sidebar />
        <div className="font-medium text-lg">Афиша VL.ru</div>
      </div>
      <div className="h-full flex gap-4 items-center"></div>
    </header>
  );
}
