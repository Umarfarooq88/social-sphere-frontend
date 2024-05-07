import React, { useEffect, useState } from "react";
import { FaLinkedin, FaWandMagicSparkles, FaYoutube } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Calendar, Settings, SquarePen, Tags } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter } from "next/navigation";
import api from "@/lib/utils/api";
import ChannelModal from "./social/linkedIn/ChannelModal";
import { Skeleton } from "./ui/skeleton";
import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import { GrChannel } from "react-icons/gr";

type setActiveScreenFuction = (name: string) => void;

interface Props {
  setActiveScreen: setActiveScreenFuction;
  collapsed: boolean;
  toggleCollapse: () => void;
}

type Channel = {
  profilePicture: string;
  channelName: string;
  accessToken: string;
  sub: string;
  userEmail: string;
  userName: string;
};
const Sidebar: React.FC<Props> = ({
  setActiveScreen,
  collapsed,
  toggleCollapse,
}) => {
  const [loading, setLoading] = useState(true);
  const [channels, setChannels] = useState([] as Channel[]);
  const router = useRouter();
  const [active, setActive] = useState<string>("Create");
  const uniqueChannels: Channel[] = Object.values(channels).reduce(
    (accumulator: Channel[], channel: Channel) => {
      // Check if the channel name is not already in the accumulator array
      if (
        !accumulator.some((item) => item.channelName === channel.channelName)
      ) {
        // If it's not, add it to the accumulator array
        accumulator.push(channel);
      }
      return accumulator;
    },
    [] as Channel[]
  );
  const handleActive = (name: string) => {
    setActive(name);
    setActiveScreen(name);
  };

  const onSelectStyle = `bg-blue-300 rounded-xl text-black dark:text-white dark:bg-blue-600`;

  // Function to toggle sidebar collapse/expand

  useEffect(() => {
    if (!collapsed) {
      getChannels();
    }
  }, [collapsed]);

  const getChannels = async () => {
    await api
      .get("/users/channel/get-all-channels")
      .then((res) => {
        setChannels(res.data.message.channels);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      className={`fixed top-0 mt-[68px] bg-stone-800 text-white dark:bg-zinc-800 dark:text-white h-screen flex flex-col overflow-hidden ${
        collapsed ? "w-14" : "w-72"
      }`}
    >
      {/* Collapse/Expand button */}
      <div
        onClick={toggleCollapse}
        className="p-2 px-4 flex justify-end  transition duration-300 hover:cursor-pointer"
      >
        {collapsed ? (
          <FaAngleDoubleRight size={30} />
        ) : (
          <FaAngleDoubleLeft size={30} />
        )}
      </div>
      <header className="p-2">
        <div
          className={`${
            active === "Create" ? onSelectStyle : ""
          } flex justify-between items-center p-3 my-2 hover:cursor-pointer`}
          onClick={() => handleActive("Create")}
        >
          <div className="flex items-center">
            <SquarePen size={20} />
            <span className={`text-xl px-2 ${collapsed ? "hidden" : ""}`}>
              Create
            </span>
          </div>
          <FaWandMagicSparkles size={20} />
        </div>
        <div
          className={`${
            active === "Calendar" ? onSelectStyle : ""
          } flex justify-start items-center p-3 my-2 hover:cursor-pointer`}
          onClick={() => handleActive("Calendar")}
        >
          <Calendar size={20} />
          <span className={`text-xl px-2 ${collapsed ? "hidden" : ""}`}>
            Calendar
          </span>
        </div>
        <hr />
      </header>

      {collapsed ? (
        <div className="flex flex-col justify-center items-center p-5">
          <GrChannel />
          <div className="p-5 hover:cursor-pointer">
            {uniqueChannels.map((item) => {
              switch (item.channelName) {
                case "LinkedIn":
                  return <FaLinkedin color="blue" size={25} />;
                case "YouTube":
                  return <FaYoutube color="red" size={25} />;
              }
            })}
          </div>
        </div>
      ) : (
        // Render this part only when not collapsed
        <Accordion type="single" collapsible className="px-5 overflow-y-auto">
          <AccordionItem value="channels">
            <AccordionTrigger onClick={getChannels}>Channels</AccordionTrigger>
            <AccordionContent>
              {"Connected channels 👇"}
              <ul className="flex-1 my-2">
                {channels.length === 0 ? (
                  <div className="flex justify-center items-center p-5">
                    <span>{"No channels connected yet"}</span>
                  </div>
                ) : (
                  uniqueChannels.map((item, index) => (
                    <li key={index} className="">
                      {loading ? (
                        <div className="flex justify-start items-center my-5">
                          <Skeleton className="w-10 h-10 rounded-full mx-5" />
                          <Skeleton className="w-40 h-10 rounded-xl" />
                        </div>
                      ) : (
                        <>
                          <ChannelModal
                            imgURL={item?.profilePicture}
                            name={item?.channelName}
                          />
                        </>
                      )}
                    </li>
                  ))
                )}
              </ul>
              <div className="flex flex-col justify-between">
                <span>{"Connect a channel to get started 👇"}</span>
                <Button
                  onClick={() => {
                    router.push("/account/channels/connect");
                  }}
                  className="w-full my-3"
                >
                  ➕ New Channel
                </Button>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      <footer className="absolute bottom-24 w-full">
        <div
          className={`${
            active === "Settings" ? onSelectStyle : ""
          } flex justify-start items-center p-3 mx-2 hover:cursor-pointer`}
          onClick={() => router.push("/account")}
        >
          <Settings size={20} />
          <span className={`text-xl px-2 ${collapsed ? "hidden" : ""}`}>
            Settings
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Sidebar;
