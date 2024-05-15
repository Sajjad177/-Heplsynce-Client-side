import { useState } from "react";
import useShowAllData from "../Hook/useShowAllData";
import { Link } from "react-router-dom";
import { FaTableCells } from "react-icons/fa6";
import { BsCardText } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import NeedVolunteerCard from "../Components/NeedVolunteerCard";

const NeedVolunteer = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { items, search, refetch, loading } = useShowAllData();
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

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <div className="w-10 h-10 animate-[spin_2s_linear_infinite] rounded-full border-8 border-dotted border-sky-600"></div>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>HelpSync / need volunteer</title>
      </Helmet>
      <div className="my-4 flex items-center justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search by Post Title"
          className="p-3 
           border rounded"
        />
        <button
          onClick={handleSearch}
          className="btn bg-blue-500 text-white  rounded"
        >
          Search
        </button>
        <button onClick={toggleLayout} className="ml-2  px-4 py-2 rounded">
          {isTableLayout ? (
            <BsCardText
              title="Change to card"
              className="text-5xl"
            ></BsCardText>
          ) : (
            <FaTableCells
              title="Change to table"
              className="text-5xl"
            ></FaTableCells>
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
                      <button className="btn">View Details</button>
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
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-16 w-full">
          {items?.map((item) => (
            <NeedVolunteerCard key={item._id} item={item}></NeedVolunteerCard>
          ))}
        </div>
      )}
    </div>
  );
};

export default NeedVolunteer;
