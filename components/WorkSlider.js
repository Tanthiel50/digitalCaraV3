// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Heliconia Caribbea",
          path: "/thumb1.jpg",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
          tech: "React, Next.js, Sass",
          url: "https://google.com",
        },
        {
          title: "Mind Pulse",
          path: "/thumb2.jpg",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
          tech: "React, Next.js, Sass",
          url: "https://google.com",
        },
        {
          title: "Weather App",
          path: "/thumb3.jpg",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
          tech: "React, Next.js, Sass",
          url: "https://google.com",
        },
        {
          title: "Baldur's Gate",
          path: "/thumb4.jpg",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
          tech: "React, Next.js, Sass",
          url: "https://google.com",
        },
      ],
    },
    {
      images: [
        {
          title: "Digital Cara V1",
          path: "/thumb4.jpg",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
          tech: "React, Next.js, Sass",
          url: "https://google.com",
        },
        {
          title: "Tickets website",
          path: "/thumb1.jpg",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
          tech: "React, Next.js, Sass",
          url: "https://google.com",
        },
        {
          title: "Laurentius",
          path: "/thumb2.jpg",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
          tech: "React, Next.js, Sass",
          url: "https://google.com",
        },
        {
          title: "Hangman Game",
          path: "/thumb3.jpg",
          description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit. Amet repudiandae, cum aspernatur laborum dolore vel nostrum aperiam repellat, temporibus",
          tech: "React, Next.js, Sass",
          url: "https://google.com",
        },
      ],
    },
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

//import image
import Image from "next/image";

//modal
import Modal from "react-modal";

// Définir l'élément racine de l'application pour le modal
if (typeof window !== 'undefined') {
  Modal.setAppElement('#__next');
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
          className="modal bg-primary"
          overlayClassName="modal-overlay"
        >
          <div className="modal-content text-center flex flex-col mb-4 xl:mb-0">
            <Image
              src={selectedImage.path}
              width={500}
              height={300}
              alt={selectedImage.title}
            />
            <h2 className="h2 xl:mt-12">{selectedImage.title}</h2>
            <p
              className="mb4
            max-w-[400px] mx-auto lg:mx-0"
            >
              {selectedImage.description}
            </p>
            <a
              href={selectedImage.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>En savoir plus</button>
            </a>
            <button onClick={closeModal}>Fermer</button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default WorkSlider;
