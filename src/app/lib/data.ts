import { IoIosHome } from "react-icons/io";
import { FaGraduationCap } from "react-icons/Fa";
import { GiHealthCapsule } from "react-icons/gi";

import React from "react";
export const section = [
  {
    title: "Active Volunteers",
    Amount: "3000+",
    description:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam illum dignissimos, non, asperiores, distinctio voluptas odit doloremque quia mollitia eos voluptatum impedit temporibus fuga magnam blanditiis rem libero! Qui?",
  },
  {
    title: "Reliable Partner",
    Amount: "21k+",
    description:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam illum dignissimos, non, asperiores, distinctio voluptas odit doloremque quia mollitia eos voluptatum impedit temporibus fuga magnam blanditiis rem libero! Qui?",
  },
  {
    title: "Kids Helped",
    Amount: "15k+",
    description:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam illum dignissimos, non, asperiores, distinctio voluptas odit doloremque quia mollitia eos voluptatum impedit temporibus fuga magnam blanditiis rem libero! Qui?",
  },
  {
    title: "Funds Collected",
    Amount: "15k+",
    description:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam illum dignissimos, non, asperiores, distinctio voluptas odit doloremque quia mollitia eos voluptatum impedit temporibus fuga magnam blanditiis rem libero! Qui?",
  },
] as const;
export const serviecs = [
  {
    title: "Healthy Habitaiton",
    icon: React.createElement(IoIosHome),
    description:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam illum dignissimos, non, asperiores, distinctio voluptas odit doloremque quia mollitia eos voluptatum impedit temporibus fuga magnam blanditiis rem libero! Qui?",
  },
  {
    title: "Ensure Education",
    icon: React.createElement(FaGraduationCap),
    description:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam illum dignissimos, non, asperiores, distinctio voluptas odit doloremque quia mollitia eos voluptatum impedit temporibus fuga magnam blanditiis rem libero! Qui?",
  },

  {
    title: "Healthcare & Medicine",
    icon: React.createElement(GiHealthCapsule),
    description:
      "      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veniam illum dignissimos, non, asperiores, distinctio voluptas odit doloremque quia mollitia eos voluptatum impedit temporibus fuga magnam blanditiis rem libero! Qui?",
  },
] as const;
export const navlinks = [
  {
    name: "Home",
    href: "./",
  },
  {
    name: "Services",
    href: "./Donate",
  },
  {
    name: "About",
    href: "./",
  },
  {
    name: "Contact",
    href: "./",
  },
  {
    name: "News",
    href: "./",
  },
];
