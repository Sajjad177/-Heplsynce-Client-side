import { useEffect, useState } from "react";

const Banner = () => {

    const [currentSlider, setCurrentSlider] = useState(0);
    const sliders = [{
        img: "https://source.unsplash.com/1200x540/?nature", title: "Escape 1", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, 
        {img: "https://source.unsplash.com/1200x540/?hill", title: "Escape 2", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},
        {img: "https://source.unsplash.com/1200x540/?mountain", title: "Escape 3", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, 
        {img: "https://source.unsplash.com/1200x540/?river", title: "Escape 4",des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",}, 
        {img: "https://source.unsplash.com/1200x540/?sea", title: "Escape 5", des: "A Symphony of Tranquility. Experience the perfect blend of relaxation and excitement.",},];
    
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
