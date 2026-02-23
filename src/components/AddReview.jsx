import React from "react";
import { FaStar } from "react-icons/fa6";
import Button from "./Button";
import img from "../assets/imgtitle5.png";
const AddReview = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl uppercase text-[rgba(51,55,64,1)] text-center my-10">
        Add Review
      </h1>
      <div className="flex items-center justify-center my-10">
        <div className="flex w-[90%]">
          <div className="left flex  flex-col border-r-2 pr-40">
            <h1 className="font-bold text-2xl my-3">Review</h1>
            <h3 className="font-bold text-lg my-3">Rating</h3>
            <div className="flex items-center gap-3">
              <FaStar size={30} className="text-gray-300" />
              <FaStar size={30} className="text-gray-300" />
              <FaStar size={30} className="text-gray-300" />
              <FaStar size={30} className="text-gray-300" />
              <FaStar size={30} className="text-gray-300" />
            </div>
            <h4 className="font-bold text-lg mt-10">Review</h4>
            <textarea
              name=""
              id=""
              rows={5}
              cols={50}
              className="p-2 rounded-2xl my-5 border"
              placeholder="Write about product"
            />
            <Button title={"Add Review"} />
          </div>
          <div className="right pl-10">
            <div className="flex gap-6 items-center my-3">
              <div className="bg-[rgba(47,47,47,0.1)] rounded-3xl flex items-center justify-center w-[30%]">
                <img src={img} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-[rgba(47,47,47,1)] text-[10px] uppercase">
                  chappal
                </p>
                <h1 className="font-bold text-[10px] uppercase">
                  Denim Peshawari Chappal (NDL <br /> x KP Shop Collaboration)
                </h1>
                <p className="text-[10px] uppercase">
                  <span>Size: </span>
                  <span className="font-bold">38</span>
                </p>
                <p className="text-[10px] uppercase">
                  <span>Color: </span>
                  <span>khaki</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
