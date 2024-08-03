"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { useMediaQuery } from "usehooks-ts";

const chartData = [
  { date: "2024-04-01", revenue: 3000 },
  { date: "2024-04-02", revenue: 9000 },
  { date: "2024-04-03", revenue: 3600 },
  { date: "2024-04-04", revenue: 3000 },
  { date: "2024-04-05", revenue: 4300 },
  { date: "2024-04-06", revenue: 4300 },
  { date: "2024-04-07", revenue: 5400 },
  { date: "2024-04-08", revenue: 1300 },
  { date: "2024-04-09", revenue: 7000 },
  { date: "2024-04-10", revenue: 8000 },
  { date: "2024-04-11", revenue: 6000 },
  { date: "2024-04-12", revenue: 11003 },
  { date: "2024-04-13", revenue: 9567 },
  { date: "2024-04-14", revenue: 12000 },
  { date: "2024-04-15", revenue: 14400 },
  { date: "2024-04-16", revenue: 11300 },
  { date: "2024-04-17", revenue: 7400 },
  { date: "2024-04-18", revenue: 3900 },
  { date: "2024-04-19", revenue: 11290 },
  { date: "2024-04-20", revenue: 7800 },
  { date: "2024-04-21", revenue: 14000 },
  { date: "2024-04-22", revenue: 2000 },
  { date: "2024-04-23", revenue: 2500 },
  { date: "2024-04-24", revenue: 9000 },
  { date: "2024-04-25", revenue: 7890 },
  { date: "2024-04-26", revenue: 10000 },
  { date: "2024-04-27", revenue: 8900 },
];
const chartConfig = {
  revenue: {
    label: "revenue",
    color: "#7194ff",
  },
} satisfies ChartConfig;

export function ActivityChart() {
  const isMobile = useMediaQuery("(max-width:768px)");
  return (
    <div className="p-3 bg-[#202028] mt-7 rounded-md w-full">
      <h1 className="font-bold text-2xl">Activity</h1>
      <ChartContainer
        config={chartConfig}
        className="w-full mt-7 max-h-[220px]"
      >
        <BarChart
          accessibilityLayer
          data={chartData}
          barSize={isMobile ? 6 : 20}
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
