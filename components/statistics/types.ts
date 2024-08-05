import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export type Activity = {
  icon: LucideIcon;
  title: string;
  color: string;
  count: string;
  growthPercentage: number;
};

export type TableDto = {
  customer: {
    name: string;
    avatar: StaticImageData;
  };
  orderNo: number;
  amount: string;
  status: "Delivered" | "Cancelled" | "Pending";
};

export type ChartDto = {
  date: string;
  revenue: number;
};
