import Image from "next/image";

export const Stars = ({ stars }: { stars: number }) => {
  const orangeStars = Array(stars).fill(0);
  const whiteStars = Array(5 - stars).fill(0);
  return (
    <div className="flex items-center gap-x-1">
      {orangeStars.map((_, i) => (
        <Image
          key={`orange-star-${i}`}
          src={"/star.png"}
          alt="star-filled"
          width={18}
          height={18}
          className="object-contain"
        />
      ))}
      {whiteStars.map((_, i) => (
        <Image
          key={`white-star-${i}`}
          src={"/star.png"}
          alt="star-filled"
          width={18}
          height={18}
          className="object-contain grayscale brightness-200"
        />
      ))}
    </div>
  );
};
