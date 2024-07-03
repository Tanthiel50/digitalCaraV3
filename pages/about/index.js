import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiMysql,
  SiTailwindcss,
  SiGoogleanalytics,
  SiStrapi,
  SiHubspot,
  SiPrestashop,
  SiSemrush,
  SiTrello,
  SiSlack,
  SiCanva,
  SiAdobeillustrator,
  SiAircall,
  SiAsana,
  SiPostman,
  SiVisualstudiocode,
  SiSass,
  SiGithub,
  SiNpm,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Compétences",
    info: [
      {
        title: "Front End",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiTailwindcss />,
          <SiSass />,
        ],
      },
      {
        title: "Back End",
        icons: [<SiPhp />, <SiLaravel />, <SiSymfony />, <SiMysql />],
      },
      {
        title: "CMS",
        icons: [<FaWordpress />, <SiStrapi />, <SiHubspot />, <SiPrestashop />],
      },
      {
        title: "Dev Tools",
        icons: [<SiPostman />, <SiVisualstudiocode />, <SiGithub />, <SiNpm />],
      },
      {
        title: "UI/UX Design",
        icons: [
          <FaFigma />,
          <SiAdobexd />,
          <SiAdobephotoshop />,
          <SiAdobeillustrator />,
        ],
      },
      {
        title: "Marketing",
        icons: [
          <SiGoogleanalytics />,
          <SiHubspot />,
          <SiSemrush />,
          <SiTrello />,
          <SiSlack />,
          <SiCanva />,
          <SiAircall />,
          <SiAsana />,
        ],
      },
    ],
  },
  {
    title: "expériences",
    info: [
      {
        title: "Chargée de projet marketing - SEIF",
        stage: "2021 - 2023",
      },
      {
        title: "Customer Success Manager - SEIF",
        stage: "2020 - 2021",
      },
      {
        title: "Alternance service relation client - Jeanneau",
        stage: "2018 - 2020",
      },
      {
        title: "Assistante service client bilingue - Jeanneau",
        stage: "2017 - 2018",
      },
    ],
  },
  {
    title: "Formations",
    info: [
      {
        title: "Concepteur développeur d'application - Arinfo",
        stage: "2023 - 2024",
      },
      {
        title: "Concepteur développeur d'application - Believemy",
        stage: "2022 - 2023",
      },
      {
        title: "Bachelor Webmarketing - MyDigitalSchool",
        stage: "2020 - 2021",
      },
      {
        title:
          "BTS NDRC - Notre Dame du Roc",
        stage: "2018 - 2020",
      },
      {
        title: "Bachelor commerce communication et management - Ecoris",
        stage: "2012 - 2013",
      },
      {
        title: "Licence de lettres modernes - Université Vauban",
        stage: "2009 - 2011",
      },
      {
        title: "Bac sciences economiques et sociales - Lycée St Joseph",
        stage: "2006 - 2009",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/*avatar img*/}
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[300px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/*text*/}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h12
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Where creativity meets
            <span className="text-blue"> Digital </span>
            Precision.
          </motion.h12>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Du webmarketing au développement web, mes compétences n'ont cessé de s'étoffer pour proposer un service de plus en plus complet et personnalisé. L'innovation et la performance sont les maitres mots dans tous mes projets. 
          </motion.p>
          {/*Counters*/}
          {/* <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          > */}
            {/* <div className="flex flex-1 xl:gap-x-6 "> */}
              {/*experience*/}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-blue mb-2">
                  <CountUp start={0} end={33} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Ans
                </div>
              </div> */}
              {/* clients */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-blue mb-2">
                  <CountUp start={0} end={250} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Satisfied clients
                </div>
              </div> */}
              {/* Projects */}
              {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-blue mb-2">
                  <CountUp start={0} end={650} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Finished projects
                </div>
              </div> */}
              {/* Awards */}
              {/* <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-blue mb-2">
                  <CountUp start={0} end={8} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">
                  Winning awards
                </div>
              </div>
            </div>
          </motion.div> */}
        </div>
        {/*info*/}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[280px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-blue after:w-[100%] after:bg-blue after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" py-6 xl:py-6 flex flex-col gap-y-2xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="py-2 flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/*title*/}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/*icons*/}
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
