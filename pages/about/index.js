//import usestate
import { useState } from "react";

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
  SiPhpmyadmin,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "Compétences",
    info: [
      {
        title: "Front End",
        icons: [
          { icon: <FaHtml5 key="html5" />, key: "html5" },
          { icon: <FaCss3 key="css3" />, key: "css3" },
          { icon: <FaJs key="js" />, key: "js" },
          { icon: <FaReact key="react" />, key: "react" },
          { icon: <SiTailwindcss key="tailwindcss" />, key: "tailwindcss" },
          { icon: <SiSass key="sass" />, key: "sass" },
        ],
      },
      {
        title: "Back End",
        icons: [
          { icon: <SiPhp key="php" />, key: "php" },
          { icon: <SiLaravel key="laravel" />, key: "laravel" },
          { icon: <SiSymfony key="symfony" />, key: "symfony" },
          { icon: <SiMysql key="mysql" />, key: "mysql" },
          { icon: <SiPhpmyadmin key="phpmyadmin" />, key: "phpmyadmin" },
        ],
      },
      {
        title: "CMS",
        icons: [
          { icon: <FaWordpress key="wordpress" />, key: "wordpress" },
          { icon: <SiStrapi key="strapi" />, key: "strapi" },
          { icon: <SiHubspot key="hubspot" />, key: "hubspot" },
          { icon: <SiPrestashop key="prestashop" />, key: "prestashop" },
        ],
      },
      {
        title: "Dev Tools",
        icons: [
          { icon: <SiPostman key="postman" />, key: "postman" },
          { icon: <SiVisualstudiocode key="vscode" />, key: "vscode" },
          { icon: <SiGithub key="github" />, key: "github" },
          { icon: <SiNpm key="npm" />, key: "npm" },
        ],
      },
      {
        title: "UI/UX Design",
        icons: [
          { icon: <FaFigma key="figma" />, key: "figma" },
          { icon: <SiAdobexd key="adobexd" />, key: "adobexd" },
          { icon: <SiAdobephotoshop key="photoshop" />, key: "photoshop" },
          {
            icon: <SiAdobeillustrator key="illustrator" />,
            key: "illustrator",
          },
        ],
      },
      {
        title: "Marketing",
        icons: [
          {
            icon: <SiGoogleanalytics key="googleanalytics" />,
            key: "googleanalytics",
          },
          { icon: <SiHubspot key="hubspot" />, key: "hubspot" },
          { icon: <SiSemrush key="semrush" />, key: "semrush" },
          { icon: <SiTrello key="trello" />, key: "trello" },
          { icon: <SiSlack key="slack" />, key: "slack" },
          { icon: <SiCanva key="canva" />, key: "canva" },
          { icon: <SiAircall key="aircall" />, key: "aircall" },
          { icon: <SiAsana key="asana" />, key: "asana" },
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
        title: "Concepteur développeur d&apos;application - Arinfo",
        stage: "2023 - 2024",
      },
      {
        title: "Concepteur développeur d&apos;application - Believemy",
        stage: "2022 - 2023",
      },
      {
        title: "Bachelor Webmarketing - MyDigitalSchool",
        stage: "2020 - 2021",
      },
      {
        title: "BTS NDRC - Notre Dame du Roc",
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
  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left overflow-auto">
      <Circles />
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
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
            Du webmarketing au développement web, mes compétences n&apos;ont
            cessé de s&apos;étoffer pour proposer un service de plus en plus
            complet et personnalisé. L&apos;innovation et la performance sont
            les maitres mots dans tous mes projets.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[280px] overflow-auto"
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
          <div className="py-6 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="py-2 flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map(({ icon, key }) => (
                      <div key={key} className="text-2xl text-white">
                        {icon}
                      </div>
                    ))}
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
