import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    name: "Frontend Development",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "Backend Development",
  },
  {
    name: "Mobile Development",
  },
  {
    name: "Fullstack Development",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ name }: { name: string }) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden rounded-xl border p-4",

        "border-primaryColor/[.1] bg-primaryColor/[.01] hover:bg-gray-950/[.05]",

        "dark:border-primaryColor/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export function AboutSkills() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
