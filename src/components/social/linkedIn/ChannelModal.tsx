/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import React from "react";

const ChannelModal = ({ imgURL, name }: { imgURL: string; name: string }) => {
  return (
    <Button className="w-full flex items-center hover:cursor-pointer justify-start px-14 my-5 text-center border dark:border-white border-black">
      <div className=" mx-2">
        <img
          src={imgURL}
          alt={name}
          width={25}
          height={25}
          className="rounded-full"
        />
      </div>
      <span className="text-center">{name}</span>
    </Button>
  );
};

export default ChannelModal;
