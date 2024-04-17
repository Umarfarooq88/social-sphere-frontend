import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Textarea } from "../../ui/textarea";
import { Button } from "../../ui/button";
import { FaWandMagicSparkles } from "react-icons/fa6";

type LinkedInPreviewProps = {
  toggle: (value: boolean) => void;
};
const LinkedInPreview = ({ toggle }: LinkedInPreviewProps) => {
  const [prompt, setPrompt] = useState("");
  return (
    <div className="bg-white w-fit h-full flex flex-col justify-start  p-10 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg flex items-center font-bold">
          {" "}
          <FaWandMagicSparkles />
          AI Assistant
        </h2>
        <button className="" onClick={() => toggle(false)}>
          <AiOutlineClose />
        </button>
      </div>
      <div className="flex flex-col items-start justify-between">
        <p className="p-1">What do you want to write about?</p>
        <Textarea
          rows={10}
          cols={20}
          placeholder="Eg. Promote my DSA course to get new registrations. Registration closes in 3 days."
          onChange={(e) => {
            setPrompt(e.target.value);
          }}
          value={prompt}
        />
      </div>
      <span className="p-2">
        Pro tip: Include key points, your target audience and your desired
        outcome for this post
      </span>
      <Button className=" self-end">
        <FaWandMagicSparkles />
        <span>Generate</span>
      </Button>
    </div>
  );
};

export default LinkedInPreview;
