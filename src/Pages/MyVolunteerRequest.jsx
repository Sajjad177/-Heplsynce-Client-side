import { MdCancel } from "react-icons/md";
import useAuth from "../Hook/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { MdOutlineSearchOff } from "react-icons/md";
import { Helmet } from "react-helmet-async";

const MyVolunteerRequest = () => {
  const { user } = useAuth();
  const [MyRequest, setReqVolunteers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (user?.email) {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/my-volunteerReq/${user.email}`
          );
          setReqVolunteers(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    getData();
  }, [user?.email]);

  const handelCancel = async (id) => {
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
            `${import.meta.env.VITE_API_URL}/my-volunteerReq/${id}`
          );
          console.log(data);
          setReqVolunteers((prevVolunteers) =>
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
    <div>
      <Helmet>
        <title>HelpSync / my volunteer request</title>
      </Helmet>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center justify-center gap-x-3 mb-10">
          <h2 className="text-lg lg:text-3xl font-medium text-gray-800">
            My Volunteer Request
          </h2>
          <span className="px-3 py-1 text-xs text-white bg-[#FF6500]/90 rounded-full ">
            {MyRequest.length}
          </span>
        </div>

        {MyRequest.length === 0 ? (
          <div className="mt-10">
            <p className="text-center text-2xl text-gray-500 flex items-center justify-center">
              No volunteer requests found.
              <MdOutlineSearchOff className="text-4xl ml-2 text-center"></MdOutlineSearchOff>
            </p>
          </div>
        ) : (
          <div className="flex flex-col mt-6">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 px-4 text-sm font-semibold text-left rtl:text-right text-gray-500"
                        >
                          <div className="flex items-center gap-x-3">
                            <span>Title</span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                        >
                          <span>Deadline</span>
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500"
                        >
                          Suggestion
                        </th>
                        <th className="px-4 py-3.5 text-sm font-semibold text-left rtl:text-right text-gray-500">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200 ">
                      {MyRequest.map((data) => (
                        <tr key={data._id}>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {data.title}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                            {new Date(data.deadline).toLocaleDateString()}
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <div className="flex items-center gap-x-2 font-bold">
                              <p className="px-3 py-1 rounded-full bg-[#99BC85]/90 text-xs">
                                {data.category}
                              </p>
                            </div>
                          </td>
                          <td
                            title={data.suggestion}
                            className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap"
                          >
                            <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2">
                              <h2 className="text-sm font-normal ">
                                {data.suggestion.substring(0, 30)}...
                              </h2>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm whitespace-nowrap">
                            <button
                              onClick={() => handelCancel(data._id)}
                              title="Mark Complete"
                              className="text-gray-500 transition-colors duration-200 hover:text-red-500 focus:outline-none disabled:cursor-not-allowed"
                            >
                              <MdCancel className="text-3xl text-[#C40C0C]" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MyVolunteerRequest;
