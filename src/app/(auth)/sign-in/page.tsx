"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/redux/hooks";
import { login } from "@/lib/redux/features/userSlice";

const formSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be less than 100 characters"),
});

type FormData = z.infer<typeof formSchema>;

const Page = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [submitting, setSubmitting] = React.useState<boolean>(false);
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (values) => {
    setSuccess(null);
    setError(null);
    setSubmitting(true);
    try {
      const url: string =
        process.env.NEXT_PUBLIC_BASE_URL + "users/login" || "";

      const data = JSON.stringify({
        email: values.email,
        password: values.password,
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios.post(url, data, config);
      const responseData = await response.data;
      console.log(responseData);
      dispatch(
        login({
          email: responseData?.message?.user?.email,
          refreshToken: responseData?.message?.refreshToken,
          accessToken: responseData?.message?.accessToken,
          userId: responseData?.message?.user?._id,
        })
      );
      if (response.status === 200) {
        setSuccess("You have successfully logged in");
        setTimeout(() => {
          router.push("/publish");
        }, 1000);
      }
    } catch (err) {
      setError("Invalid credentials, Retry with correct credentials");
    }
    setSubmitting(false);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white dark:bg-black p-4 sm:p-6 lg:p-8">
      <p className="lg:text-4xl text-2xl font-semibold underline mb-6 text-black dark:text-white">
        Sign In
      </p>
      <div className="flex flex-col justify-center w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@email.com"
                      {...field}
                      className="border border-gray-300 rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password"
                      type="password"
                      {...field}
                      className="border border-gray-300 rounded-md p-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Sign In
            </Button>
            <div className="pt-4">
              <p className="text-center text-sm text-black dark:text-white">
                {"Don't have an account? "}
                <a href="/sign-up" className="text-blue-500 underline">
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Page;
