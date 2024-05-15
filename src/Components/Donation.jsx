import useAuth from "../Hook/useAuth";
import { FaPaypal } from "react-icons/fa";
import { SiVisa } from "react-icons/si";
import { SiMastercard } from "react-icons/si";

const Donation = () => {
  const { user } = useAuth();
  return (
    <div>
      <div className="lg:mt-10 border-b-2 border-dashed pb-8">
        <h1 className="lg:text-5xl text-2xl font-bold
         text-center font-shadows">Gift Your Donate</h1>
         <p className="text-center lg:mt-5 font-shadows lg:text-2xl">Together we can make a different</p>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:my-20 my-10">
        <div>
          {/* -------------form--------------- */}
          <div className="text-center py-5 bg-orange-400">
            <h1 className="text-3xl font-bold">Your Details</h1>
          </div>
          <div className="">
            <div className="shadow-lg p-5 border rounded-md">
              <form onSubmit={""}>
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
                    <label className="mb-2 block font-semibold">Address</label>
                    <input
                      type="text"
                      placeholder="enter address"
                      id="price"
                      name="address"
                      className="w-full p-2 border rounded-md focus:outline-blue-400"
                      required
                    />
                    <label className="mb-2 block font-semibold">
                      Phone Number
                    </label>
                    <input
                      type="number"
                      placeholder="enter Phone number"
                      id="price"
                      max={13}
                      name="address"
                      className="w-full p-2 border rounded-md focus:outline-blue-400"
                      required
                    />
                  </div>
                </div>
                <label className="mb-2 block font-semibold">Comment</label>
                <textarea
                  className="w-full p-2 border rounded-md focus:outline-blue-400"
                  type="text"
                  placeholder="Enter short Comment"
                  name="Comment"
                  required
                ></textarea>
                <button className="btn w-full btn-success text-lg mt-5">
                  Donate
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="">
          <div className="text-center py-5 bg-orange-400">
            <h1 className="text-3xl font-bold">Your Donation</h1>
          </div>
          <h1 className="text-2xl my-8 font-semibold">Donation Type : </h1>
          <div className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              Once off Gift
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-black dark:text-gray-300">
              Regular Monthly gift
            </label>
          </div>
          <h1 className="text-2xl my-8 font-semibold">Donation Amount : </h1>
          <div className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              50$
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-black dark:text-gray-300">
              100$
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              500$
            </label>
          </div>
          <div className="flex items-center mb-9">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="ms-2 text-sm font-medium text-black dark:text-gray-300">
              1000$
            </label>
          </div>
          <div>
            <div className="text-center py-5 bg-orange-400">
              <h1 className="text-3xl font-bold">Credit Card</h1>
            </div>
            <div className="mt-5 flex lg:flex-row flex-col">
              <button
                type="button"
                className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
              >
                <FaPaypal className="text-lg mr-2"></FaPaypal>
                Check out with PayPal
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-800 dark:bg-white dark:border-gray-700 dark:text-gray-900 dark:hover:bg-gray-200 me-2 mb-2"
              >
                <SiVisa className="text-2xl mr-2"></SiVisa>
                Pay with Visa
              </button>
              <button
                type="button"
                className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
              >
                <SiMastercard className="text-2xl mr-2"></SiMastercard>
                Pay with MasterCard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
