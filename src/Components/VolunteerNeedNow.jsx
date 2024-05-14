import { Link } from "react-router-dom";
import useShowAllData from "../Hook/useShowAllData";
import { IoIosArrowDroprightCircle } from "react-icons/io";


const VolunteerNeedNow = () => {
  const { sliceData } = useShowAllData();
  console.log(sliceData);
  return (
    <div>
      <div className="lg:my-20 my-10 border-b-2 border-dashed pb-5">
        <h1 className="lg:text-5xl text-3xl font-bold text-center font-shadows">
          Volunteer Need Now
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
        {sliceData.map((item) => (
          <div
            key={item._id}
            className=" rounded-md shadow-md  mb-10"
          >
            <img
              src={item.thumbnail}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {item.title}
                </h2>
                <span className="border rounded-full px-1 bg-sky-400 border-none">
                  {item.category}
                </span>
                <p className="">{item.description.substring(0,50)}....</p>
                <p>
                  Deadline : {new Date(item.deadline).toLocaleDateString()}
                </p>
              </div>
              {item.number_Need > 0 ? (
                  <Link to={`/details/${item._id}`} className="text-blue-500">
                    <button className="btn btn-primary mt-10 w-full">View Details</button>
                  </Link>
                ) : (
                  <p className="text-red-500">Volunteers not needed</p>
                )}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/need-volunteer">
          <button className="btn mb-10">See More
          <IoIosArrowDroprightCircle className="text-2xl"></IoIosArrowDroprightCircle>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedNow;
