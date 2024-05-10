import { useEffect, useState } from "react";
import image1 from '../assets/image/banner-1.jpg'
import image2 from '../assets/image/banner-2.jpg'
import image3 from '../assets/image/banner-3.jpg'
import image4 from '../assets/image/banner-4.jpg'

const Banner = () => {

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{
        img: image1, title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, 
        {img: image2, title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},
        {img: image3, title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, 
        {img: image4, title: "Escape 4",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, 
        ];
    
    useEffect(() => {
      const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
      return () => clearInterval(intervalId);
    }, [currentSlider, sliders.length]);

  return (
    <div className="">
      <div
        className="w-full lg:h-[70vh] md:h-[50vh] h-80 my-10 flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        {/* text container here */}
        <div className="drop-shadow-lg text-white text-center px-5">
          <h1 className="text-xl lg:text-3xl font-semibold mb-3">
            {sliders[currentSlider].title}
          </h1>
          <p className="text-sm md:text-base lg:text-lg">
            {sliders[currentSlider].des}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
