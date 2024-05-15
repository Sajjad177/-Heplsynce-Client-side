import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hook/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn, user, signInWithGoogle } = useAuth();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [navigate, user]);

  const from = location.state || "/";

  const handelGoogle = async () => {
    try {
      const result = await signInWithGoogle();
        await axios.post(
        `${import.meta.env.VITE_API_URL}/jwt`,
        { email: result?.user?.email },
        { withCredentials: true }
      );
      toast.success("Sign In successfully");
      navigate(from, { replace: true });
    } catch  {
      toast.error("Invalid Please Check again");
    }
  };

  const handelLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      console.log(result);
      toast.success("Sign In successfully");
      navigate(from, { replace: true });
    } catch {
      toast.error("Invalid Please Check again");
    }
  };

  return (
    <div>
      <Helmet>
        <title>HelpSync / Login</title>
      </Helmet>
      <div className="flex justify-center items-center min-h-[calc(100vh-250px)]">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl ">
          <div
            className="hidden bg-cover bg-center lg:block lg:w-1/2"
            style={{
              backgroundImage: `url('https://i.ibb.co/y8mvkQK/login.jpg')`,
            }}
          ></div>
          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <p className="mt-3 text-xl font-semibold text-center text-gray-600 ">
              Welcome back!
            </p>
            <p className="text-center lg:text-5xl text-2xl text-[#FF0080] font-bold font-shadows mb-6">
              HelpSync
            </p>
            <form onSubmit={handelLogin}>
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
                  Sign In
                </button>
              </div>
            </form>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                or login with email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <div
              onClick={handelGoogle}
              className="flex cursor-pointer items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg   hover:bg-gray-50 "
            >
              <div className="px-4 py-2">
                <FcGoogle className="text-3xl"></FcGoogle>
              </div>

              <span className="w-5/6 px-4 py-3 font-bold text-center">
                Sign in with Google
              </span>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  md:w-1/4"></span>
              <Link
                to="/register"
                className="text-xs text-red-500 uppercase  hover:underline cursor-pointer"
              >
                <span className="text-black">New here</span> sign up
              </Link>
              <span className="w-1/5 border-b  md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
