"use client";
import React from "react";
import Layout from "./main/Layout";
import { section } from "../lib/data";
import SectionHeading from "./SectionHeading";

function Section() {
  return (
    <Layout>
      <div className="flex items-center sm:flex-row flex-col gap-5">
        {section.map((sec, index) => (
          <div
            key={index}
            className="border-1 shadow max-w-[24rem] border flex justify-center rounded-lg flex-col items-center p-2  "
          >
            <span className="text-xl text-cyan-600 font-semibold">
              {sec.Amount}
            </span>
            <h1 className="font-medium">{sec.title}</h1>
            <p className="text-gray-500">{sec.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default Section;
