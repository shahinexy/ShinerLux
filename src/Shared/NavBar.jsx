import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../AuthProvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const NavBar = () => {
  const { user, LogOutUser } = useContext(authContext);
  const navLinks = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-secondary rounded-none border border-secondary"
              : "text-white"
          }
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to={"/updateProfile"}
            className={({ isActive, isPending }) =>
              isPending
                ? "text-white"
                : isActive
                ? "bg-secondary rounded-none border border-secondary"
                : "text-white"
            }
          >
            Update Profile
          </NavLink>
        </li>
      )}
        <li>
          <NavLink
            to={"/userProfile"}
            className={({ isActive, isPending }) =>
              isPending
                ? "text-white"
                : isActive
                ? "bg-secondary rounded-none border border-secondary"
                : "text-white"
            }
          >
            User Profile
          </NavLink>
        </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white"
              : isActive
              ? "bg-secondary rounded-none border border-secondary"
              : "text-white"
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive, isPending }) =>
            isPending
              ? "text-white"
              : isActive
              ? "bg-secondary rounded-none border border-secondary"
              : "text-white"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav className="container mx-auto md:px-4 text-white">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden pl-0"
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
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-xl dropdown-content mt-3 z-50 p-2 shadow bg-primary rounded-box w-52"
              >
                {navLinks}

                {user ? (
                  <button
                    onClick={() => LogOutUser()}
                    className="my-3 px-5 cursor-pointer py-2 font-semibold bg-secondary border border-secondary text-white hover:bg-primary hover:border-white"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link
                    to={"/login"}
                    className="px-5 cursor-pointer py-2 font-semibold bg-secondary border border-secondary text-white hover:bg-primary hover:border-white"
                  >
                    Login
                  </Link>
                )}
              </ul>
            </div>
            <Link to={"/"} className="font-bold btn-ghost text-xl">
              Shiner<span className="text-secondary">Lux</span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-2 font-semibold">
              {navLinks}
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            {user ? (
              <>
                <div className="relative ">
                  <div className=" absolute right-0 h-full w-10 opacity-0 hover:w-52  hover:opacity-100 duration-300 transition-all">
                    <p className=" pr-14 text-end pt-2">
                      {user?.displayName || "Unknown"}
                    </p>
                  </div>
                  {user.photoURL ? (
                    <>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    </>
                  ) : (
                    <FaUserCircle className="text-4xl" />
                  )}
                </div>
                <button
                  onClick={() => LogOutUser()}
                  className="md:inline-block hidden px-5 cursor-pointer py-2 font-semibold bg-secondary border border-secondary text-white hover:bg-primary hover:border-white"
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link
                to={"/login"}
                className="px-5 cursor-pointer py-2 font-semibold bg-secondary border border-secondary text-white hover:bg-primary hover:border-white"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
