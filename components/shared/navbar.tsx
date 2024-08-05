import Image from "next/image";
import { Bell, Mail, Search, Settings } from "lucide-react";

import Logo from "../../public/logo.png";
import Avatar from "../../public/avatar.png";

export const Navbar = () => {
  return (
    <div className="w-full flex bg-[#202028] p-3 px-4 justify-between shadow-[#00000040] shadow-md z-10">
      <div className="flex items-center">
        <Image src={Logo} alt="logo" width={45} height={45} />
        <div className="hidden md:flex bg-[#2a2b30] ml-10 border border-gray-600 p-2 rounded-md items-center">
          <Search className="w-4 h-4 text-white mr-2" />
          <input
            type="search"
            className="outline-none w-full bg-transparent text-white text-sm"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-3">
          <div className="rounded-full bg-neutral-800 p-2 md:hidden">
            <Search className="text-white/60 shrink-0 w-4 h-4" />
          </div>
          <div className="rounded-full bg-neutral-700 p-2">
            <Mail className="text-white/60 shrink-0 w-4 h-4" />
          </div>
          <div className="rounded-full bg-neutral-700 p-2">
            <Settings className="text-white/60 shrink-0 w-4 h-4" />
          </div>
          <div className="rounded-full bg-neutral-700 p-2 relative before:bg-[#7395ff] before:absolute before:w-[10px] before:h-[10px] before:top-1 before:right-1 before:rounded-full">
            <Bell className="text-white/60 shrink-0 w-4 h-4" />
          </div>
        </div>
        <Image
          src={Avatar}
          alt="avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
      </div>
    </div>
  );
};
