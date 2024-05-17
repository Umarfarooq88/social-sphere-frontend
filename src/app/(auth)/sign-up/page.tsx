"use client";
import React from "react";
import axios from "axios";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { useRouter } from "next/navigation";

// Define form schema
const formSchema = z
  .object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be less than 20 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be less than 20 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type FormData = z.infer<typeof formSchema>;
const Page = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Form submit handler
  const onSubmit: SubmitHandler<FormData> = async (values) => {
    if (values.password === values.confirmPassword) {
      try {
        const url: string =
          process.env.NEXT_PUBLIC_BASE_URL + "users/register" || "";
        const data = JSON.stringify({
          email: values.email,
          password: values.password,
        });
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        await axios.post(url, data, config).then((response) => {
          if (response.status === 201) {
            console.log("Account created successfully");
            router.push("/sign-in");
          }
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white dark:bg-black p-4 sm:p-6 lg:p-8">
      <p className="lg:text-4xl text-2xl font-semibold underline mb-6 text-black dark:text-white">
        Sign Up
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-black dark:text-white">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password again"
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
              Submit
            </Button>
            <div className="pt-4">
              <p className="text-center text-sm text-black dark:text-white">
                {"Already have an account? "}
                <a href="/sign-in" className="text-blue-500 underline">
                  Sign In
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
