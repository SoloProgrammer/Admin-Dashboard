"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useMediaQuery } from "usehooks-ts";
import { chartData } from "./data-constants";
import { ChevronDown } from "lucide-react";

const chartConfig = {
  revenue: {
    label: "revenue",
    color: "#7194ff",
  },
} satisfies ChartConfig;

export function ActivityChart() {
  const isMobileDevice = useMediaQuery("(max-width:767px)");
  const isTabletDevice = useMediaQuery("(max-width:990px)");
  const isMdeiumLargeDevice = useMediaQuery("(max-width:1100px)");
  const barSize =
    (isMobileDevice && 6) ||
    (isTabletDevice && 15) ||
    (isMdeiumLargeDevice && 10) ||
    20;

  return (
    <div className="p-3 bg-[#202028] mt-7 rounded-md w-full">
      <div className="flex justify-between">
        <h1 className="font-bold text-2xl">Activity</h1>
        <p className="flex items-center px-3 bg-white/20 rounded-full cursor-pointer hover:bg-white/30">
          <span className="text-xs font-medium">Weekly</span>
          <ChevronDown className="ml-2 w-4 h-4 shrink-0" />{" "}
        </p>
      </div>
      <ChartContainer
        config={chartConfig}
        className="w-full mt-7 max-h-[220px]"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          barSize={barSize}
          margin={{
            left: -30,
          }}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            minTickGap={32}
            tickFormatter={(value) => {
              const date = new Date(value);
              return date.getDate().toString();
            }}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={2}
            tickCount={4}
            tickFormatter={(value, i) =>
              Math.round(value / 1000) + (value > 0 ? "k" : "")
            }
          />
          <Bar dataKey="revenue" fill="var(--color-revenue)" radius={10} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
