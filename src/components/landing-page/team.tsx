import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaX } from "react-icons/fa6";

const details = [
  {
    name: "Tahmeer Pasha",
    title: "Team Leader | Full Stack Developer",
    image: "/team/tahmeer.jpg",
    linkedIn: "https://www.linkedin.com/in/tahmeer-pasha",
    github: "https://github.com/Tahmeerpasha",
    twitter: "https://twitter.com/IamTahmeer",
  },
  {
    name: "Umar Farooq",
    title: "Frontend Developer | API Integration",
    image: "/team/umar.jpg",
    linkedin: "https://www.linkedin.com/in/umar-farooq-b47b98217/",
    github: "https://github.com/Umarfarooq88",
    twitter: "https://twitter.com/Umar_farooq81",
  },
  {
    name: "Syed Sarkheel Baseer",
    title: "UI/UX Designer | Reasearch Analyst",
    image: "/team/sarkheel.jpg",
    linkedIn: "https://www.linkedin.com/in/syed-sarkheel-baseer-84745b208/",
    github: "https://github.com/Syed-Sarkheel",
    twitter: "https://twitter.com/SyedSarkheel",
  },
  {
    name: "Maxson K Joseph",
    title: "Product Manager | Research Analyst",
    image: "/team/maxson.jpg",
    linkedIn: "https://www.linkedin.com/in/maxson-joseph-705265202/",
    github: "https://github.com/MaxsonKJoseph",
  },
];
const Team = () => {
  return (
    <div>
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-400 text-center">
          We are a team of passionate developers and designers who are always
          ready to take on new challenges.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-20 mt-10 md:grid-cols-2">
        {details.map((detail, index) => (
          <Avatar key={index} {...detail} />
        ))}
      </div>
    </div>
  );
};

function Avatar(props: any) {
  return (
    <div className="flex flex-col items-center mt-8 space-x-3 ">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-28 h-28">
        <Image src={props.image} width="200" height="200" alt="Avatar" />
      </div>
      <div>
        <div className="text-lg xl:text-3xl text-zinc-700 dark:text-white font-medium">
          {props.name}
        </div>
        <div className="text-gray-600 xl:text-xl dark:text-gray-400">
          {props.title}
        </div>
      </div>
      <div>
        <div className="flex space-x-4 mt-4">
          {props.linkedIn && (
            <Link
              href={props.linkedIn}
              className="text-gray-600 dark:text-gray-400"
            >
              <FaLinkedin />
            </Link>
          )}
          {props.github && (
            <Link
              href={props.github}
              className="text-gray-600 dark:text-gray-400"
            >
              <FaGithub />
            </Link>
          )}
          {props.twitter && (
            <Link
              href={props.twitter}
              className="text-gray-600 dark:text-gray-400"
            >
              <FaX />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;
