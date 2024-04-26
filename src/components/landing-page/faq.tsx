import React from "react";
import Container from "./container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Is this product completely free to use?",
    answer: "Yes! as of now we are in beta testing so it'll be free till then",
  },
  {
    question: "How does Social Sphere simplify content creation?",
    answer:
      "Social Sphere offers a user-friendly interface and AI-powered tools that streamline the content creation process. From generating ideas to scheduling posts, our platform automates repetitive tasks, saving time and effort for content creators.",
  },
  {
    question: "What analytics insights does Social Sphere provide?",
    answer:
      "Social Sphere provides comprehensive analytics insights, including data on audience engagement, content performance, and trend analysis. Users can track metrics such as likes, shares, and comments to understand their audience better and optimize their content strategy accordingly.",
  },
  {
    question: "Can I schedule posts in advance using Social Sphere?",
    answer:
      "Yes, Social Sphere allows users to schedule posts in advance across multiple social media platforms. Our scheduling feature enables content creators to plan their content calendar, ensuring consistent and timely posts to engage their audience effectively.",
  },
  {
    question: "How does Social Sphere ensure user data security?",
    answer:
      "At Social Sphere, we prioritize the security and privacy of our users' data. We implement robust security measures to safeguard user information and comply with industry standards and regulations. Additionally, we provide users with options to control their privacy settings and manage their data securely.",
  },
];

export default Faq;
