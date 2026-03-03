import HeroSection from "@/components/HeroSection";
const Home = () => {
  return (
    <main className="relative bg-black/96 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <HeroSection />
      <div className="max-w-7xl w-full"></div>
    </main>
  );
};
export default Home;
