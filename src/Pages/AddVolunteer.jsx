import { useState } from "react";
import useAuth from "../Hook/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddVolunteer = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = useAuth();
    const navigate = useNavigate()

  const handelAdd = async(e) => {
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const category = form.category.value
    const number_Need = parseInt(form.noNeed.value)
    const email = form.email.value
    const thumbnail = form.thumbnail.value
    const deadline = startDate
    const location = form.location.value
    const description = form.description.value

    const addData = {
        title,
        category,
        number_Need,
        thumbnail,
        deadline,
        location,
        description,
        contact:{
            email,
            name: user?.displayName,
            photo: user?.photoURL,
        }
    }

    console.log(addData)

    try{
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/volunteer`, addData)
        console.log(data)
        toast.success('Data add successfully')
        navigate('/my-post')
    }catch(error){
        console.log(error)
        toast.error('Something is wrong')
    }


  };

  return (
    <div>
      <div className="container m-auto py-10">
        <div className="shadow-lg p-5 border rounded-md">
          <div className="my-6 text-center pb-5">
            <h1>Add</h1>
          </div>
          <form onSubmit={handelAdd}>
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
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  required
                />
                <label className="mb-2 block font-semibold">Category</label>
                <select
                  name="category"
                  id=""
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
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
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  required
                />

                <div className="flex flex-col gap-2 ">
                  <label className="text-gray-700">Deadline</label>
                  {/* Date Picker Input Field */}
                  <DatePicker
                    className="border w-full p-2 rounded-md focus:outline-blue-400"
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
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  required
                />
              </div>
            </div>
            <label className="mb-2 block font-semibold">Description</label>
            <textarea
              className="w-full p-2 border rounded-md focus:outline-blue-400"
              type="text"
              placeholder="Enter short description"
              name="description"
              required
            ></textarea>
            <button className="btn w-full btn-success text-lg mt-5">
              Add Item
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVolunteer;
