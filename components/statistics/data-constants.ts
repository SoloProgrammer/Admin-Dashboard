import Avatar from "../../public/avatar.png";
import Avatar1 from "../../public/avatar-1.png";
import Avatar2 from "../../public/avatar-2.png";
import Avatar3 from "../../public/avatar-3.png";
import Avatar4 from "../../public/avatar-4.jpg";

import { Activity, ChartDto, TableDto } from "./types";
import {
  CircleDollarSign,
  PackageCheck,
  PackageX,
  ShoppingBasket,
} from "lucide-react";

export const activities: Activity[] = [
  {
    icon: ShoppingBasket,
    title: "Total Orders",
    color: "#3e61fb",
    count: "75",
    growthPercentage: 3,
  },
  {
    icon: PackageCheck,
    title: "Total Delivered",
    color: "#00c98d",
    count: "70",
    growthPercentage: -3,
  },
  {
    icon: PackageX,
    title: "Total Calcelled",
    color: "#f25e5e",
    count: "05",
    growthPercentage: 3,
  },
  {
    icon: CircleDollarSign,
    title: "Total Revenue",
    color: "#e542a2",
    count: "$12k",
    growthPercentage: -3,
  },
];

export const tableData: TableDto[] = [
  {
    customer: {
      name: "Pratham shinde",
      avatar: Avatar,
    },
    orderNo: 78679876,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: {
      name: "Warren buffet",
      avatar: Avatar1,
    },
    orderNo: 156247357,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: {
      name: "Ellon musk",
      avatar: Avatar2,
    },
    orderNo: 445376725,
    amount: "$124.00",
    status: "Cancelled",
  },
  {
    customer: {
      name: "Bill gates",
      avatar: Avatar3,
    },
    orderNo: 992678276,
    amount: "$124.00",
    status: "Pending",
  },
  {
    customer: {
      name: "Karishma sinha",
      avatar: Avatar4,
    },
    orderNo: 78679876,
    amount: "$124.00",
    status: "Delivered",
  },
  {
    customer: {
      name: "John wick",
      avatar: Avatar,
    },
    orderNo: 78679876,
    amount: "$124.00",
    status: "Cancelled",
  },
];

export const chartData: ChartDto[] = [
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
