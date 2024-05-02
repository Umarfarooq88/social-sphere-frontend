"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import LineGraph from "@/components/charts/LineGraph";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import Card from "@/components/charts/Card";
import { FaPeopleGroup } from "react-icons/fa6";
import { GrFormView } from "react-icons/gr";
import { BsFillPostageFill } from "react-icons/bs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Page = () => {
  return (
    <div className="absolute top-20 w-full h-screen">
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold underline">
          <span>Overall Analytics </span>
        </div>
        <div className="flex justify-normal items-center p-10">
          <Card
            icon={<FaPeopleGroup size={25} />}
            title={"Overall Followers"}
            number={"25k"}
            className={"mx-10"}
          />
          <Card
            icon={<GrFormView size={25} />}
            title={"Overall Views"}
            number={"5k"}
            className={"mx-10"}
          />
          <Card
            icon={<BsFillPostageFill size={25} />}
            title={"Total Posts"}
            number={500}
            className={"mx-10"}
          />
        </div>
      </div>
      <div className="w-full mx-10">
        <Tabs defaultValue="all" className="min-w-full h-screen">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="linkedIn">LinkedIn</TabsTrigger>
            <TabsTrigger value="youtube">Youtube</TabsTrigger>
          </TabsList>
          <TabsContent className="w-full h-full" value="all">
            <Graphs platform={"all"} />
          </TabsContent>
          <TabsContent className="w-full h-full" value="linkedIn">
            <Graphs platform={"linkedIn"} />
          </TabsContent>
          <TabsContent className="w-full h-full" value="youtube">
            <Graphs platform={"youtube"} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;

const Graphs = ({ platform = "all" }: any) => {
  return (
    <ResizablePanelGroup
      className="max-w-full h-screen rounded-lg border"
      direction="vertical"
    >
      <ResizablePanel>
        <ResizablePanelGroup className="w-full" direction="horizontal">
          <ResizablePanel defaultSize={100}>
            <LineGraph />
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <BarChart />
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={50}>
        <PieChart />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};
