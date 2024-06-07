import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiShoppingBasket } from "react-icons/ci";
import { TbBrandBooking } from "react-icons/tb";
import { FaHome, FaUsers } from "react-icons/fa";

const Dashboard = () => {
  const isAdmin = true;
  return (
    <div className="flex">
      <div className="w-64  min-h-screen ml-28 bg-green-500">
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">
                 
                  <CgProfile /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myParcel">
                  <CiShoppingBasket /> My Parcel
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookParcel">
                  <TbBrandBooking /> Book Parcel
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/myProfile">
                
                  <CgProfile /> My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myParcel">
                  <CiShoppingBasket /> My Parcel
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookParcel">
                  <TbBrandBooking /> Book Parcel
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/">
              <FaHome /> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
