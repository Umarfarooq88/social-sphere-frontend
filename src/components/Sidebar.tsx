"use client";
import React, { useEffect, useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Calendar, Settings, SquarePen, Tags } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import api from "@/lib/api";
import ChannelModal from "./social/linkedIn/ChannelModal";

type setActiveScreenFuction = (name: string) => void;

interface Props {
  setActiveScreen: setActiveScreenFuction;
}
const Sidebar: React.FC<Props> = ({ setActiveScreen }) => {
  // TODO: Get the channels from api
  const getChannels = async () => {
    await api
      .get("/users/channel/get-all-channels")
      .then((res) => {
        setChannels(res.data.message.channels);
        console.log(res.data.message.channels);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [channels, setChannels] = useState([
    {
      profilePicture: "",
      channelName: "",
      accessToken: "",
      sub: "",
      userEmail: "",
      userName: "",
    },
  ]);
  const router = useRouter();
  const [active, setActive] = useState<string>("");

  const handleActive = (name: string) => {
    setActive(name);
    setActiveScreen(name);
  };

  const onSelectStyle =
    "bg-blue-300 rounded-full text-black dark:text-white dark:bg-blue-600";

  useEffect(() => {
    const fetchData = async () => {
      await getChannels();
    };
    fetchData();
  }, []);
  return (
    <div className="fixed left-1 top-0 mt-20 bg-white text-black dark:bg-black dark:text-white h-screen w-72 flex flex-col overflow-hidden">
      <header>
        <div
          className={`${
            active === "Create" ? onSelectStyle : ""
          } flex justify-between items-center p-4 hover:cursor-pointer`}
          onClick={() => handleActive("Create")}
        >
          <div className="flex items-center">
            <SquarePen size={20} />
            <span className="text-xl px-2 ">Create</span>
          </div>
          <FaWandMagicSparkles size={20} />
        </div>
        <div
          className={`${
            active === "Calendar" ? onSelectStyle : ""
          } flex justify-start items-center p-4 hover:cursor-pointer`}
          onClick={() => handleActive("Calendar")}
        >
          <Calendar size={20} />
          <span className="text-xl px-2">Calendar</span>
        </div>
        <hr />
      </header>

      {/* TODO: Add scrollable view if number of channels exceed */}
      <Accordion type="single" collapsible className="px-5 overflow-y-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger>Channels</AccordionTrigger>
          <AccordionContent>
            {"Connect a channel to get started 👇"}
            <ul className=" flex-1">
              {channels.map((item, index) => (
                <>
                  <li key={index} className="p-2">
                    <ChannelModal
                      imgURL={item?.profilePicture}
                      name={item?.channelName}
                    />
                  </li>
                  <li key={index} className="p-2">
                    <ChannelModal
                      imgURL={item?.profilePicture}
                      name={item?.channelName}
                    />
                  </li>
                  <li key={index} className="p-2">
                    <ChannelModal
                      imgURL={item?.profilePicture}
                      name={item?.channelName}
                    />
                  </li>
                </>
              ))}
            </ul>
            <Button
              onClick={() => {
                router.push("/account/channels/connect");
              }}
              className="w-full"
            >
              ➕ New Channel
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <footer className="absolute bottom-24 w-72">
        <div
          className={`${
            active === "Tags" ? onSelectStyle : ""
          } flex justify-start items-center p-4 hover:cursor-pointer`}
          onClick={() => handleActive("Tags")}
        >
          <Tags size={20} />
          <span className="text-xl px-2">Manage Tags</span>
        </div>
        <div
          className={`${
            active === "New Channel" ? onSelectStyle : ""
          } flex justify-start items-center p-4 hover:cursor-pointer`}
          onClick={() => handleActive("New Channel")}
        >
          <Settings size={20} />
          <span className="text-xl px-2">New Channel</span>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
