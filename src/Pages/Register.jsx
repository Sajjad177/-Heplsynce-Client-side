import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
// import axios from "axios";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";

  const { createUser, updateUserProfile, setUser } = useAuth();

  const handelRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;

    if (password.length < 6) {
      toast.error("Give minimum 6 password");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Give minimum one Uppercase Character");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Give minimum one Uppercase Character");
      return;
    }

    try {
      const result = await createUser(email, password);
      console.log(result);
      await updateUserProfile(name, photo);
      setUser({ ...result?.user, photoURL: photo, displayName: name });
      navigate(from, { replace: true });
      toast.success("Sign In successfully");
    } catch {
      toast.error("Invalid Check again");
    }
  };

  return (
    <div>
      <Helmet>
        <title>HelpSync / Register</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-20">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-xl text-center text-gray-600 font-bold lg:text-3xl mb-10">
              Create your account
            </p>
            <form onSubmit={handelRegister}>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="name"
                >
                  Username
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  name="name"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="photo"
                >
                  Photo URL
                </label>
                <input
                  id="photo"
                  autoComplete="photo"
                  name="photo"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                  required
                />
              </div>
              <div className="mt-4">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 "
                  htmlFor="LoggingEmailAddress"
                >
                  Email Address
                </label>
                <input
                  id="LoggingEmailAddress"
                  autoComplete="email"
                  name="email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  required
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label
                    className="block mb-2 text-sm font-medium text-gray-600 "
                    htmlFor="loggingPassword"
                  >
                    Password
                  </label>
                </div>

                <input
                  id="loggingPassword"
                  autoComplete="current-password"
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#FF0080] rounded-lg hover:bg-[#FF0080]/70 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign Up
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>
              <Link
                to="/login"
                className="text-xs uppercase  hover:underline text-red-500"
              >
                <span className="text-black">Have an account !</span> sign in
              </Link>
              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </div>
          <div
            className="hidden bg-cover bg-center lg:block lg:w-1/2"
            style={{
              backgroundImage: `url('https://i.ibb.co/S5954gK/register-2.jpg')`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
