import Image from "next/image";
import React from "react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

function Section2() {
  return (
    <>
      <div>
        <div className="flex flex-col  gap-2 mt-10">
          <div className="flex flex-col justify-center items-center gap-4 ">
            <SectionHeading name="About us" />
          </div>
          <div className="flex sm:flex-row flex-col sm:mt-14  p-2">
            <div className="relative h-96 sm:w-1/2 sm-full rounded-lg">
              <Image
                src="/charity1.jpg"
                fill
                alt="image"
                className="object-cover"
              />
            </div>
            <div className="p-4 sm:max-w-[36rem] flex flex-col gap-2 items-center justify-center">
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
                inventore.
              </p>
              <Link
                href="../About"
                className="bg-blue-500 p-2 gap-2 flex items-center justify-center mx-2 text-white font-semibold rounded-full sm:w-[12rem] w-full hover:bg-blue-400"
              >
                More Detail{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section2;
