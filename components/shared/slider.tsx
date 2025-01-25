'use client'
import React, { useRef } from "react";
import { MdCabin } from "react-icons/md";
import { GrTicket } from "react-icons/gr";
import { BsFillImageFill } from "react-icons/bs";
import { TbBeach, TbUfo } from "react-icons/tb";
import { GiCampingTent, GiIsland, GiTreehouse } from "react-icons/gi";
import { HiHomeModern, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { BiSolidCastle } from "react-icons/bi";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Switch } from "../ui/switch";

export default function SlideBarIcons() {
    const sliderRef = useRef<HTMLDivElement | null>(null);
    // Scroll left
    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -700, behavior: "smooth" });
        }
    };

    // Scroll right
    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 700, behavior: "smooth" });
        }
    };

    return (
        <div className="flex flex-row  max-sm:flex-col items-center mx-4 sm:mx-8 lg:mx-20 py-8">
            {/* Sliding Icons */}
            <div className="relative w-[72%]">
                {/* Left Button */}
                <button
                    onClick={scrollLeft}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-xl"
                > 
                    <AiOutlineLeft className="text-xl text-gray-700" />
                </button>


                {/* Icon Slider */}
                <div
                    ref={sliderRef}
                    className="w-full overflow-x-hidden overflow-y-hidden flex gap-4 items-center justify-start px-4 sm:px-8"
                >
                    {[
                        { icon: <MdCabin />, label: "Cabin" },
                        { icon: <GrTicket />, label: "Icons" },
                        { icon: <BsFillImageFill />, label: "Amazing View" },
                        { icon: <TbBeach />, label: "Beachfront" },
                        { icon: <GiCampingTent />, label: "Camping" },
                        { icon: <GiIsland />, label: "Islands" },
                        { icon: <GiIsland />, label: "Islands" },
                        { icon: <GiIsland />, label: "Islands" },
                        { icon: <GiIsland />, label: "Islands" },
                        { icon: <GiIsland />, label: "Islands" },
                        { icon: <GiIsland />, label: "Islands" },
                        { icon: <GiTreehouse />, label: "Treehouses" },
                        { icon: <HiHomeModern />, label: "Tiny Houses" },
                        { icon: <BiSolidCastle />, label: "Mansions" },
                        { icon: <TbUfo />, label: "OMG!" },
                    ].map(({ icon, label }, index) => (
                        <div
                            key={index}
                            className="flex flex-col justify-center items-center min-w-[80px] sm:min-w-[100px] transition-transform duration-300 hover:scale-110"
                        >
                            <div className="text-3xl text-gray-700 hover:text-red-500">
                                {icon}
                            </div>
                            <label className="mt-2 text-sm text-gray-500 text-center">{label}</label>
                        </div>
                    ))}
                </div>

                {/* Right Button */}
                <button
                    onClick={scrollRight}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md"
                >
                    <AiOutlineRight className="text-xl text-gray-700" />
                </button>
            </div>

            {/* Filter and Toggle */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 w-full px-4">
                {/* Filter Button */}
                <div className="flex items-center max-sm:hidden justify-center px-6 py-3 border rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <HiOutlineAdjustmentsHorizontal className="text-xl text-gray-600" />
                    <label className="ml-2 text-sm text-gray-600">Filter</label>
                </div>

                {/* Display Total Toggle */}
                <div className="flex items-center justify-center gap-2 px-6 py-3 border rounded-xl">
                    <label className="text-sm text-gray-600 text-center">
                        Display total before taxes
                    </label>
                    <Switch />
                </div>
            </div>
        </div>
    );
};

