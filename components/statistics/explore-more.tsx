import { ChevronRight, Crosshair, HandPlatter, Pizza } from "lucide-react";

export const ExploreMore = () => {
  return (
    <div className="bg-[#202028] mt-7 p-4 flex flex-col gap-y-7 md:gap-y-10 rounded-md py-[22px]" >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="p-5 rounded-full bg-red-400/20">
            <Crosshair className="w-5 h-5 shrink-0 text-red-500" />
          </div>
          <p>Goals</p>
        </div>
        <div className="p-1 rounded-full bg-muted-foreground/60">
          <ChevronRight className="w-4 h-4 shrink-0" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="p-5 rounded-full bg-blue-400/20">
            <Pizza className="w-5 h-5 shrink-0 text-blue-500" />
          </div>
          <p>Popular Dishes</p>
        </div>
        <div className="p-1 rounded-full bg-muted-foreground/60">
          <ChevronRight className="w-4 h-4 shrink-0" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-4">
          <div className="p-5 rounded-full bg-cyan-400/20">
            <HandPlatter className="w-5 h-5 shrink-0 text-cyan-500" />
          </div>
          <p>Menu</p>
        </div>
        <div className="p-1 rounded-full bg-muted-foreground/60">
          <ChevronRight className="w-4 h-4 shrink-0" />
        </div>
      </div>
    </div>
  );
};
