import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import api from "@/lib/utils/api";
import Spinner from "../Spinner";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  title: z.string().min(2).max(50),
  description: z.string(),
  video: z.object({}),
  code: z.string(),
});

const YoutubePost = ({ code }: { code: string }) => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      video: {}, // Initially, no video is uploaded
      code: "",
    },
  });
  const [videoPreview, setVideoPreview] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setSubmitting(true);
      console.log(values);
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("description", values.description);
      formData.append("video", videoFile as File); // Append the file directly
      formData.append("code", code);
      console.log(formData.get("video"));
      api.defaults.headers["Content-Type"] = "multipart/form-data";
      api
        .post("/youtube", formData)
        .then((response) => {
          console.log(response.data);
          toast({
            variant: "default",
            title: "Video uploaded successfully",
            description: "Your video has been uploaded to YouTube",
          });
          setSubmitting(false);
        })
        .catch((err) => {
          console.log(err?.message);
          toast({
            variant: "destructive",
            title: "Error",
            description: "There was an error uploading the video",
          });
          setSubmitting(false);
        });
    } catch (error) {
      console.log(error);
    }
  }

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the first file from the input
    if (file) {
      // Do something with the selected file, like storing it in state
      setVideoFile(file);

      const reader = new FileReader();
      reader.onload = () => {
        setVideoPreview(reader.result as string); // Set the preview URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <>
      {submitting && (
        <div className="fixed flex justify-center items-center inset-0 z-50 bg-gray-200 bg-opacity-75 overflow-auto md:p-8">
          <Spinner className="bg-none" text="Uploading Video..." />
        </div>
      )}
      <div
        className={`flex justify-center items-center h-screen ${
          videoPreview ? "pt-96" : ""
        }`}
      >
        <div className="w-full max-w-5xl px-10 rounded-lg">
          <h2 className="text-lg font-bold mb-8">Upload Video to YouTube </h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <Input placeholder={code} disabled {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    This code is need to upload videos to YouTube.
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the title for the video"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter the description for the video"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="video"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Video</FormLabel>
                    <FormControl>
                      <div>
                        <Input
                          type="file"
                          accept="video/*"
                          onChange={handleVideoChange}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {videoPreview && (
                <div className="flex flex-col m-2">
                  <h2>The video you uploaded</h2>
                  <video src={videoPreview} controls width={800} height={300} />
                </div>
              )}
              <Button type="submit" className="mb-8">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default YoutubePost;
