// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaLaravel,
  FaTrello,
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
  SiMui,
  SiThreedotjs,
} from "react-icons/si";

import {TbBrandReactNative} from "react-icons/tb";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Heliconia Caribbea",
          path: "/heliconia.jpg",
          description:
            "Projet e-commerce pour un créateur de bijoux sur mesure. Le défi était de pouvoir réaliser une expérience complete de personnalisation où le client était en mesure de choisir la base de son bijou, la taille de son choix en prenant en compte 11 types de tailles différentes et plusieurs matériaux. Le prix final devait s'ajuster selon le choix du client et le tunnel d'achat devait être géré par Stripe.",
          tech: [
            <FaReact key={"react"} />,
            <FaLaravel key={"laravel"} />,
            <FaTrello key={"trello"} />,
            <SiPhp key={"php"} />,
            <SiTailwindcss key={"tailwindcss"} />,
            <SiMysql key={"mysql"} />,
            <SiPhpmyadmin key={"phpmyadmin"} />,
          ],
        },
        {
          title: "Mind Pulse",
          path: "/mind.jpg",
          description:
            "Projet de site vitrine où il fallait être en mesure de rendre le contenu dynamique, d'où l'utilisation de threeJs pour le background et le logo, les rendant ainsi réactifs à la navigation. L'utilisation d'un back end était pour permettre la mise en ligne d'article de blog.",
          tech: [
            <FaReact key={"react"} />,
            <FaLaravel key={"laravel"} />,
            <FaTrello key={"trello"} />,
            <SiPhp key={"php"} />,
            <SiMui key={"mui"} />,
            <SiMysql key={"mysql"} />,
            <SiPhpmyadmin key={"phpmyadmin"} />,
            <SiThreedotjs key={"threedotjs"} />,
          ],
        },
        {
          title: "Weather App",
          path: "/weather.jpg",
          description:
            "Projet personnel de création d'application météo afin d'apprendre à utiliser React et réaliser des appels API pour afficher les informations meteo.",
          tech: [<TbBrandReactNative key={"reactnative"} />],
        },
        {
          title: "Laurentius",
          path: "/laurentius.jpg",
          description:
            "Demande de réalisation d'un site portfolio. J'avais carte blanche et par conséquent, j'ai tenté de réaliser le site sans l'aide d'aucun framework. Le site est donc en Vanilla JS.",
          tech: [
            <FaHtml5 key={"html5"} />,
            <FaCss3 key={"css3"} />,
            <FaJs key={"js"} />,
          ],
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "Digital Cara V1",
    //       path: "/thumb4.jpg",
    //       description:
    //         "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
    //       tech: "React, Next.js, Sass",
    //       url: "https://google.com",
    //     },
    //     {
    //       title: "Tickets website",
    //       path: "/thumb1.jpg",
    //       description:
    //         "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
    //       tech: "React, Next.js, Sass",
    //       url: "https://google.com",
    //     },
    //     {
    //       title: "Laurentius",
    //       path: "/thumb2.jpg",
    //       description:
    //         "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
    //       tech: "React, Next.js, Sass",
    //       url: "https://google.com",
    //     },
    //     {
    //       title: "Hangman Game",
    //       path: "/thumb3.jpg",
    //       description:
    //         "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
    //       tech: "React, Next.js, Sass",
    //       url: "https://google.com",
    //     },
    //   ],
    // },
  ],
};

import { useState } from "react";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

//icons
import { BsArrowRight } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

//import image
import Image from "next/image";

//modal
import Modal from "react-modal";

// Définir l'élément racine de l'application pour le modal
if (typeof window !== "undefined") {
  Modal.setAppElement("#__next");
}

const WorkSlider = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
    console.log("ouverture modal");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <Swiper
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]"
      >
        {workSlides.slides.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                {slide.images.map((image, index) => {
                  return (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                      onClick={() => openModal(image)}
                    >
                      <div className="flex items-center justify-center relative overflow-hidden">
                        {/*image*/}
                        <Image
                          src={image.path}
                          width={500}
                          height={300}
                          alt=""
                        />
                        {/*overlay gradient*/}
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#51ace9] to-[#4a22bd] opacity-0 group-hover:opacity-80 translition-all duration-700"></div>
                        {/*title*/}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            {/*title part 1*/}
                            <div className="delay-100">VOIR</div>
                            {/*title part 2*/}
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              PLUS
                            </div>
                            {/*icon*/}
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {selectedImage && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          className="modal bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content text-center flex flex-col mb-4 xl:mb-0">
            <Image
              src={selectedImage.path}
              width={500}
              height={300}
              alt={selectedImage.title}
            />
            <h2 className="h2 xl:mt-12 text-white">{selectedImage.title}</h2>
            <div className="">
              <p className="flex gap-x-4 text-blue text-2xl">
                {selectedImage.tech}
              </p>
            </div>
            <p
              className="mb4
            max-w-[400px] mx-auto lg:mx-0"
            >
              {selectedImage.description}
            </p>
            <div className="flex gap-x-6 w-full justify-center flex-row-reverse">
              {/* <a
                href={selectedImage.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-blue group">
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    Visiter
                  </span>
                  <BsArrowRight
                    className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]
              "
                  />
                </button>
              </a> */}
              <button
                className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                onClick={closeModal}
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                  Fermer
                </span>
                <RxCross1
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]
              "
                />
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default WorkSlider;
