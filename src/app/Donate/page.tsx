import React from "react";
import Form from "../components/Form";

function Donate() {
  return (
    <main className="min-h-screen  flex justify-center items-center sm:flex-row flex-col gap-4 w-full ">
      <Form />
      <div>
        <video className="w-full sm:max-w-[42rem]   p-2" loop muted autoPlay>
          <source src="/video.mp4" />
        </video>
        <p className=" text-2xl  max-w-[50rem] text-gray-500 p-2  ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
          asperiores sed suscipit. Placeat praesentium nisi cum voluptatibus
          dolores corrupti, recusandae maxime aliquid aspernatur ?
        </p>
      </div>
    </main>
  );
}

export default Donate;
