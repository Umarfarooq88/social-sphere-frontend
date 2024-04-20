import { SiApostrophe } from "react-icons/si";
import {
  HiOutlineChartBarSquare,
  HiOutlineCursorArrowRays,
  HiOutlineAdjustmentsHorizontal,
} from "react-icons/hi2";
import { TbBulb } from "react-icons/tb";
import { IoAnalytics } from "react-icons/io5";
import benefitOneImg from "../../../public/img/benefit-one.png";
import benefitTwoImg from "../../../public/img/benefit-two.png";
import { GiArtificialIntelligence, GiGrowth } from "react-icons/gi";
import { MdOutlineSchedule } from "react-icons/md";

const benefitOne = {
  title: "Content Creation",
  desc: "With AI-driven assistance, content creators can streamline their workflows, automate repetitive tasks, and optimize content performance. This enables them to tailor content to specific demographics, maximize relevance, and foster deeper connections with their followers.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Create Captivating Content",
      desc: "Create captivating content that resonates with your audience and drives engagement",
      icon: <SiApostrophe />,
    },
    {
      title: "Personalize and Customize with AI",
      desc: "AI empowers creators to personalize content at scale, tailoring it to individual audience preferences and behaviors for deeper engagement",
      icon: <GiArtificialIntelligence />,
    },
    {
      title: "Schedule Posts and Stories",
      desc: "Effortlessly schedule posts and stories across multiple platforms, ensuring consistent engagement and reach",
      icon: <MdOutlineSchedule />,
    },
  ],
};

const benefitTwo = {
  title: "Insights",
  desc: "Gain invaluable insights into your audience's preferences, behaviors, and trends, empowering you to craft content that resonates deeply and drives meaningful engagement.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Audience Interaction",
      desc: "Foster meaningful connections and engagement with your audience through interactive content experiences",
      icon: <HiOutlineCursorArrowRays />,
    },
    {
      title: "Content Performance Analysis",
      desc: "Evaluate content effectiveness and refine strategies with comprehensive performance analysis",
      icon: <IoAnalytics />,
    },
    {
      title: "Content Optimization",
      desc: "Maximize impact and reach by optimizing content for audience preferences and platform algorithms ",
      icon: <HiOutlineAdjustmentsHorizontal />,
    },
  ],
};

const benefitThree = {
  title: "Growth",
  desc: "Unlock exponential growth opportunities as a content creator leveraging the advanced capabilities of an AI-based content creation platform, empowering you to reach new heights in audience engagement, productivity, and success",
  image: benefitOneImg,
  bullets: [
    {
      title: "Success",
      desc: "Achieve more in less time with the help of AI-driven content creation tools",
      icon: <GiGrowth />,
    },
    {
      title: "Exponential Growth",
      desc: "Scale to millions of followers in no time with the help of AI",
      icon: <HiOutlineChartBarSquare />,
    },
    {
      title: "Generate Trending Ideas",
      desc: "Use combination of Google Trends and AI to generate trending ideas",
      icon: <TbBulb />,
    },
  ],
};

export { benefitOne, benefitTwo, benefitThree };
