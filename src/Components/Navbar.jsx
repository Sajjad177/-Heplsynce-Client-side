import { Link, NavLink } from "react-router-dom";
import ThemeControl from "./ThemeControl";
import useAuth from "../Hook/useAuth";
import { AiOutlineLogout } from "react-icons/ai";
import { ImMenu } from "react-icons/im";

const Navbar = () => {
  const { user, logOut } = useAuth();

  return (
    <div className="">
      <div className="navbar bg-[#CAF4FF]/50 shadow-sm container px-4 mx-auto rounded-md">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle lg:hidden"
          >
            <ImMenu className="text-3xl"></ImMenu>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-24"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/need-volunteer">Need Volunteer </NavLink>
            </li>
            {!user && (
              <Link to="/login">
                <button className="btn btn-outline lg:ml-2  btn-info">
                  Login
                </button>
              </Link>
            )}
          </ul>
        </div>
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <img className="w-auto h-7" src="" alt="" />
            <span className="font-bold lg:text-3xl text-xl font-shadows">
              HelpSync
            </span>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal lg:text-lg lg:px-1 lg:flex hidden">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/need-volunteer">Need Volunteer</NavLink>
            </li>

            {!user && (
              <Link to="/login">
                <button className="btn btn-outline lg:ml-2  btn-info">
                  Login
                </button>
              </Link>
            )}
          </ul>
          <div className="mr-5">
            <ThemeControl></ThemeControl>
          </div>
          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={`${user.displayName}`}
              >
                <div className="w-12 rounded-full " title="">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <Link to="/add-volunteer">
                  <li>Add Volunteer</li>
                </Link>
                <li>
                  <Link to="/my-post">Manage My Post</Link>
                </li>
                <li>
                  <Link to="/my-volunteerRequest">My Volunteer Requested</Link>
                </li>
                <li className="mt-2">
                  <button
                    onClick={logOut}
                    className="bg-gray-200 text-center flex"
                  >
                    <AiOutlineLogout className="text-lg"></AiOutlineLogout>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
