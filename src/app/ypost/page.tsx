"use client"
import React, { useState } from "react";
import FileInput from "@/components/create/FileInput";
import { Button } from "@/components/ui/button";
import { authorize, uploadVideo } from "./youtube-post"; // Assuming these functions are correctly implemented
import api from "@/lib/utils/api";

const Popup = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [title, setTitle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [mediaFilePath, setMediaFilePath] = useState('');
  const [mediaUploaded, setMediaUploaded] = useState(false); 

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };
   const share=()=>{
    handleMediaUpload();
   }

   
  const handleMediaUpload = async (files: File[] = []) => {
    try {
      if (!files[0]) {
        console.error("No files provided for upload.");
        return;
      } else {
        setMediaUploaded(true);
      }
      const file = files[0];
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", textareaValue);
    formData.append("video", file); // Assuming mediaFilePath contains the path to the uploaded video file
    
    // Upload video data
   
      const response = await api.post("youtube", formData);
      console.log("Video uploaded successfully:", response.data);

    } catch (error) {
      console.error("Error uploading  video: ", error);
  };
    
  };

  

  const isButtonDisabled = () => {
    return textareaValue.length === 0 || title.length === 0 || !mediaUploaded;
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 w-1/2 h-auto rounded-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Create Post</h2>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Enter title"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Start writing"
            className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2"
            rows={10}
            value={textareaValue}
            onChange={handleTextareaChange}
          ></textarea>
          {!textareaValue && (
            <button className="absolute top-1 left-36  px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg opacity-50 hover:opacity-100">
              Use the AI Assistant
            </button>
          )}
        </div>
        <div>
          <input type="text" placeholder="Enter keywords" className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-2" value={keywords} onChange={(e) => setKeywords(e.target.value)} />
          <FileInput onUpload={handleMediaUpload}  />
        </div>
        
        {/* Bottom buttons */}
        <div className="flex justify-end p-2">
          <Button
            className="m-2 bg-blue-600"
            disabled={isButtonDisabled()} 
            onClick={share}
          >
            Create Post
          </Button>
          <Button
            className="m-2"
            disabled={isButtonDisabled()} 
          >
            Save Idea
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
