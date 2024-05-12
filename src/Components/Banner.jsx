import { useEffect, useState } from "react";
import image1 from "../assets/image/banner-1.jpg";
import image2 from "../assets/image/banner-2.jpg";
import image3 from "../assets/image/banner-3.jpg";
import image4 from "../assets/image/banner-4.jpg";
import { BiSolidDonateHeart } from "react-icons/bi";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    { img: image1, des: "We try to help people with volunteering" },
    { img: image2, des: "We try to help people with volunteering" },
    { img: image3, des: "We try to help people with volunteering" },
    { img: image4, des: "We try to help people with volunteering" },
  ];

  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setCurrentSlider(
          currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
        ),
      5000
    );
    return () => clearInterval(intervalId);
  }, [currentSlider, sliders.length]);

  return (
    <div className="">
      <div
        className="w-full lg:h-[70vh] md:h-[50vh] h-80 my-10 flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear"
        style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}
      >
        <div className="drop-shadow-lg text-white text-center px-5">
          <p className="lg:text-5xl md:text-3xl text-lg">
            {sliders[currentSlider].des}
          </p>
          <button className="text-xl mt-8 box-border border  w-48 h-14 rounded-lg  text-white relative group">
            <span className="pr-8">DONATE</span>
            <span className="bg-[#0A6847] absolute right-0 top-0 h-full rounded-lg flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
              <BiSolidDonateHeart className="w-10 inline mx-auto text-3xl"></BiSolidDonateHeart>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
