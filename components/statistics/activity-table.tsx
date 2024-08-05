import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import { tableData } from "./data-constants";

export const ActivityTable = () => {
  const getTableHeadings = useCallback(() => {
    const heads = Object.keys(tableData[0]);
    return heads.map((head, i) => (
      <TableHead
        key={i}
        className={cn(
          i === heads.length - 1 && "text-right",
          "text-white capitalize"
        )}
      >
        {head}
      </TableHead>
    ));
  }, []);

  return (
    <div className="mt-7 bg-[#202028] p-5 rounded-md w-full">
      <h1 className="text-2xl font-bold">Recent Orders</h1>
      <Table className="bg-[#202028] rounded-md">
        <TableCaption className="hidden" />
        <TableHeader>
          <TableRow className="hover:bg-[#202028]">
            {getTableHeadings()}
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData.map((data, i) => (
            <TableRow
              key={`row-${i}`}
              className="hover:bg-[#202028] border-white/10 text-white/60"
            >
              <TableCell
                className={cn(
                  "font-medium flex items-center gap-x-2 flex-nowrap whitespace-nowrap",
                  i === 0 && "!pr-10 md:!pr-3"
                )}
              >
                <Image
                  src={data.customer.avatar}
                  alt="avatar"
                  width={30}
                  height={30}
                  className="rounded-full object-contain"
                />
                <span className="whitespace-nowrap">{data.customer.name}</span>
              </TableCell>
              <TableCell>{data.orderNo}</TableCell>
              <TableCell>{data.amount}</TableCell>
              <TableCell className="text-right">
                <span
                  className={cn(
                    "text-xs px-2 py-[2px] rounded-ful inline-block rounded-full font-semibold text-red-400/70 bg-red-500/20",
                    data.status === "Delivered" &&
                      "!bg-[#1abd87]/20 !text-[#1abd87]"
                  )}
                >
                  {data.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
