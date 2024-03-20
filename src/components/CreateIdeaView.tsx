"use client";
import React, { useState } from "react";
import Tags from "./Tags";
import { Textarea } from "./ui/textarea";
import FileInput from "./FileInput";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
type CreateIdeaViewProps = {
  toggle: () => void;
};

const CreateIdeaView = ({ toggle }: CreateIdeaViewProps) => {
  const [textContent, setTextContent] = useState<string>("");
  const [mediaUploaded, setMediaUploaded] = useState<boolean>(false);

  const handleMediaUpload = () => {
    setMediaUploaded(true);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(textContent, mediaUploaded);
  };

  const handleSaveIdea = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Save Idea", textContent, mediaUploaded);
  };
  return (
    <div className="fixed inset-0 z-50 bg-gray-200 bg-opacity-75 overflow-auto md:p-8">
      <div className=" mx-80 my-5 bg-white rounded-xl">
        {/* Heading - new Idea and Tags */}
        <div className="flex justify-between items-center ">
          <div className="flex justify-between items-center px-10 py-0">
            <span className="font-bold pr-5">New Idea</span>
            <Tags />
          </div>
          <div className="flex justify-end p-5">
            {textContent.length === 0 || mediaUploaded ? (
              <button className="text-3xl font-bold" onClick={toggle}>
                &times;
              </button>
            ) : (
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button className="text-3xl font-bold">&times;</button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Discard Changes?</AlertDialogTitle>
                    <AlertDialogDescription>
                      {"You'll lose all your changes, this can't be undone."}
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-900" onClick={toggle}>
                      Discard Changes
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            )}
          </div>
        </div>
        {/* Text layout to write */}
        <form method="POST" className="p-2 px-6">
          <Textarea
            placeholder="Start working on the idea now...."
            rows={20}
            cols={200}
            className="border-none"
            value={textContent}
            onChange={(e) => setTextContent(e.target.value)}
          />
          <FileInput onUpload={handleMediaUpload} />
          {/* Save Idea and create post buttons */}
          <div className="flex justify-end p-5">
            <Button
              className="m-2 bg-blue-600"
              disabled={textContent.length === 0 || !mediaUploaded}
              onClick={handleSubmit}
            >
              Create Post
            </Button>
            <Button
              className="m-2"
              disabled={textContent.length === 0 || !mediaUploaded}
              onClick={handleSaveIdea}
            >
              Save Idea
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateIdeaView;
