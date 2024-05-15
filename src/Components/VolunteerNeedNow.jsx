import { Link } from "react-router-dom";
import useShowAllData from "../Hook/useShowAllData";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import VolunteerNeedNowCard from "./VolunteerNeedNowCard";
import { Fade } from "react-awesome-reveal";

const VolunteerNeedNow = () => {
  const { sliceData, loading } = useShowAllData();

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="lg:my-20 my-10 border-b-2 border-dashed pb-5">
        <h1 className="lg:text-5xl text-3xl font-bold text-center font-shadows">
          <Fade cascade duration={300}>Volunteer Need Now</Fade>
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {sliceData.map((item) => (
          <VolunteerNeedNowCard
            key={item.key}
            item={item}
          ></VolunteerNeedNowCard>
        ))}
      </div>
      <div className="text-center lg:mt-20 mt-10">
        <Link to="/need-volunteer">
          <button className="btn mb-10">
            See More
            <IoIosArrowDroprightCircle className="text-2xl"></IoIosArrowDroprightCircle>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedNow;
