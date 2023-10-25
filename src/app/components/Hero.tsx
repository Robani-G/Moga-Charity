"use-client";
import Image from "next/image";
import React from "react";
import { client } from "../utils/configSanity";
import { title } from "process";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import urlFor from "../utils/urlFor";
interface heroprops {
  _id: string;
  image: {
    asset: {
      url: string;
    };
  };
  title: string;
  description: any;

  _createdAt: string;
}
async function getData() {
  const query = `*[_type =='Hero']{
    _id,title,image
  }`;
  const data = await client.fetch(query);
  return data as heroprops[];
}
const Hero = async () => {
  const data = (await getData()) as heroprops[];
  console.log(data);
  return (
    <>
      {/* I dont wanna use map function for a single data */}
      <div className="flex flex-col  gap-2 ">
        <div className="flex justify-center items-center ">
          <p className="sm:text-5xl text-2xl  max-w-[50rem]  font-bold">
            {data[0].title}
          </p>
        </div>
        <div className="flex sm:flex-row flex-col sm:mt-14  p-2">
          <div className="relative h-96 sm:w-1/2 sm-full rounded-lg">
            <Image
              src={urlFor(data[0].image)}
              fill
              alt="image"
              className="object-cover"
            />
          </div>
          <div className="p-4 sm:max-w-[36rem] flex flex-col gap-2 items-center justify-center">
            <p className="text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              explicabo veniam quibusdam, est, dignissimos laborum quasi
              eligendi odio totam recusandae sint qui esse itaque, nostrum error
              aliquam vel labore inventore.
            </p>
            <Link
              href="../Donate"
              className="bg-black p-2 gap-2 flex items-center justify-center mx-2 text-white font-semibold rounded-full sm:w-[12rem] w-full hover:bg-gray-600"
            >
              Donate {""}
              <AiOutlineHeart className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
