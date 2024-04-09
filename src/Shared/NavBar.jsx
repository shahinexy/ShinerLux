import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
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
    </>
  );
  return (
    <div>
      <nav className="container mx-auto px-4 text-white">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navLinks}
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
          <div className="navbar-end">
            <a className="px-5 cursor-pointer py-2 font-semibold bg-secondary border-secondary text-white">
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
