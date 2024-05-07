import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BeatLoader } from "react-spinners";
import Assistant from "../Assistant";
import LinkedInPost from "./LinkedInPost";
import { Button } from "../ui/button";
import api from "@/lib/utils/api";

type ToggleFunction = () => void;

type Props = {
  toggle: ToggleFunction;
};

const CreatePost = ({ toggle }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const [assistantView, setAssistantView] = useState(false);
  const [platform, setPlatform] = useState("");

  const handlePlatformChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPlatform(event.target.value);
  };

  const handleYoutubeAuthorize = () => {
    api
      .post("/youtube/auth", {
        scope: "https://www.googleapis.com/auth/youtube.upload",
        index: 2,
      })
      .then((response) => {
        console.log(response.data);
        const authUrl = response.data.data;
        window.location.href = authUrl;
      });
  };
  return (
    <div className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50">
      {submitting && (
        <div className="absolute flex justify-center items-center z-50">
          <BeatLoader color="white" />
        </div>
      )}
      {/* Assistant view */}
      {assistantView && (
        <div className="p-5 h-screen relative">
          <Assistant
            toggle={setAssistantView}
            setPromptText={() => {
              ("");
            }}
          />
        </div>
      )}
      <div className="bg-white dark:bg-black p-8 w-1/2 h-auto rounded-lg">
        <div className="flex justify-between ">
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-bold mr-2">Create Post</h2>
            {/* Use onChange event to handle platform selection */}
            <select
              className="p-1 rounded-md border border-gray-300"
              value={platform}
              onChange={handlePlatformChange}
            >
              <option value="">Select Platform</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="YouTube">YouTube</option>
            </select>
          </div>
          <button className="text-3xl font-bold" onClick={toggle}>
            <AiOutlineClose />
          </button>
        </div>
        {/* Render corresponding post component based on selected platform */}
        <div className="">
          {platform === "LinkedIn" ? (
            <LinkedInPost toggle={toggle} />
          ) : platform === "YouTube" ? (
            <YoutubeAuthorizeButton index="2" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default CreatePost;

export const YoutubeAuthorizeButton = ({ index }: { index: string }) => {
  const handleYoutubeAuthorize = () => {
    api
      .post("/youtube/auth", {
        scope: "https://www.googleapis.com/auth/youtube.upload",
        index: index,
      })
      .then((response) => {
        console.log(response.data);
        const authUrl = response.data.data;
        window.location.href = authUrl;
      });
  };
  return <Button onClick={handleYoutubeAuthorize}>Authorize</Button>;
};
