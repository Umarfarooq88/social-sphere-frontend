'use client'
import React, { useState } from 'react';
import { ComboboxDemo } from './ComboBox';
import FileUpload from './FileUpload';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  


const Popup = () => {


    const [textareaValue, setTextareaValue] = useState('');
    
    const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTextareaValue(event.target.value);
    };
 
  return (
    // Overlay for the popup
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      {/* Popup container */}
      <div className="bg-white p-8 w-1/2 h-auto rounded-lg">
        {/* Heading */}
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-bold">Create Post</h2>
          {/* Search dropdown */}
          <div className="relative">
          {/* <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Add tag" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">Tag 1</SelectItem>
    <SelectItem value="dark">Tag 2</SelectItem>
    <SelectItem value="system">Tag 3</SelectItem>
  </SelectContent>
</Select> */}
<ComboboxDemo/>

          </div>
        </div>
        <div className='relative'>
        {/* Text area for writing */}
        <textarea
          placeholder="Start writing or"
          className="border border-gray-300 rounded-lg px-3 py-2 w-full mb-4"
          rows={5}
          value={textareaValue}
        onChange={handleTextareaChange}
        ></textarea>
        {/* Button to use the AI assistant */}
        {!textareaValue  &&  (
          <button className="absolute top-1 left-36  px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-lg opacity-50 hover:opacity-100">
             Use the AI Assistant
          </button>
        )}
        </div>
        {/* File drag and drop section */}
        <div>
        <FileUpload/>
        </div>
        
          {/* AI button */}
          <div className="relative">
            <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg" >
              AI
            </button>
          </div>
        </div>
        {/* Horizontal line */}
        <hr className="border-gray-300 mb-4" />
        {/* Bottom buttons */}
        <div className="flex justify-end">
          <button className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg mr-4">Save as Draft</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Share Now</button>
        </div>
      </div>
    
  );
};

export default Popup;
