import Color from "color";
import { activities } from "./data-constants";
import { cn } from "@/lib/utils";

export const ActivityGrid = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 w-full">
      {activities.map(
        ({ color, count, growthPercentage, icon: Icon, title }, i) => (
          <div
            key={`activity-${i}`}
            className="bg-[#202028] shadow-lg rounded-md p-3 py-5 flex flex-col items-start hover:bg-[#26262f] cursor-pointer transition-colors"
          >
            <div
              style={{
                background: Color(color).alpha(0.2).toString(),
              }}
              className="p-[6px] rounded-md"
            >
              <Icon
                style={{
                  color: color,
                }}
                className="shrink-0"
              />
            </div>
            <p className="text-xs text-neutral-300 mt-2 font-medium">{title}</p>
            <div className="flex justify-between w-full items-center mt-4">
              <h3 className="text-3xl font-bold">{count}</h3>
              <span className={cn("text-xs font-bold", growthPercentage < 0 ? "text-red-400" : "text-green-400")}>
                {growthPercentage}%
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
};
