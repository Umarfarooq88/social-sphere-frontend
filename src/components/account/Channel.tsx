import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import api from "@/lib/utils/api";

type Channel = {
  profilePicture: string;
  channelName: string;
  accessToken: string;
  sub: string;
  userEmail: string;
  userName: string;
};
const Channel = () => {
  const [channels, setChannels] = useState([] as Channel[]);
  const getChannels = async () => {
    await api
      .get("/users/channel/get-all-channels")
      .then((res) => {
        setChannels(res.data.message.channels);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleDelete = (channelName: string) => {
    console.log("Delete Clicked for ", channelName);
  };
  useEffect(() => {
    getChannels();
  }, [channels]);
  return (
    <div className="">
      <h1>Channels</h1>
      {channels.map((channel) => {
        return (
          <div key={channel.sub} className="flex justify-between items-center">
            <span className="text-2xl text-center">{channel.channelName}</span>
            <Button
              onClick={() => handleDelete(channel.channelName)}
              className="bg-red-500"
            >
              Unlink Channel
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Channel;
