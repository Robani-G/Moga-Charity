import Image from "next/image";
import React from "react";
import Link from "next/link";
import SectionHeading from "../components/SectionHeading";

function Section2() {
  return (
    <>
      <div>
        <div className="flex flex-col  gap-2 mt-10">
          <div className="flex flex-col justify-center items-center gap-4 ">
            <SectionHeading name="About us" />
          </div>
          <div className="flex sm:flex-row flex-col sm:mt-10  p-2">
            <div className="p-4  flex flex-col gap-2 items-center justify-center">
              <p className="sm:text-2xl text-xl   text-blue-500  font-semibold">
                We Are the World's Biggest None Profit Organization
              </p>
              <p className="text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                explicabo veniam quibusdam, est, dignissimos laborum quasi
                eligendi odio totam recusandae sint qui esse itaque, nostrum
                error aliquam vel labore inventore. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Quia explicabo veniam quibusdam,
                est, dignissimos laborum quasi eligendi odio totam recusandae
                sint qui esse itaque, nostrum error aliquam vel labore
                inventore. Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Laudantium omnis debitis vitae est. Earum impedit, porro
                ducimus magni velit ea consectetur maxime omnis ex facere. Nam
                enim maxime sequi et. Lorem ipsum, dolor sit amet consectetur
                adipisicing elit. Quia explicabo veniam quibusdam, est,
                dignissimos laborum quasi eligendi odio totam recusandae sint
                qui esse itaque, nostrum error aliquam vel labore inventore.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
                explicabo veniam quibusdam, est, dignissimos laborum quasi
                eligendi odio totam recusandae sint qui esse itaque, nostrum
                error aliquam vel labore inventore. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Laudantium omnis debitis vitae
                est. Earum impedit, porro ducimus magni velit ea consectetur
                maxime omnis ex facere. Nam enim maxime sequi et.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
