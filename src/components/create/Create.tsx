"use client";
import React, { useEffect, useState } from "react";
import { FaWandMagic } from "react-icons/fa6";
import { Button } from "../ui/button";
import IdeaCard from "../IdeaCard";
import CreateIdeaView from "./CreateIdeaView";
import api from "@/lib/utils/api";
import Assistant from "../Assistant";
import { CiSearch } from "react-icons/ci";

type Idea = { image: ""; content: ""; _id: "" };
const Create = () => {
  const [ideas, setIdeas] = useState([] as Idea[]);
  const getIdeas = async () => {
    try {
      const response = await api.get(`/ideas/get-ideas`);
      if (response) {
        setIdeas(response.data.message);
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [createIdeaView, setCreateIdeaView] = useState(false);
  const [generateIdeaView, setGenerateIdeaView] = useState(false);
  const handleClick = () => {
    setCreateIdeaView(!createIdeaView);
  };
  const fetchData = async () => {
    await getIdeas();
    console.log(ideas);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="mt-12">
      <div className="p-5 flex justify-between items-center">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold p-5">Create Idea</span>
          {/* <Tags /> */}
        </div>
        <div className="flex">
          <button
            onClick={() => {
              setGenerateIdeaView(!generateIdeaView);
            }}
            className="flex items-center justify-between px-2 bg-blue-300 dark:bg-blue-800 rounded-xl mx-2"
          >
            <FaWandMagic />
            <span className="px-2">Generate Ideas</span>
          </button>
          <Button onClick={handleClick}>Create Idea</Button>
        </div>
      </div>
      {ideas.length === 0 ? (
        <div className=" h-full flex justify-center items-center">
          <div className="flex flex-col justify-between items-center text-center text-2xl font-bold">
            <CiSearch size={35} className="m-5" />
            <p> No ideas found</p>
          </div>
        </div>
      ) : (
        <main className="p-2 m-2 grid lg:grid-cols-3 gap-9">
          {ideas.map((value, index: number) => {
            return (
              <IdeaCard
                img={value.image}
                text={value.content}
                id={value._id}
                triggerFetch={fetchData}
                key={index}
              />
            );
          })}
        </main>
      )}
      {createIdeaView && <CreateIdeaView toggle={handleClick} />}
      {generateIdeaView && (
        <div className="fixed flex justify-between items-center inset-0 z-50 bg-gray-200 bg-opacity-75 overflow-auto md:p-8">
          <Assistant
            toggle={() => setGenerateIdeaView(!generateIdeaView)}
            setPromptText={() => {
              ("");
            }}
          />
        </div>
      )}
    </section>
  );
};

export default Create;
