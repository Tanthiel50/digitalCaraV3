// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight
} from "react-icons/rx";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Marketing",
    description: `Analyser les besoins consommateurs et les moyens d'action pour influencer leur comportement.`,
  },
  {
    icon: <RxPencil2 />,
    title: "Communication",
    description: "Ensemble des moyens et techniques permettant la diffusion des messages pour contribuer à l'atteinte de ces objectifs.",
  },
  {
    icon: <RxDesktop />,
    title: "Développement web",
    description: "Ensemble du processus de création de sites internet ou d'applications en utilisant la technologie web appropriée.",
  },
  {
    icon: <RxReader />,
    title: "Stratégie commerciale",
    description: "Définition et mise en oeuvre des moyens marketing et commerciaux coordonnés afin d'atteindre les objectifs.",
  },
  {
    icon: <RxRocket />,
    title: "UI/UX design",
    description: "Etude des attentes et besoins de l'utilisateur pour la création d'un site web et/ou d'une application mobile.",
  },
];

const ServiceSlider = () => {
  return (
  <Swiper breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 15
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 15
    }
  }}
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  modules={[FreeMode, Pagination]}
  className="h-[240px] sm:h-[340px]"
  >
    {
      serviceData.map((item,index)=>{
        return ( 
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] md:min-h-[270px] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-blue mb-4">{item.icon}</div>
            {/* title & desc */}
            <div className="">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
            {/* arrow */}
            {/* <div className="text-3xl">
              <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-blue transition-all duration-300"/>
            </div> */}
          </div>
        </SwiperSlide>
        )
      })
    }
  </Swiper>);
};

export default ServiceSlider;
