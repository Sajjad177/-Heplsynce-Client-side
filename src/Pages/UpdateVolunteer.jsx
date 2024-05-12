import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../Hook/useAuth";
import { useLoaderData, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const UpdateVolunteer = () => {
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
  const [startDate, setStartDate] = useState(new Date(deadline));
  const { user } = useAuth();
  const navigate = useNavigate()
  

  const handelUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const number_Need = parseInt(form.noNeed.value);
    const email = form.email.value;
    const thumbnail = form.thumbnail.value;
    const deadline = startDate;
    const location = form.location.value;
    const description = form.description.value;

    const updateData = {
      title,
      category,
      number_Need,
      thumbnail,
      deadline,
      location,
      description,
      contact: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };

    try{
        const {data} = await axios.put(`${import.meta.env.VITE_API_URL}/volunteer/${_id}`, updateData)
        console.log(data)
        toast.success('Job data update successfully')
        navigate('/my-post')
        
      }catch(error){
        console.log(error)
        toast.error(error.massage)
      }
    
  };

  return (
    <div>
      <div className="container m-auto py-10">
        <div className="shadow-lg p-5 border rounded-md">
          <div className="my-6 text-center pb-5">
            <h1 className="text-3xl font-bold">Update Your data</h1>
          </div>
          <form onSubmit={handelUpdate}>
            <div className="flex gap-8">
              <div className="flex-1 space-y-3">
                <label className="mb-2 block font-semibold"> Name</label>
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
                  required
                />
                <label className="mb-2 block font-semibold">Category</label>
                <select
                  name="category"
                  id=""
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  defaultValue={category}
                  type="text"
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
                  required
                />
              </div>
              {/* right side */}
              <div className="flex-1 space-y-3">
                <label className="mb-2 block font-semibold">Email</label>
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
                  required
                />

                <div className="flex flex-col gap-2 ">
                  <label className="text-gray-700">Deadline</label>

                  <DatePicker
                    className="border p-2 w-full rounded-md"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
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
              required
            ></textarea>
            <button className="btn w-full btn-success text-lg mt-5">
              Update Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateVolunteer;
