"use client";
import React, { useEffect, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import LineGraph from "@/components/charts/LineGraph";
import BarChart from "@/components/charts/BarChart";
import Card from "@/components/charts/Card";
import {
  FaRegClock,
  FaThumbsDown,
  FaThumbsUp,
  FaUserClock,
} from "react-icons/fa6";
import { BsEyeFill } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DatePicker } from "@/components/create/DatePicker";
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
import api from "@/lib/utils/api";
import { IoPeopleSharp, IoRefresh } from "react-icons/io5";
import { ImCross } from "react-icons/im";
interface ColumnHeader {
  name: string;
  columnType: string;
  dataType: string;
}

type RowData = number[];

interface YouTubeAnalyticsData {
  kind: string;
  columnHeaders: ColumnHeader[];
  rows: RowData[];
}

const Page = () => {
  const currentDate = new Date();
  const formattedDate = formatDate(currentDate);

  const [data, setData] = useState<YouTubeAnalyticsData | null>(null);
  const [startDate, setStartDate] = useState("2023-01-01");
  const [endDate, setEndDate] = useState(formattedDate);
  const [error, setError] = useState("");

  useEffect(() => {
    const URLParams = new URLSearchParams(window.location.search);
    const code = URLParams.get("code");
    if (!code) return;

    const postObject = { code, startDate, endDate };

    api
      .post("youtube/analytics", postObject)
      .then((res) => setData(res.data.data))
      .catch((err) => setError("The code expired. Please authorize again."));
  }, [startDate, endDate]);

  const handleYoutubeAuthorize = () => {
    api
      .post("/youtube/auth", {
        scope: "https://www.googleapis.com/auth/youtube.readonly",
        index: 3,
      })
      .then((response) => {
        const authUrl = response.data.data;
        window.location.href = authUrl;
      });
  };

  // Extract column names
  const columnNames =
    data?.columnHeaders?.map((header: any) => header.name) ?? [];

  // Extract values
  const values = data?.rows?.[0]?.reduce(
    (acc: { [key: string]: any }, curr, index) => {
      const columnName = columnNames[index];
      acc[columnName] = curr;
      return acc;
    },
    {}
  );

  console.log(values);
  return (
    <div className="absolute top-20 w-full h-screen">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold underline">
          <span>Overall Analytics </span>
        </div>
        <div className="grid grid-cols-3 gap-8 justify-normal items-center p-10">
          <Card
            icon={<FaThumbsUp size={25} />}
            title={"Overall Likes"}
            number={values?.likes || 0}
            className={"mx-10"}
          />
          <Card
            icon={<BsEyeFill size={25} />}
            title={"Overall Views"}
            number={values?.views || 0}
            className={"mx-10"}
          />
          <Card
            icon={<FaThumbsDown size={25} />}
            title={"Overall Dislikes"}
            number={values?.dislikes || 0}
            className={"mx-10"}
          />
          <Card
            icon={<FaUserClock size={25} />}
            title={"Average View Duration"}
            number={values?.averageViewDuration || 0}
            className={"mx-10"}
          />
          <Card
            icon={<FaRegClock size={25} />}
            title={"Estimated Minutes Watched"}
            number={values?.estimatedMinutesWatched || 0}
            className={"mx-10"}
          />
          <Card
            icon={<IoPeopleSharp size={25} />}
            title={"Subscribers Gained"}
            number={values?.subscribersGained || 0}
            className={"mx-10"}
          />
        </div>
      </div>
      <div className="w-full mx-10">
        <Tabs defaultValue="all" className="min-w-full h-screen">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="linkedIn">LinkedIn</TabsTrigger>
                <TabsTrigger value="youtube">Youtube</TabsTrigger>
              </TabsList>
              <AlertDialog>
                <AlertDialogTrigger>
                  <IoRefresh
                    size={30}
                    className="dark:fill-white fill-black cursor-pointer"
                  />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      To keep the dashboard updated, we need you to authorize
                      your account.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleYoutubeAuthorize}>
                      Continue
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <DatePicker
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </div>
          <TabsContent className="w-full h-full" value="all">
            <Graphs platform="all" />
          </TabsContent>
          <TabsContent className="w-full h-full" value="linkedIn">
            <div className="flex mt-5 p-10 justify-center items-center">
              <Card
                icon={<ImCross size={40} color="red" />}
                title={"Analytics Not Supported!!!"}
                className={
                  "mx-10 p-10 font-extrabold flex flex-col justify- items-stretch"
                }
              />
            </div>
          </TabsContent>
          <TabsContent className="w-full h-full" value="youtube">
            <Graphs platform="youtube" />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;

const Graphs = ({ platform = "all" }) => (
  <div className="w-[95%] flex justify-center items-center">
    <LineGraph />
  </div>
  // <ResizablePanelGroup
  //   className="max-w-full rounded-lg border"
  //   direction="horizontal"
  // >
  //   <ResizablePanel>
  //     <LineGraph />
  //   </ResizablePanel>
  //   <ResizableHandle withHandle />
  //   <ResizablePanel>
  //     <BarChart />
  //   </ResizablePanel>
  // </ResizablePanelGroup>
);

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formattedMonth = month < 10 ? `0${month}` : month;
  const formattedDay = day < 10 ? `0${day}` : day;
  return `${year}-${formattedMonth}-${formattedDay}`;
};
