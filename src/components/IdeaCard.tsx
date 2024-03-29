import api from "@/lib/api";
import { Trash } from "lucide-react";
import React from "react";
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
interface IdeaCardProps {
  img: string;
  text: string;
  id: string;
  triggerFetch: () => void;
}

const IdeaCard = ({ img, text, id, triggerFetch }: IdeaCardProps) => {
  const handleDelete = async () => {
    // Handle deletion logic here
    console.log("Delete clicked for image:", img);
    try {
      const response = await api.delete(
        `/ideas/delete-idea-by-id?ideaId=${id}`
      );
      if (response.status === 200) {
        console.log("Idea deleted successfully");
        triggerFetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-sm max-h-96 rounded overflow-hidden shadow-lg border relative hover:cursor-pointer">
      {/* Trash Icon */}
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="absolute top-0 right-0 mt-2 mr-2">
            <Trash
              size={30}
              color="white"
              cursor="pointer"
              className="bg-red-500 p-2 rounded-xl"
            />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Idea?</AlertDialogTitle>
            <AlertDialogDescription>
              {"Are you sure to delete this idea?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction className="bg-red-900" onClick={handleDelete}>
              Delete Idea
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {/* Image */}
      <div className="flex justify-center">
        <div className="h-[50%] w-[50%] object-cover  px-5 py-5 bg-transparent">
          <img
            className="w-full object-cover"
            src={img}
            alt={img}
            height={50}
            width={50}
          />
        </div>
      </div>

      {/* Text */}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base line-clamp-6 text-pretty dark:text-white">
          {text}
        </p>
      </div>
    </div>
  );
};

export default IdeaCard;
