import { ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const FileInput: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedFiles([...selectedFiles, ...Array.from(e.target.files)]);
    }
  };

  return (
    <div className="flex items-center justify-between">
      <div className="mt-8 max-w-40">
        <label className="flex flex-col justify-center items-center border border-dashed rounded-xl p-5 border-black">
          <ImageIcon />
          <span className="text-gray-700">Drag and drop</span>
          <p>OR</p>
          <input
            type="file"
            accept="image/*, video/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            multiple
          />
        </label>
      </div>
      {selectedFiles.length > 0 && (
        <div className="mt-4 w-full overflow-x-scroll">
          <ul
            className="flex items-center justify-center"
            style={{ width: `${selectedFiles.length * 120}px` }}
          >
            {selectedFiles.map((file, index) => (
              <li key={index} className="w-fit p-1">
                <Image
                  src={URL.createObjectURL(file)}
                  alt={file.name}
                  width={100}
                  height={100}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FileInput;
