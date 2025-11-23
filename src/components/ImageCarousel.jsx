
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Your custom CSS
import "./index.css";

// Modules
import { Pagination, Autoplay } from "swiper/modules";

// Import local images
import slider1 from "../assets/banner2.jpg";
import slider2 from "../assets/banner2.jpg";
import slider3 from "../assets/movie.jpg";
import slider4 from "../assets/squad.webp";
import slider5 from "../assets/Wednesday.webp";

export default function App() {
  const images = [slider1, slider2, slider3, slider4, slider5];

  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        
        modules={[Pagination, Autoplay]}
        className="mySwiper w-full h-[60vh] md:h-[70vh] lg:h-[95vh]"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`slider-${index}`}
              className="w-full h-full object-cover "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
