import { ActivityChart } from "./activity-chart";
import { ActivityGrid } from "./activity-grid";
import { ActivityTable } from "./activity-table";
import { ExploreMore } from "./explore-more";
import { ProfitRadialGraph } from "./profit-radial-graph";

export const Statistics = () => {
  return (
    <div className="flex w-full mt-7 gap-x-8 flex-wrap justify-center flex-col md:flex-row max-w-full">
      <div className="md:flex-[1.7] w-full">
        <ActivityGrid />
        <ActivityChart />
        <ActivityTable />
      </div>
      <div className="w-full md:flex-[1] mt-7 slg:mt-0">
        <ProfitRadialGraph/>
        <ExploreMore/>
      </div>
    </div>
  );
};
