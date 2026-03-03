"use client";

import HeroSection from "@/components/hero-section";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { Grid } from "@/components/grid"

const Home = () => {
  return (
    <main className="relative bg-black/96 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
        {name: 'Home', link: '/', icon: <FaHome/>}
      ]}/>

      <HeroSection />
      <Grid/>
      </div>
    </main>
  );
};
export default Home;
