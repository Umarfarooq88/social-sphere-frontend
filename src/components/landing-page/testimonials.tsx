"use client";
import { Card, CardStack } from "../ui/card-stack";
import { cn } from "@/lib/utils/utils";

import userOneImg from "../../../public/img/user1.jpg";
import userTwoImg from "../../../public/img/user2.jpg";
import userThreeImg from "../../../public/img/user3.jpg";

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS: Card[] = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Coding content creator",
    content: (
      <p>
        Social Sphere streamlines my content creation with its
        <Highlight>user-friendly interface and AI tools</Highlight>. The
        analytics help me refine my strategy and engage my audience effectively
      </p>
    ),
    image: userOneImg as any,
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Twitter Influencer",
    content: (
      <p>
        Social Sphere is intuitive and packed with features, making content
        management a breeze. The <Highlight> analytics tools</Highlight> are
        instrumental in understanding trends and optimizing engagement
      </p>
    ),
    image: userTwoImg as any,
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Solo Entrepreneur | Youtuber",
    content: (
      <p>
        Social Sphere revolutionizes my
        <Highlight>business content management</Highlight>, allowing effortless
        creation and scheduling. The analytics insights tailor my content to
        customer preferences.
      </p>
    ),
    image: userThreeImg as any,
  },
];

export default function Testimonials() {
  return (
    <div className="h-full flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}
