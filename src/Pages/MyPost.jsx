import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import axios from "axios";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import MyRequest from "../Components/MyRequest";

const MyPost = () => {
  const { user } = useAuth();
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (user?.email) {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/volunteers/${user.email}`
          );
          setVolunteers(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    getData();
  }, [user?.email]);

  const handelDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(
            `${import.meta.env.VITE_API_URL}/volunteer/${id}`
          );
          console.log(data);
          setVolunteers((prevVolunteers) =>
            prevVolunteers.filter((volunteer) => volunteer._id !== id)
          );

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <div className="">
      <div className="container mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800">My Add</h2>
          <span className="px-3 py-1 text-xs bg-[#FF9F9F] rounded-full font-bold">
            {volunteers.length}
          </span>
        </div>
        <div className="mt-6">
          {volunteers.length === 0 ? (
            <p className="text-gray-500">volunteer posts not found.</p>
          ) : (
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Title
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Deadline
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Volunteer Need
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Category
                    </th>
                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {volunteers.map((volunteer) => (
                    <tr key={volunteer._id}>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {volunteer.title}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {new Date(volunteer.deadline).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {volunteer.number_Need}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-2">
                          <p className="px-3 py-1 rounded-full text-[#F97300] bg-blue-100/60 text-xs font-semibold">
                            {volunteer.category}
                          </p>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <button
                            onClick={() => handelDelete(volunteer._id)}
                            className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none"
                          >
                            <RiDeleteBin6Line className="text-xl" />
                          </button>
                          <Link to={`/update/${volunteer._id}`}>
                            <button className="text-gray-500 transition-colors duration-200 hover:text-yellow-500 focus:outline-none">
                              <GrEdit className="text-xl" />
                            </button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="my-20">
        <MyRequest></MyRequest>
      </div>
    </div>
  );
};

export default MyPost;
