import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
  <section className="h-full">
    <div className="container mx-auto h-full" >
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Software Engineer</span>
          <h1 className="h1 mb-6">Hi! I'm<br /> 
          <span className="text-accent">MUHAMMAD ABDULLAH</span></h1>
          <p className="max-w-[500px] mb-9 text-white/80"> Computer Science graduate passionate about software development, aspiring full-stack developer driven by innovation and learning. I believe in a positive and proactive mindset with a focus and dedication to quality results.</p>
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button 
            variant="outline"
            size="lg"
            className="uppercase flex items-center gap-2">
              <span>Download Resume</span>
            <FiDownload className="text-xl"/>
            </Button>
            <div className="mb-8 xl:mb-0">
              <Socials 
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base 
              hover:bg-accent hover:text-primary hover:transition-all duaration-500"
              />
            </div>
          </div>
        </div>
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
          <Photo />
          </div>
      </div>
      </div>
      <Stats />
    </section>);
};

export default Home;
