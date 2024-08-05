import Avatar from "../../public/avatar.png";
import Avatar1 from "../../public/avatar-1.png";
import Avatar2 from "../../public/avatar-2.png";
import Avatar3 from "../../public/avatar-3.png";
import Avatar4 from "../../public/avatar-4.jpg";

import { Activity, ChartDto, FeedBack, TableDto } from "./types";
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
  { date: "2024-04-15", revenue: 15000 },
  { date: "2024-04-16", revenue: 11300 },
  { date: "2024-04-17", revenue: 7400 },
  { date: "2024-04-18", revenue: 3900 },
  { date: "2024-04-19", revenue: 11290 },
  { date: "2024-04-20", revenue: 7800 },
  { date: "2024-04-21", revenue: 6000 },
  { date: "2024-04-22", revenue: 2000 },
  { date: "2024-04-23", revenue: 2500 },
  { date: "2024-04-24", revenue: 9000 },
  { date: "2024-04-25", revenue: 7890 },
  { date: "2024-04-26", revenue: 10000 },
  { date: "2024-04-27", revenue: 8900 },
];

export const feedbacksData: FeedBack[] = [
  {
    review:
      "Lovely place with a cozy atmosphere. The wine selection was impressive and the staff was knowledgeable. A great place for a date night also The ambiance was perfect and the pasta was delicious! & Great service too lorem ipsum good food!",
    stars: 4,
    user: {
      name: "Grace Lee",
      avatar: Avatar2,
    },
  },
  {
    review:
      "The service was prompt and courteous. However, the main course lacked flavor. The dessert made up for it though.",
    stars: 3,
    user: {
      name: "Frank White",
      avatar: Avatar1,
    },
  },
  {
    review: "The ambiance was perfect and the pasta was delicious!",
    stars: 5,
    user: {
      name: "Alice Johnson",
      avatar: Avatar1,
    },
  },
  {
    review: "Great service, but the steak was a bit overcooked.",
    stars: 3,
    user: {
      name: "Bob Smith",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Had a wonderful evening here. The live music added a special touch. The menu had a lot of variety and everything we tried was great.",
    stars: 4,
    user: {
      name: "Isabel Martinez",
      avatar: Avatar4,
    },
  },
  {
    review: "Absolutely loved the desserts. Will visit again!",
    stars: 5,
    user: {
      name: "Charlie Brown",
      avatar: Avatar3,
    },
  },
  {
    review: "Good food but the wait time was too long.",
    stars: 3,
    user: {
      name: "Diana Ross",
      avatar: Avatar4,
    },
  },
  {
    review: "The seafood platter was fantastic. Highly recommend!",
    stars: 4,
    user: {
      name: "Eve Adams",
      avatar: Avatar,
    },
  },
  {
    review:
      "The food quality has improved since my last visit. The appetizers were fresh and the main course was cooked to perfection. Kudos to the chef!",
    stars: 5,
    user: {
      name: "Henry King",
      avatar: Avatar3,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
  {
    review:
      "Nice decor and friendly staff, but the food was average. Expected more for the price. Probably won't be back soon.",
    stars: 2,
    user: {
      name: "Jack Roberts",
      avatar: Avatar2,
    },
  },
];
