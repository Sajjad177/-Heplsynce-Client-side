import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NeedVolunteerCard = ({item}) => {
  return (
    <div>
      <div className=" lg:w-full bg-base-100 shadow-xl border rounded-md p-5">
        <div>
          <img
            src={item.thumbnail}
            alt="Shoes"
            className="h-80 w-full rounded-md"
          />
        </div>
        <div className="my-5">
          <h2 className="mb-1 text-2xl font-semibold">{item.title}</h2>
          <p className="rounded-3xl text-xl text-center w-36 bg-[#FF9F66]">
            {item.category}
          </p>
        </div>
        <div className="my-2">
          <h3 className="">
            <span className="font-semibold">Volunteer Need : </span>
            {item.number_Need}
          </h3>
          <h5>
            <span className="font-semibold">Deadline : </span>
            {new Date(item.deadline).toLocaleDateString()}
          </h5>
          <h6>
            <span className="font-semibold">Location : </span>
            {item.location}
          </h6>
        </div>
        {item.number_Need > 0 ? (
          <Link to={`/details/${item._id}`} className="text-blue-500">
            <button className="btn btn-primary mt-10 w-full">
              View Details
            </button>
          </Link>
        ) : (
          <p className="text-red-500">Volunteers not needed</p>
        )}
      </div>
    </div>
  );
};

NeedVolunteerCard.propTypes = {
    item:PropTypes.object
};

export default NeedVolunteerCard;
