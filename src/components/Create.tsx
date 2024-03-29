"use client";
import React, { useEffect, useState } from "react";
import { FaWandMagic } from "react-icons/fa6";
import { Button } from "./ui/button";
import IdeaCard from "./IdeaCard";
import Tags from "./Tags";
import CreateIdeaView from "./CreateIdeaView";
import api from "@/lib/api";

const Create = () => {
  const [ideas, setIdeas] = useState([{}]);
  const getIdeas = async () => {
    try {
      const response = await api.get(`/ideas/get-ideas`);
      if (response) {
        setIdeas(response.data.message);
        console.log(response.data.message);
        console.log(ideas);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [createIdeaView, setCreateIdeaView] = useState(false);

  const handleClick = () => {
    setCreateIdeaView(!createIdeaView);
  };

  useEffect(() => {
    const fetchData = async () => {
      await getIdeas();
    };
    fetchData();
  }, []);

  return (
    <section className="mt-20 ml-72">
      <div className="p-5 flex justify-between items-center">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold p-5">Create</span>
          <Tags />
        </div>
        <div className="flex">
          <button className="flex items-center justify-between px-2 bg-blue-500 dark:bg-blue-800 rounded-xl mx-2">
            <FaWandMagic />
            <span className="px-2">Generate Ideas</span>
          </button>
          <Button onClick={handleClick}>Create Idea</Button>
        </div>
      </div>
      <main className="p-2 m-2 grid lg:grid-cols-3 gap-9">
        {ideas.map((value, index) => {
          return (
            <IdeaCard
              img={value.image}
              text={value.content}
              id={value._id}
              key={index}
            />
          );
        })}
      </main>
      {createIdeaView && <CreateIdeaView toggle={handleClick} />}
    </section>
  );
};

export default Create;
