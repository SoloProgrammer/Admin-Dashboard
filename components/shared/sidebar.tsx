import { cn } from "@/lib/utils";
import {
  ClipboardCheck,
  Home,
  LucideIcon,
  ShoppingBag,
  SquareKanban,
  Wallet,
} from "lucide-react";

const sidebarItems: ItemProps[] = [
  {
    icon: Home,
    title: "Home",
    active: true,
  },
  {
    icon: SquareKanban,
    title: "Kanban",
    active: false,
  },
  {
    icon: ClipboardCheck,
    title: "check-list",
    active: false,
  },
  {
    icon: Wallet,
    title: "Wallet Balance",
    active: false,
  },
  {
    icon: ShoppingBag,
    title: "Orders",
    active: false,
  },
];

export const Sidebar = () => {
  return (
    <div className="z-[99999] text-neutral-50 bg-[#202028] w-full md:w-fit md:h-full md:py-1 fixed bottom-0 flex-row md:static flex md:flex-col justify-center md:justify-start items-center md:pt-3">
      {sidebarItems.map((item) => (
        <Item
          key={item.title}
          icon={item.icon}
          title={item.title}
          active={item.active}
        />
      ))}
    </div>
  );
};

type ItemProps = {
  icon: LucideIcon;
  title: string;
  active?: boolean;
};

const Item = ({ icon: Icon, title, active }: ItemProps) => {
  return (
    <div
      aria-description={title}
      title={title}
      className={cn(
        "relative px-6 py-5 cursor-pointer hover:bg-[#2c2c37]",
        active &&
          "before:absolute before:w-full before:h-[6px] before:md:w-1 before:md:h-[60%] before:rounded-full before:bg-[#7294ff]  before:left-0 before:md:top-1/2 before:md:-translate-y-1/2 before:bottom-0"
      )}
    >
      <Icon
        className={cn(
          "text-neutral-400",
          active && "text-[#7294ff]",
          title === "Kanban" && "-rotate-180"
        )}
      />
    </div>
  );
};
