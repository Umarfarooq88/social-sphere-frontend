import React, { useState } from "react";
import { FaWandMagic } from "react-icons/fa6";
import { Button } from "./ui/button";
import IdeaCard from "./IdeaCard";
import Tags from "./Tags";
import CreateIdeaView from "./CreateIdeaView";

const Create = () => {
  const idea = [
    {
      img: "/next.svg",
      text: "You can now save all your ideas wherever you find them with the Buffer browser extension! Find inspiration on the web? You can highlight text or select an image and right click “Save for Later” and it’ll appear right here. Or you can click the Buffer icon in your browser extension bar to save a website link to this space. https://buffer.com/extensions",
    },
    {
      img: "/next.svg",
      text: "You can now save all your ideas wherever you find them with the Buffer browser extension! Find inspiration on the web? You can highlight text or select an image and right click “Save for Later” and it’ll appear right here. Or you can click the Buffer icon in your browser extension bar to save a website link to this space. https://buffer.com/extensions",
    },
    {
      img: "/next.svg",
      text: "You can now save all your ideas wherever you find them with the Buffer browser extension! Find inspiration on the web? You can highlight text or select an image and right click “Save for Later” and it’ll appear right here. Or you can click the Buffer icon in your browser extension bar to save a website link to this space. https://buffer.com/extensions",
    },
    {
      img: "/next.svg",
      text: "You can now save all your ideas wherever you find them with the Buffer browser extension! Find inspiration on the web? You can highlight text or select an image and right click “Save for Later” and it’ll appear right here. Or you can click the Buffer icon in your browser extension bar to save a website link to this space. https://buffer.com/extensions",
    },
  ];
  const [createIdeaView, setCreateIdeaView] = useState(false);

  const handleClick = () => {
    setCreateIdeaView(!createIdeaView);
  };

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
        {idea.map((value, index) => {
          return <IdeaCard img={value.img} text={value.text} key={index} />;
        })}
      </main>
      {createIdeaView && <CreateIdeaView toggle={handleClick} />}
    </section>
  );
};

export default Create;
