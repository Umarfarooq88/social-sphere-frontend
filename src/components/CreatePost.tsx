'use client'
import React, { useState } from 'react';
import { ComboboxDemo } from './ComboBox';
import FileInput from './FileInput';
import { Button } from "./ui/button";

const Popup = () => {
  const [textareaValue, setTextareaValue] = useState('');
  const [mediaUploaded, setMediaUploaded] = useState(false); 

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  const handleMediaUpload = () => {
    setMediaUploaded(true); 
  };

  const isButtonDisabled = () => {
    return textareaValue.length === 0 && !mediaUploaded;
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white p-8 w-1/2 h-auto rounded-lg">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Create Post</h2>
          <div className="relative">
            <ComboboxDemo />
          </div>
        </div>
        <div className="relative">
          <textarea
            placeholder="Start writing or"
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
          <FileInput onUpload={handleMediaUpload}  />
        </div>
        
        {/* Bottom buttons */}
        <div className="flex justify-end p-2">
          <Button
            className="m-2 bg-blue-600"
            disabled={isButtonDisabled()} 
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
