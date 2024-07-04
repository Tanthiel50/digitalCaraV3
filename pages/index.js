//next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

//framer motion
import { motion } from "framer-motion";

//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/*text*/}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/*title*/}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 hidden xl:display  xl:block"
          >
            <span className="text-blue  ">Shaping the future</span> <br />
            One pixel at a time
          </motion.h1>
          {/*subtitle*/}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm mt-10 md:mt-0 xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Spécialisée dans le développement web, la conception créative et
            l&apos;accompagnement marketing, je suis en mesure de combiner
            innovation et performance pour créer des projets uniques. En me
            basant sur des indicateurs claires et réalistes, je suis en mesure
            de réaliser des solutions avancées correspondants aux besoins et
            permettant des résultats efficaces. Une expertise technique, un
            regard moderne, une créativité innovante me permettent de réaliser
            des projets numériques de qualités qui feront la différence dans des
            secteurs très concurrentiels.
          </motion.p>
          {/*button*/}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/*image*/}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/*bg image*/}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/*particles*/}
        <ParticlesContainer />
        {/*avatar*/}
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] "
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
