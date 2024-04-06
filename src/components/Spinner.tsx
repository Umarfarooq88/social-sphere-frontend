import { cn } from "@/lib/utils";
import React from "react";
import { SyncLoader } from "react-spinners";
interface SpinnerProps {
  className?: string;
  text?: string;
}

const Spinner = ({ className = "", text }: SpinnerProps) => {
  return (
    <div className={cn(" ", className)}>
      <div className="flex flex-col justify-center items-center h-full">
        <SyncLoader color="white" />
        {text && (
          <p className="text-gray-700 text-xl font-bold p-5 animate-pulse">
            {text}
          </p>
        )}
      </div>
    </div>
  );
};

export default Spinner;
