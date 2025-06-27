import React from "react";
import { MdOutlineArrowRight, MdOutlineArrowLeft } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import pImage from "../../assets/p-image.png";
import pImage1 from "../../assets/p-image1.png";
import pImage2 from "../../assets/p-image2.png";
import pImage3 from "../../assets/p-image3.png";
import pImage4 from "../../assets/p-image4.png";
import pImage5 from "../../assets/p-image5.png";
import pImage6 from "../../assets/p-image6.png";
import pImage7 from "../../assets/p-image7.png";

const NewArrivalsSection = () => {
  const newArrivals = [
    {
      _id: "1",
      name: "ShelfStand",
      new: true,
      price: 55.99,
      image: pImage,
    },

    {
      _id: "2",
      name: "Cloth Stand",
      new: true,
      price: 224.99,
      image: pImage1,
    },

    {
      _id: "3",
      name: "Bamboo Basket",
      new: true,
      price: 24.99,
      image: pImage2,
    },

    {
      _id: "4",
      name: "Console PS4 + Pad",
      new: true,
      price: 512.99,
      image: pImage3,
    },

    {
      _id: "5",
      name: "Wireless Headphone",
      new: true,
      price: 65.99,
      image: pImage4,
    },

    {
      _id: "6",
      name: "Living Room Chair ",
      new: true,
      price: 120.99,
      image: pImage5,
    },

    {
      _id: "7",
      name: "Beiege Table Lamp",
      new: true,
      price: 98.99,
      image: pImage6,
    },

     {
      _id: "8",
      name: "Towel Pack",
      new: true,
      price: 52.99,
      image: pImage7,
    },
  ];

  return (
    <div className="container mx-auto px-2 mt-10 overflow-x-scroll">
      {/* Top Head */}
      <div className="flex justify-between items-center lg:text-3xl font-semibold">
        <div>
          <h1>New Arrival</h1>
        </div>
        {/* Scroll Buttons */}
        <div>
          {/* Left Buttone */}
          <button>
            <MdOutlineArrowLeft className="size-10" />
          </button>

          {/* Right Button */}
          <button>
            <MdOutlineArrowRight className="size-10" />
          </button>
        </div>
      </div>

      {/* Low Head */}
      {newArrivals.map((products) => (

        <div className="flex items-start gap-4 mt-10">
        {/* Card 1 */}
        <div className="">
          {/* Top Card */}
          <div className="h-auto w-[280px] overflow-hidden flex flex-col relative bg-sec p-6 transition-all group duration-300">
            {/* Heart Button */}
            <div className="flex justify-between items-center">
              <h3 className="bg-blue-500 text-white py-1 px-2 rounded-md text-sm absolute top-4 left-4 shadow-md">
                NEW
              </h3>
              <button className=" absolute top-4 -right-10  group-hover:right-4 group-hover:opacity-100 transition-all duration-300 z-10 bg-white p-2 rounded-full shadow-md">
                <FaRegHeart className="size-5" />
              </button>
            </div>

            {/* Card Image */}
            <div>
              <img
                src={pImage}
                alt="New Arrivals Image"
                className=" py-8 object-cover w-full h-72 transition-transform duration-500 group-hover:scale-110 rounded-lg "
              />
            </div>

            {/* Add to cart button */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-8 opacity-0 group-hover:translate-y-1 group-hover:opacity-100 transition-all duration-500 z-10 w-full px-6">
              <button className=" bg-black text-white py-2 px-4 rounded-lg w-full font-medium  tracking-wide hover:bg-blue-500 transition duration-300">
                <p>Add to cart</p>
              </button>
            </div>
          </div>
          {/* Bottom Card */}
          <div className="flex flex-col mt-2">
            {/* Star Rating  */}
            <div className="flex items-center">
              <IoMdStar className="size-5" />
              <IoMdStar className="size-5" />
              <IoMdStar className="size-5" />
              <IoMdStarHalf className="size-5" />
              <IoMdStarOutline className="size-5" />
            </div>
            <h4 className="font-semibold">Sony - WH-1000M5 Chair</h4>
            <p className="text-gray-500 font-medium">$ 250.00</p>
          </div>
        </div>
      </div>

      ))}
    </div>
  );
};

export default NewArrivalsSection;
