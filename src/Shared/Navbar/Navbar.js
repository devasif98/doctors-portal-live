import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import { AuthContext } from "../../Context/AuthProvider";
import { useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  const menuItems = (
    <>
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={80} />
      <li className="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
        <Link to={"/"}>Home</Link>
      </li>
      <li className="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
        <Link to={"/about"}>About</Link>
      </li>
      <li className="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
        <Link to={"/appointment"}>Appointment</Link>
      </li>

      <li className="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
        <Link to={"/contact"}>Contact Us</Link>
      </li>
      {user?.uid && (
        <li className="relative font-medium text-indigo-600 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-indigo-600 before:transition hover:before:scale-100">
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
      )}
      <li>
        <div className="sm:flex sm:gap-4">
          {user?.uid ? (
            <Link
              onClick={handleLogout}
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            >
              Log Out
            </Link>
          ) : (
            <Link
              to={"/login"}
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
            >
              Login
            </Link>
          )}
        </div>
      </li>
    </>
  );
  return (
    <div>
      <header aria-label="Site Header" className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="dropdown dropdown-left">
              <label
                htmlFor="dashboard-drawer"
                tabIndex={0}
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
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-16 p-2 shadow bg-base-100 rounded-box w-52"
              ></ul>
            </div>

            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-teal-600 text-xl" href="/">
                <div className="flex items-center">
                  <div>
                    <img className="w-12" src={logo} alt="" />
                  </div>
                  <div className="">Doctors Portal</div>
                </div>
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Site Nav" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">{menuItems}</ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="dropdown dropdown-left">
                  <label tabIndex={0} className="lg:hidden">

                    <div className="avatar mt-3">
                      <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        {
                          user ?
                          <img src={user.photoURL} alt=""/>
                          :
                          <img src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-512.png" alt="" />
                        }
                      </div>
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="menu menu-compact dropdown-content mt-16 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    {menuItems}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
