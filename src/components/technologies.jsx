"use client";
import {
  cssIcon,
  djangoIcon,
  expressIcon,
  htmlIcon,
  jsIcon,
  mongodbIcon,
  nextIcon,
  nodeIcon,
  reactIcon,
  socketIcon,
  tailwindIcon,
} from "@/utils/icons";
import { useState } from "react";
import PageHeading from "./page-heading";

// ANIMATIONS
const Technologies = () => {
  const [active, setActive] = useState("frontend");
  const handleClick = (e) => {
    setActive(e.target.getAttribute("data-name"));
    document.querySelectorAll(".nav li").forEach((li) => {
      li.classList.remove("text-primary");
    });
    e.target.classList.add("text-primary");
  };
  return (
    <div id="skills" className="w-full py-10 md:px-[10%] px-[5%] text-white">
      {/*  SKILLS  heading */}
      <PageHeading title="technologies" tagline="languages i use for." />
      {/* front and backend skills */}
      <div className="md:grid hidden grid-cols-2 items-center lg:gap-10 gap-5 min-h-[80vh] lg:w-4/5 w-[100%] mx-auto">
        <div className="w-full">
          <h1 className=" font-medium text-center mb-8 text-xl">Front-End</h1>
          <div className="min-[860px]:w-3/4 mx-auto">
            <Frontend />
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-medium text-center mb-8 text-xl">Back-End</h1>
          <div className="min-[860px]:w-3/4 mx-auto">
            <Backend />
          </div>
        </div>
      </div>
      {/* mobile view */}
      <div className="md:hidden flex flex-col justify-center min-h-[70vh] min-[600px]:w-7/12 min-[500px]:w-7/12 w-full mx-auto">
        <ul className="text-sm flex items-center gap-5 justify-center w-full mb-8 nav">
          <div>
            <li
              onClick={handleClick}
              data-name="frontend"
              className="font-medium px-2 text-primary cursor-pointer text-slate-200 text-lg"
            >
              Front-End
            </li>
          </div>
          <div>
            <li
              data-name="backend"
              onClick={handleClick}
              className="font-medium px-2 cursor-pointer text-slate-200 text-lg"
            >
              Back-end
            </li>
          </div>
        </ul>
        {active === "frontend" ? <Frontend /> : <Backend />}
      </div>
    </div>
  );
};
export default Technologies;

const Backend = () => {
  const array = [
    {
      title: "Node.js",
      icon: nodeIcon,
    },
    {
      title: "Express",
      icon: expressIcon,
    },
    {
      title: "NextJS",
      icon: nextIcon,
    },
    {
      title: "MongoDB",
      icon: mongodbIcon,
    },
    {
      title: "Socket.io",
      icon: socketIcon,
    },
    {
      title: "Django",
      icon: djangoIcon,
    },
  ];
  return (
    <div className="relative before:absolute before:rounded-3xl before:left-1/2 before:top-0 before:-translate-x-1/2  before:h-[85%] before:w-0.5 before:bg-foreground">
      {array.map((elm, index) => {
        if (index % 2 !== 0) {
          return (
            <Item icon={elm.icon} title={elm.title} key={index} left={true} />
          );
        } else {
          return (
            <Item icon={elm.icon} title={elm.title} key={index} left={false} />
          );
        }
      })}
    </div>
  );
};
const Frontend = () => {
  const array = [
    {
      title: "Html",
      icon: htmlIcon,
    },
    {
      title: "CSS",
      icon: cssIcon,
    },
    {
      title: "JavaScript",
      icon: jsIcon,
    },
    {
      title: "ReactJS",
      icon: reactIcon,
    },
    {
      title: "NextJS",
      icon: nextIcon,
    },
    {
      title: "Tailwind",
      icon: tailwindIcon,
    },
  ];
  return (
    <div className="relative before:absolute before:rounded-3xl before:left-1/2 before:top-0 before:-translate-x-1/2  before:h-[85%] before:w-0.5 before:bg-foreground">
      {array.map((elm, index) => {
        if (index % 2 !== 0) {
          return (
            <Item icon={elm.icon} title={elm.title} key={index} left={true} />
          );
        } else {
          return (
            <Item icon={elm.icon} title={elm.title} key={index} left={false} />
          );
        }
      })}
    </div>
  );
};
const Item = ({ icon, title, left }) => {
  return (
    <div className="relative">
      <div className="absolute w-1.5 h-1.5 bg-white rotate-45 left-1/2 -translate-x-1/2 top-0" />
      <div
        className={`${
          left ? "ml-auto rounded-tl-none" : " rounded-tr-none"
        } flex shadow-sm shadow-foreground/20 border border-white/10 px-2 py-3 rounded-lg gap-2 items-center w-[47%] overflow-hidden`}
      >
        <span className="shrink-0 w-fit text-xl">{icon}</span>
        <h1 className="whitespace-nowrap w-full overflow-hidden text-ellipsis sm:text-md text-xl">
          {title}
        </h1>
      </div>
    </div>
  );
};
