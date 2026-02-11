import { useState } from "react";
import user from '../assets/profile.png'
import { Link } from "react-router-dom";

const ProfileDropDown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onClick={() => setOpen(!open)}
    >
      {/* Profile Icon */}
      <img
        src={user}
        alt=""
        className="w-10 h-10 rounded-full cursor-pointer"
      />

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-xl py-4 px-5 z-50 flex flex-col">
          <Link to={'/profile'} className="font-semibold text-gray-800 cursor-pointer mb-3">
            My Profile
          </Link>
          <Link to={'/cart'} className="font-semibold text-gray-800 cursor-pointer mb-3">
            My Cart
          </Link>
          <Link className="font-semibold text-gray-800 cursor-pointer mb-3">
            Setting
          </Link>
          <Link className="font-semibold text-gray-800 cursor-pointer mb-3">
            Change Password
          </Link>
          <div className="h-px bg-gray-300 my-3"></div>
          <Link className="font-semibold text-gray-800 cursor-pointer">
            Logout
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
