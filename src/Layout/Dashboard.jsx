import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { CiShoppingBasket } from "react-icons/ci";
import { TbBrandBooking } from "react-icons/tb";
import { FaHome, FaUsers } from "react-icons/fa";
import UseRole from "../hooks/UseRole/UseRole";
import { GiStorkDelivery } from "react-icons/gi";
import { MdReviews } from "react-icons/md";



const Dashboard = () => {
 const [role] = UseRole();
  return (
    <div className="flex">
      <div className="  min-h-screen  bg-green-500">
        <ul className="menu">
          {role === "admin" && (
            <>
              <li>
                <NavLink to="/dashboard/allParcel">
                 
                  <CgProfile /> All Parcel
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers />
                  All Users
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/AllDeliveryMen">
                <GiStorkDelivery />
                 All Delivery Men
                </NavLink>
              </li>
            </>
          ) 
          } 
          {role === "delivery"  && (
            <>
              <li>
                <NavLink to="/dashboard/mydeliverylist">
                 
                <GiStorkDelivery /> My Delivery List
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reviews">
                 
                <MdReviews />My Reviews 
                </NavLink>
              </li>
            </>
          ) } 
          {role === "user" && (
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
