import { type } from "os";
import React from "react";
type prop = {
  name: string;
};
function FormInput({ name }: prop) {
  return (
    <input
      placeholder={name}
      className="outline-none border  p-1 sm:h-12 h-9  flex items-center justify-center rounded-lg   bg-gray-100 w-full  "
    />
  );
}

export default FormInput;
