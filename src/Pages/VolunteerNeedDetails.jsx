import { Link, useLoaderData } from "react-router-dom";

const VolunteerNeedDetails = () => {
  const volunteer = useLoaderData();
  console.log(volunteer);
  const {
    _id,
    title,
    thumbnail,
    description,
    category,
    location,
    number_Need,
    deadline,
  } = volunteer || {};

  return (
    <div>
      <section className="bg-gray-800 text-gray-100 my-10">
        <div className="container flex flex-col mx-auto lg:flex-row">
          <div className="w-full">
            <img src={thumbnail} alt="" className="w-full h-[50vh]" />
          </div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <div className="flex items-center lg:flex-row  justify-between">
              <h2 className="text-3xl font-semibold leading-none">{title}</h2>
              <span className="border lg:p-2  rounded-full bg-yellow-950 border-none">
                {category}
              </span>
            </div>
            <p className="mt-4 mb-8 text-sm">{description}</p>
            <div className="mb-10">
              <div className="flex gap-20">
                <h1>Location : {location}</h1>
                <h1>Volunteer: {number_Need}</h1>
              </div>
              <h1>Deadline : {new Date(deadline).toLocaleDateString()}</h1>
            </div>
            <Link to={`/be-volunteer/${_id}`}>
              <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-violet-400 text-gray-900">
                Be a Volunteer
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerNeedDetails;
