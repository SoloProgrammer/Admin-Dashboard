import Image from "next/image";
import { Stars } from "../shared/stars";
import { feedbacksData } from "./data-constants";

export const FeedBacks = () => {
  return (
    <div className="mt-7 flex flex-col bg-[#202028] rounded-md max-h-[500px]">
      <h1 className="text-2xl font-bold p-4">Customer Feedback</h1>
      <div className="flex-grow overflow-y-auto p-4 custom-scroll-bar">
        {feedbacksData.map(({ review, stars, user: { avatar, name } }, i) => (
          <div key={`feedback-${i}`} className="flex flex-col gap-y-2 border-b border-white/20 pb-5 last:pb-0 last:border-none first:pt-0 pt-5">
            <div className="flex items-center gap-x-2">
              <Image
                src={avatar}
                alt={name}
                width={30}
                height={30}
                className="object-cover rounded-full"
              />
              <span>{name}</span>
            </div>
            <Stars stars={stars} />
            <p className="text-white/70 text-[13px]">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
