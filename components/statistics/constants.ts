import Avatar from "../../public/avatar.png";
import Avatar1 from "../../public/avatar-1.png";
import Avatar2 from "../../public/avatar-2.png";
import Avatar3 from "../../public/avatar-3.png";
import Avatar4 from "../../public/avatar-4.jpg";

import { Activity, TableDto } from "./types";
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
