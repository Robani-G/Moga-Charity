"use client";
import React from "react";
import { section, serviecs } from "../lib/data";
import Layout from "../components/main/Layout";
import SectionHeading from "../components/SectionHeading";

function Section() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[42rem]gap-4 ">
        <SectionHeading name="Our Services" />
        <p className="sm:text-3xl text-xl   text-blue-500  font-semibold">
          The Service We Give to The Homeless kids
        </p>
      </div>
      <Layout>
        <div className="flex items-center sm:flex-row flex-col gap-5">
          {serviecs.map((sec, index) => (
            <div
              key={index}
              className="border-4 border-indigo-200 border-l-blue-500 border-r-blue-500 shadow max-w-[24rem]  flex justify-center rounded-lg flex-col items-center p-2  "
            >
              <span className="text-3xl text-blue-500 font-semibold">
                {sec.icon}
              </span>
              <h1 className="font-medium">{sec.title}</h1>
              <p className="text-gray-500">{sec.description}</p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default Section;
