import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import axios from "axios";

const BeAVolunteerPage = () => {
  const volunteer = useLoaderData();
  // console.log(volunteer);
  const {
    _id,
    title,
    thumbnail,
    description,
    category,
    location,
    number_Need,
    deadline,
    contact,
  } = volunteer || {};
  const [startDate, setStartDate] = useState(new Date(deadline));
  const { user } = useAuth();

  const handelRequest = async (e) => {
    e.preventDefault();
    const form = e.target;
    const DataId = _id;
    const email = user?.email;
    const deadline = startDate;
    const suggestion = form.suggestion.value;
    const status = form.status.value;

    const requestData = {
      DataId,
      email,
      deadline,
      title,
      thumbnail,
      description,
      number_Need,
      category,
      suggestion,
      status,
      organizer_email: contact?.email,
      organizer_name: contact?.name,
    };

    console.log(requestData);

    try {
      const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/request`, requestData);
      console.log(data);
      toast.success("Request submitted successfully");
    } catch (error) {
      console.error("Error submitting request:", error);
      toast.error("Failed to submit request. Please try again.");
    }


  };

  return (
    <div>
      <div className="container m-auto py-10">
        <div className="shadow-lg p-5 border rounded-md">
          <div className="my-6 text-center pb-5">
            <h1 className="text-3xl font-bold">Request</h1>
          </div>
          <form onSubmit={handelRequest}>
            <div className="flex gap-8">
              <div className="flex-1 space-y-3">
                <label className="mb-2 block font-semibold">
                  {" "}
                  Organizer Name
                </label>
                <input
                  type="text"
                  placeholder="enter name"
                  id="name"
                  name="name"
                  defaultValue={contact?.name}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  readOnly
                />
                <label className="mb-2 block font-semibold">
                  {" "}
                  Volunteer Name
                </label>
                <input
                  type="text"
                  placeholder="enter name"
                  id="name"
                  name="name"
                  defaultValue={user?.displayName}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  readOnly
                />
                <label className="mb-2 block font-semibold">Title</label>
                <input
                  type="text"
                  placeholder="enter title"
                  id="title"
                  name="title"
                  defaultValue={title}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  readOnly
                />
                <label className="mb-2 block font-semibold">Category</label>
                <select
                  name="category"
                  id=""
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  defaultValue={category}
                  type="text"
                  readOnly
                  placeholder="select category"
                >
                  <option> Select Category</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="social_service">social service</option>
                  <option value="Animal_welfare">Animal welfare</option>
                </select>
                <label className="mb-2 block font-semibold">
                  Number of need
                </label>
                <input
                  type="text"
                  placeholder="Number of need"
                  id="NoNeed"
                  name="noNeed"
                  defaultValue={number_Need}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  readOnly
                />
                <label className="mb-2 block font-semibold">Status</label>
                <input
                  type="text"
                  placeholder="Status"
                  id="NoNeed"
                  name="status"
                  defaultValue="request"
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                />
              </div>
              {/* right side */}
              <div className="flex-1 space-y-3">
                <label className="mb-2 block font-semibold">
                  Organizer Email
                </label>
                <input
                  type="text"
                  placeholder="enter email"
                  id="email"
                  name="email"
                  defaultValue={contact?.email}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  readOnly
                />
                <label className="mb-2 block font-semibold">
                  Volunteer Email
                </label>
                <input
                  type="text"
                  placeholder="enter email"
                  id="email"
                  name="email"
                  defaultValue={user?.email}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  readOnly
                />
                <label className="mb-2 block font-semibold">Thumbnail</label>
                <input
                  type="text"
                  placeholder="Enter url"
                  id="thumbnail"
                  name="thumbnail"
                  defaultValue={thumbnail}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  readOnly
                />

                <div className="flex flex-col gap-2 ">
                  <label className="text-gray-700">Deadline</label>

                  <DatePicker
                    className="border p-2 w-full rounded-md"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    readOnly
                  />
                </div>
                <label className="mb-2 block font-semibold">Location</label>
                <input
                  type="text"
                  placeholder="enter location"
                  id="price"
                  name="location"
                  defaultValue={location}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  readOnly
                />
                <label className="mb-2 block font-semibold">Suggestion</label>
                <input
                  type="text"
                  placeholder="Suggestion"
                  id="suggestion"
                  name="suggestion"
                  //   defaultValue={location}
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  required
                />
              </div>
            </div>
            <label className="mb-2 block font-semibold">Description</label>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-blue-400"
              type="text"
              defaultValue={description}
              placeholder="Enter short description"
              name="description"
              readOnly
            ></textarea>
            <button className="btn w-full btn-success text-lg mt-5">
              Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BeAVolunteerPage;
