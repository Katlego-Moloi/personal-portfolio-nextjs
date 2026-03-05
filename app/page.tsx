"use client";

import HeroSection from "@/components/hero-section";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome } from "react-icons/fa";
import { Grid } from "@/components/grid"
import SimpleParallax from "simple-parallax-js";
import { RecentProjects } from '@/components/recent-projects'
import { navItems } from '@/data'
import { Testimonials } from '@/components/testimonials'
import { Experience } from '@/components/experience'
import { Footer } from '@/components/footer'


const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full bg-red">
        <FloatingNav navItems={navItems}/>
        <HeroSection />
        <Grid/>
        <RecentProjects/>
        <Testimonials/> 
        <Experience/>
        <Footer/>

      </div>
    </main>
  );
};
export default Home;
