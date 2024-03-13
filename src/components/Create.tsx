import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignLeft, ChevronDown } from "lucide-react";
import { FaWandMagic } from "react-icons/fa6";
import { Button } from "./ui/button";
import IdeaCard from "./IdeaCard";

const Create = () => {
  const idea = [
    {
      img: "/next.svg",
      text: "You can now save all your ideas wherever you find them with the Buffer browser extension! Find inspiration on the web? You can highlight text or select an image and right click “Save for Later” and it’ll appear right here. Or you can click the Buffer icon in your browser extension bar to save a website link to this space. https://buffer.com/extensions",
    },
    {
      img: "/next.svg",
      text: "You can now save all your ideas wherever you find them with the Buffer browser extension! Find inspiration on the web? You can highlight text or select an image and right click “Save for Later” and it’ll appear right here. Or you can click the Buffer icon in your browser extension bar to save a website link to this space. https://buffer.com/extensions",
    },
    {
      img: "/next.svg",
      text: "You can now save all your ideas wherever you find them with the Buffer browser extension! Find inspiration on the web? You can highlight text or select an image and right click “Save for Later” and it’ll appear right here. Or you can click the Buffer icon in your browser extension bar to save a website link to this space. https://buffer.com/extensions",
    },
    {
      img: "/next.svg",
      text: "You can now save all your ideas wherever you find them with the Buffer browser extension! Find inspiration on the web? You can highlight text or select an image and right click “Save for Later” and it’ll appear right here. Or you can click the Buffer icon in your browser extension bar to save a website link to this space. https://buffer.com/extensions",
    },
  ];
  return (
    <section className="mt-20 ml-72">
      <div className="p-5 flex justify-between">
        <div className="">
          <span className="text-2xl font-bold p-5">Create</span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="flex justify-between items-center border p-2 rounded-xl">
                <AlignLeft />
                <span>Tags</span>
                <ChevronDown size={20} />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* Get tags from backend */}
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex">
          <button className="flex items-center justify-between px-2 bg-blue-500 dark:bg-blue-800 rounded-xl mx-2">
            <FaWandMagic />
            <span className="px-2">Generate Ideas</span>
          </button>
          <Button>Create Idea</Button>
        </div>
      </div>
      <main className="p-2 m-2 grid lg:grid-cols-3 gap-9">
        {idea.map((value, index) => {
          return <IdeaCard img={value.img} text={value.text} key={index} />;
        })}
      </main>
    </section>
  );
};

export default Create;
