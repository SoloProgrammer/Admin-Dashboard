import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { Statistics } from "@/components/statistics/statistics";

const DashBoardPage = () => {
  return (
    <div className="w-full h-full bg-[#141416] flex flex-col">
      <Navbar />
      <div className="flex flex-grow h-full w-full">
        <Sidebar />
        <main className="flex-grow !overflow-y-auto custom-scroll-bar text-neutral-50 p-5 pb-44 md:pb-24 w-full">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <Statistics />
        </main>
      </div>
    </div>
  );
};

export default DashBoardPage;
