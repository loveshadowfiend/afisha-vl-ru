import EventsTab from "./events-tab";
import Sidebar from "./sidebar";
import vlRuLogoMobile from "../../public/vl-ru-logo-mobile.svg";
import Image from "next/image";
import SearchDrawer from "./search-drawer";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between h-[66px] mx-default-mobile-x">
        <div className="flex items-center gap-2">
          <Sidebar />
          <div className="relative">
            <div className="font-bold text-md">Афиша VL.ru</div>
            <Image
              className="absolute top-[-9px] right-[-32px]"
              src={vlRuLogoMobile}
              alt="Логотип Vl.ru"
              width={45}
              height={19}
            />
          </div>
        </div>
        <div className="h-full flex gap-4 items-center">
          <SearchDrawer />
        </div>
      </header>
      <EventsTab />
    </>
  );
}
