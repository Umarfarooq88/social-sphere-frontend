'use client'
import React, { useState } from 'react';

const FileUpload: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
  
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = event.target.files && event.target.files[0];
      if (selectedFile) {
        setFile(selectedFile);
        
        uploadFile(selectedFile);
      }
    };
  
    const uploadFile = (selectedFile: File) => {
      
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
      }, 2000);
    };
  
    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
    };
  
    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const droppedFile = event.dataTransfer.files && event.dataTransfer.files[0];
      if (droppedFile) {
        setFile(droppedFile);
        
        uploadFile(droppedFile);
      }
    };
  
    const removeFile = () => {
      setFile(null);
    };
  
    const truncateFileName = (fileName: string, maxLength: number) => {
      return fileName.length > maxLength ? fileName.slice(0, maxLength - 2) + '..' : fileName;
    };

 

  return (
    <div
      className="border-dashed border-2 border-gray-400 rounded-lg p-4 text-center w-28 text-xs"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label className="cursor-pointer block mb-2">
        <input type="file" className="hidden" onChange={handleFileChange} />
        Drag & Drop or  <span className="text-blue-500">select a File</span>
      </label>
      {file && (
        <div className="mb-2">
          <span className="font-bold">{file.name}</span>
    
          {isUploading && <span className="ml-2 text-gray-500">Uploading...</span>}
          {!isUploading && (
              <button
              className="rounded-full bg-red-400 hover:bg-red-600 text-black"
              onClick={removeFile}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.707 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
