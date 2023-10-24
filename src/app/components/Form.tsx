import React from "react";
import FormInput from "./FormInput";
import { AiOutlineHeart } from "react-icons/ai";

function Form() {
  return (
    <div className="flex flex-col gap-3 p-2 shadow sm:my-0 my-6 rounded-lg sm:w-[28rem] w-full">
      <FormInput name="First Name " />
      <FormInput name="Last Name" />
      <FormInput name="Email" />
      <FormInput name="Amount" />

      <button className="bg-black  flex items-center justify-center gap-2 h-12  text-white font-semibold rounded-full hover:bg-gray-700  w-full">
        Donate
        <AiOutlineHeart className="h-4 w-4" />
      </button>
    </div>
  );
}

export default Form;
