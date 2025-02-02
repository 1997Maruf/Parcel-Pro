import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const NaveBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const link = (
    <>
      <li>
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
      {
        user? <p></p>:
        <li className="mr-16">
        <NavLink to="/login"> Login</NavLink>
      </li>}
    </>
  );
  return (
    <div className="navbar bg-base-100 lg:w-full sm:w-[485px]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">
          <span>PARCEL</span>
          <span>PRo</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="lg:mr-40">
              <div>
                <div className="navbar-start">
                  <div className="dropdown">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle"
                    >
                      <img alt="img" className="rounded-full " src={user?.photoURL} />
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                      </li>
                      <li>
                        <p>{user?.displayName} </p>
                      </li>
                      <li>
                        <button onClick={handelLogOut} className="btn mr-3">
                          LogOut
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
          <p></p>
            {/* <li className="mr-16">
              <NavLink to="/login"> Login</NavLink>
            </li> */}
          </>
        )}
      </div>
    </div>
  );
};

export default NaveBar;
