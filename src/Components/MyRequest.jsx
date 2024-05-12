import { useEffect, useState } from "react";
import useAuth from "../Hook/useAuth";
import axios from "axios";

const MyRequest = () => {
  const { user } = useAuth();
  const [reqVolunteers, setReqVolunteers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (user?.email) {
        try {
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/request/${user.email}`
          );
          setReqVolunteers(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    getData();
  }, [user?.email]);

  console.log("come from my request", reqVolunteers);

  return (
    <div>
      <section className="container px-4 mx-auto pt-12">
        <div className="flex items-center gap-x-3">
          <h2 className="text-lg font-medium text-gray-800 ">My Request</h2>

          <span className="px-3 py-1 text-xs bg-[#0A6847] rounded-full text-white">
            {reqVolunteers.length}
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-sm text-left rtl:text-right text-gray-500 font-semibold"
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
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 ">
                    {reqVolunteers.map((volunteer) => (
                      <tr key={volunteer._id}>
                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {volunteer.title}
                        </td>

                        <td className="px-4 py-4 text-sm text-gray-500  whitespace-nowrap">
                          {new Date(volunteer.deadline).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                          <div className="flex items-center gap-x-2">
                            <p
                              className="px-3 py-1 rounded-full  bg-[#99BC85]/90
                               text-xs font-semibold"
                            >
                              {volunteer.category}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-[#C40C0C]/85 text-white">
                            <h2 className="text-sm font-normal ">
                              {volunteer.status}
                            </h2>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyRequest;
