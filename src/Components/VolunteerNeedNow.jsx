import { Link } from "react-router-dom";
import useShowAllData from "../Hook/useShowAllData";

const VolunteerNeedNow = () => {
  const { sliceData } = useShowAllData();
  console.log(sliceData);
  return (
    <div>
      <div className="my-20 border-b-2 border-dashed pb-5">
        <h1 className="lg:text-4xl text-2xl font-bold text-center">
          Volunteer Need Now
        </h1>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        {sliceData.map((item) => (
          <div
            key={item._id}
            className="max-w-xs rounded-md shadow-md bg-gray-900 text-gray-100 mb-10"
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
                <p className="text-gray-100">{item.description}</p>
                <p>
                  {" "}
                  Deadline : {new Date(item.deadline).toLocaleDateString()}
                </p>
              </div>
              <Link to={`/details/${item._id}`}>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-400 text-gray-900"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Link to="/need-volunteer">
          <button className="btn mb-10">See More</button>
        </Link>
      </div>
    </div>
  );
};

export default VolunteerNeedNow;
