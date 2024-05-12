// import { useState } from "react";
import { useState } from "react";
import useShowAllData from "../Hook/useShowAllData";
import { Link } from "react-router-dom";
// import toast from "react-hot-toast";

const NeedVolunteer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { items, search, refetch } = useShowAllData();
  // console.log(items);

  const handleSearch = async () => {
    // console.log('click')
    if (searchQuery.trim() !== "") {
      await search(searchQuery);
    } else {
      refetch();
      
    }
  };

  return (
    <div>
      <div className="my-4 text-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Post Title"
          className="p-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-16">
        {items?.map((item) => (
          <div
            key={item._id}
            className=" rounded-md shadow-md bg-[#435e75] text-gray-100"
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
                <div className="space-y-2 pt-5">
                  <p className="font-semibold">
                    Location : <span>{item.location}</span>
                  </p>
                  <p className="font-semibold">
                    Volunteer Need : <span>{item.number_Need}</span>
                  </p>
                </div>
                <p className="font-semibold">
                  Deadline :{" "}
                  <span>{new Date(item.deadline).toLocaleDateString()}</span>
                </p>
              </div>
              <Link to={`/details/${item._id}`}>
                <button
                  type="button"
                  className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-400 text-gray-900"
                >
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NeedVolunteer;
