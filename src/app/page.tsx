import Image from "next/image";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Section2 from "./components/Section2";
import Services from "./components/Services";

export default function Home() {
  return (
    <main className=" min-h-screen space-y-10   pt-24 p-2">
      <Hero />
      <Section />
      <Section2 />
      <Services />
    </main>
  );
}
