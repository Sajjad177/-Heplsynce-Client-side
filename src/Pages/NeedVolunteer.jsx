import { useState } from "react";
import useShowAllData from "../Hook/useShowAllData";
import { Link } from "react-router-dom";
import { FaTableCells } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";

const NeedVolunteer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { items, search, refetch } = useShowAllData();
  const [isTableLayout, setIsTableLayout] = useState(false);

  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      await search(searchQuery);
    } else {
      refetch();
    }
  };

  const toggleLayout = () => {
    setIsTableLayout((prevLayout) => !prevLayout);
  };

  return (
    <div>
      <div className="my-4 flex items-center justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Post Title"
          className="p-3 border rounded"
        />
        <button
          onClick={handleSearch}
          className="btn bg-blue-500 text-white  rounded"
        >
          Search
        </button>
        <button
          onClick={toggleLayout}
          className="ml-2  px-4 py-2 rounded"
        >
          {isTableLayout ? (
            <BsCardText title="Change to card" className="text-5xl"></BsCardText>
          ) : (
            <FaTableCells title="Change to table" className="text-5xl"></FaTableCells>
          )}
        </button>
      </div>
      {isTableLayout ? (
        // Table layout
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border border-gray-300">Title</th>
              <th className="p-2 border border-gray-300">Location</th>
              <th className="p-2 border border-gray-300">Deadline</th>
              <th className="p-2 border border-gray-300">Volunteer Need</th>
              <th className="p-2 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items?.map((item) => (
              <tr key={item._id}>
                <td className="p-2 border border-gray-300">{item.title}</td>
                <td className="p-2 border border-gray-300">{item.location}</td>
                <td className="p-2 border border-gray-300">
                  {new Date(item.deadline).toLocaleDateString()}
                </td>
                <td className="p-2 border border-gray-300">
                  {item.number_Need}
                </td>
                <td className="p-2 border border-gray-300">
                  {item.number_Need > 0 ? (
                    <Link to={`/details/${item._id}`} className="text-blue-500">
                      View Details
                    </Link>
                  ) : (
                    <span className="text-red-500">Volunteers not needed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        // Card layout
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-16">
          {items?.map((item) => (
            <div
              key={item._id}
              className="rounded-md shadow-md bg-[#435e75] text-gray-100"
            >
              <img
                src={item.thumbnail}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
              />
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p>Location: {item.location}</p>
                <p>Deadline: {new Date(item.deadline).toLocaleDateString()}</p>
                <p>Volunteer Need: {item.number_Need}</p>
                {item.number_Need > 0 ? (
                  <Link to={`/details/${item._id}`} className="text-blue-500">
                    View Details
                  </Link>
                ) : (
                  <p className="text-red-500">Volunteers not needed</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NeedVolunteer;
