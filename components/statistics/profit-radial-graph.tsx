"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [{ browser: "safari", visitors: 70, fill: "#7194ff" }];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function ProfitRadialGraph() {
  return (
    <div className="bg-[#202028] rounded-md flex justify-between flex-col md:flex-row md:pr-6">
      <div className="p-3 flex-col w-[50%] inline-block">
        <p className="text-white/80 text-xs">Net profit</p>
        <div className="mt-5">
          <h2 className="font-black text-4xl mb-4 whitespace-nowrap">
            $ 6759.25
          </h2>
          <span className="font-medium text-green-400">-3%</span>
        </div>
      </div>
      <div className="relative flex justify-center">
        <ChartContainer
          config={chartConfig}
          className="aspect-square max-h-[150px] !min-h-[150px] -translate-y-2"
        >
          <RadialBarChart
            data={chartData}
            startAngle={90}
            endAngle={-190}
            innerRadius={45}
            outerRadius={75}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-[#7194ff]/20 last:fill-[#202028]"
              polarRadius={[50, 38]}
            />
            <RadialBar dataKey="visitors" cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 5}
                          className="fill-[#fff] text-xl font-bold"
                        >
                          {chartData[0].visitors.toLocaleString()}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 13}
                          className="fill-[#fff]/80 text-[9px]"
                        >
                          goal
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 23}
                          className="fill-[#fff]/80 text-[9px]"
                        >
                          completed
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
        <span className="absolute bottom-3 left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:right-0 text-[8.5px] text-white/60 whitespace-nowrap">
          *The values here has been rounded off.
        </span>
      </div>
    </div>
  );
}
