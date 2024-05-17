import Image from "next/image";
import Container from "./container";
import heroImg from "../../../public/img/hero.png";
import { TypewriterEffect } from "../ui/typewriter-effect";
import Link from "next/link";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

const Hero = () => {
  const words = [
    {
      text: "Create",
    },
    {
      text: "Content",
    },
    {
      text: "Effortlessly",
    },
    {
      text: "with",
    },
    {
      text: "Social",
      className: "text-indigo-600 dark:text-indigo-600",
    },
    {
      text: " Sphere.",
      className: "text-indigo-600 dark:text-indigo-600",
    },
  ];
  return (
    <>
      <Container className="flex flex-wrap">
        <div
          className="flex justify-center items-center w-full lg:w-1/2"
          id="/"
        >
          <div className="max-w-2xl mb-8">
            <TypewriterEffect
              words={words}
              className="text-2xl xl:text-3xl pt-16 lg:pt-0"
            />
            <p className="py-5 mx-10 text-lg leading-normal text-gray-500 lg:text-md xl:text-xl dark:text-gray-300">
              Revolutionize content creation with an AI-powered platform
              offering insights, post scheduling, and exponential growth.
            </p>

            <div className="flex flex-col items-center justify-center space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="/sign-up"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                Sign Up
              </Link>
              <Link
                href="/sign-in"
                rel="noopener"
                className="flex items-center text-gray-500 dark:text-gray-400"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <CardContainer>
              <CardBody>
                <CardItem translateZ={100}>
                  <Image
                    src={heroImg}
                    width="616"
                    height="617"
                    className={"object-cover"}
                    alt="Hero Illustration"
                    loading="eager"
                    placeholder="blur"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </Container>
      <Container>
        <div className="flex flex-col justify-center">
          <div className="text-xl text-center text-gray-700 dark:text-white">
            <span className="text-indigo-600">2000+</span> Content creators use
            <span className="text-indigo-600"> Social Sphere</span> globally,
            accross platforms such as
          </div>

          <div className="flex  items-center  lg:flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <AiFillLinkedin size={50} />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <AiFillYoutube size={70} />
            </div>
            <div className="text-gray-400 dark:text-gray-400">
              <FaXTwitter size={50} />
            </div>
            <div className="pt-1 text-gray-400 dark:text-gray-400">
              <AiFillInstagram size={50} />
            </div>
            <div className="pt-2 text-gray-400 dark:text-gray-400">
              <FaFacebook size={50} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
