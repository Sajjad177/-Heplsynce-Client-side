import { Link, NavLink } from "react-router-dom";
import ThemeControl from "./ThemeControl";
import useAuth from "../Hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

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
          <ul className="menu menu-horizontal lg:text-lg px-1 lg:flex hidden">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/need-volunteer">Need Volunteer</NavLink>
            </li>

            {!user && (
              <button className="btn btn-secondary">
                <NavLink to="/login">Login</NavLink>
              </button>
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
                <Link to='/add-volunteer'>
                  <div>Add Volunteer</div>
                </Link>
                <li>
                  <Link to='/my-post'>Manage My Post</Link>
                </li>
                <li>
                  <Link to='/my-volunteerRequest'>My Volunteer Requested</Link>
                </li>
                <li className="mt-2">
                  <button onClick={logOut} className="bg-gray-200 block text-center">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
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
              <button className="btn btn-secondary">
                <NavLink to="/login">Login</NavLink>
              </button>
            )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
