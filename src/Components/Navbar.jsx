import { NavLink } from "react-router-dom";
import ThemeControl from "./ThemeControl";
import useAuth from "../Hook/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <div className="container m-auto ">
      <div className="navbar bg-[#CAF4FF] shadow-sm container px-4 mx-auto">
        <div className="flex-1">
          <div className="flex gap-2 items-center">
            <img className="w-auto h-7" src="" alt="" />
            <span className="font-bold">HelpSync</span>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal lg:text-lg px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {!user && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
          </ul>
          <ThemeControl></ThemeControl>
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
                <li>
                  <div>Add Volunteer</div>
                </li>
                <li>
                  <div>Manage My Post</div>
                </li>
                <li>
                  <div>My Volunteer Requested</div>
                </li>
                <li className="mt-2">
                  <button className="bg-gray-200 block text-center">
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
