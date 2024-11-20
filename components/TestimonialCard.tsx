import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    id: 1,
    name: "Musa Alayafin.",
    body: "The website exceeded my expectations. It's sleek, user-friendly, and performs flawlessly!",
  },
  {
    id: 2,
    name: "Linos Touch.",
    body: "Highly professional work! My business website has attracted so many new clients. Thank you!",
  },
  {
    id: 3,
    name: "Amin Abbas.",
    body: "Amazing attention to detail. The final product was delivered on time and beyond perfect.",
  },
  {
    id: 4,
    name: "Michael Chuks.",
    body: "Outstanding service from start to finish. The result is exactly what I needed for my startup.",
  },
  {
    id: 5,
    name: "Sarah L.",
    body: "I'm thrilled with my new website! The design is stunning, and it's so easy to manage.",
  },
  {
    id: 6,
    name: "Laura T.",
    body: "The level of creativity and professionalism is unmatched. My website looks fantastic!",
  },
  {
    id: 7,
    name: "James C.",
    body: "I highly recommend your services. The website is fast, responsive, and visually appealing.",
  },
  {
    id: 8,
    name: "Anna M.",
    body: "I’ve received so many compliments on my website. Thank you for bringing my vision to life!",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({ name, body }: { name: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl bg-white  border p-4",
        // light styles
        "border-gray-950/[.1] bg-white bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] bg-white dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2 dark:bg-gray-950">
        <div className="flex flex-col">
          <figcaption className="text-xl font-medium poppins-bold dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function TestimonialCard() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.id} {...review} />
        ))}
      </Marquee>
      <div className="absolute inset-y-0 left-0 w-1/3 pointer-events-none bg-gradient-to-r from-white dark:from-background"></div>
      <div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
