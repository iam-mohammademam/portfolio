"use client";

import Card from "./card";
import PageHeading from "./page-heading";

const Works = () => {
  return (
    <div id="projects" className="w-full py-8 md:px-[8%] px-[5%]">
      <PageHeading title="works" tagline="check out my recent projects." />
      <div className="grid grid-cols-4 gap-6 w-full mt-16">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
export default Works;
