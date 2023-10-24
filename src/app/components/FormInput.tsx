import { type } from "os";
import React from "react";
type prop = {
  name: string;
};
function FormInput({ name }: prop) {
  return (
    <input
      placeholder={name}
      className="outline-none border h-12 p-2 rounded-lg w-[26rem] bg-gray-100 m-2 "
    />
  );
}

export default FormInput;
