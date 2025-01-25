'use client'
import { CiGlobe, CiSearch } from "react-icons/ci";
import { FaAirbnb, FaUserCircle } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import Slider from "../slider";
import Cards from "../cards";
import React, { useState } from "react";

export default function Header() {
    const [activeTab, setActiveTab] = useState('Stays'); // State to toggle between Stays and Experiences
    const [ProfileToggle, setProfileToggle] = useState(false)
    const handleToggle = () => {
        setProfileToggle(!ProfileToggle);
    };
    return (
        <>
            <header className="grid max-sm:hidden">
                <div className="flex flex-row justify-between items-center px-20 py-5">
                    {/* Logo */}
                    <div className="text-3xl w-52 font-semibold flex flex-row items-center gap-2 text-red-600 cursor-pointer">
                        <FaAirbnb />
                        <h1>airbnb</h1>
                    </div>

                    {/* Navigation */}
                    <div className="flex flex-row font-medium gap-10 text-xl">
                        <h2
                            className={`${activeTab === 'Stays' ? 'text-black' : 'text-gray-400'} cursor-pointer`}
                            onClick={() => setActiveTab('Stays')}
                        >
                            Stays
                        </h2>
                        <h2
                            className={`${activeTab === 'Experiences' ? 'text-black' : 'text-gray-400'} cursor-pointer`}
                            onClick={() => setActiveTab('Experiences')}
                        >
                            Experiences
                        </h2>
                    </div>

                    {/* Right Options */}
                    <div className="flex flex-row gap-3 items-center">
                        <button className="hover:bg-gray-100 text-base font-medium rounded-full py-2 px-4">
                            Airbnb your home
                        </button>
                        <div className="text-xl font-medium">
                            <CiGlobe />
                        </div>
                        <button onClick={handleToggle} className="relative flex flex-row text-3xl gap-3 border rounded-full hover:shadow-lg px-5 py-3">
                            <IoReorderThreeOutline />
                            <FaUserCircle className="text-gray-500" />
                        </button>

                    </div>

                    {/* Dropdown Menu */}
                    {ProfileToggle && (
                        <div className="absolute text-gray-600 right-10 mt-72 font-medium w-48 bg-white rounded-md shadow-lg p-2">
                            <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                SignUp
                            </div>
                            <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                Login
                            </div>
                            <hr />
                            <div>
                            <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                Airbnb Your Home
                            </div>
                            <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                Host an Experience
                            </div>
                            <div className="p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                Help Centre
                            </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Search Section */}
                <div className="flex justify-center py-5">

                    <div className="rounded-full justify-between border w-2/3 flex shadow-md">
                        {/* Stays Search */}
                        <div className="flex flex-col rounded-full hover:bg-gray-100 py-2 px-8">
                            <label htmlFor="">Where</label>
                            <input
                                type="text"
                                placeholder="Search destinations"
                                className="outline-none bg-transparent hover:bg-gray-100"
                            />
                        </div>
                        {/* Stays */}
                        {activeTab === 'Stays' && (
                            <div className="flex flex-row">
                                <div className="flex flex-col rounded-full hover:bg-gray-100 py-2 px-4">
                                    <label htmlFor="">Check in</label>
                                    <input
                                        type="text"
                                        placeholder="Add Dates"
                                        className="outline-none bg-transparent hover:bg-gray-100"
                                    />
                                </div>
                                <div className="flex flex-col rounded-full hover:bg-gray-100 py-2 px-4">
                                    <label htmlFor="">Check out</label>
                                    <input
                                        type="text"
                                        placeholder="Add Dates"
                                        className="outline-none bg-transparent hover:bg-gray-100"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Experiences */}
                        {activeTab === 'Experiences' && (
                            <div className="flex flex-col rounded-full hover:bg-gray-100 py-2 px-20">
                                <label htmlFor="">Date</label>
                                <input
                                    type="text"
                                    placeholder="Add Dates"
                                    className="outline-none bg-transparent hover:bg-gray-100"
                                />
                            </div>
                        )}
                        <div className="flex flex-row">
                            <div className="flex flex-col rounded-full hover:bg-gray-100 py-2 px-10">
                                <label htmlFor="">Who</label>
                                <input
                                    type="text"
                                    placeholder="Add Guests"
                                    className="outline-none bg-transparent hover:bg-gray-100"
                                />
                            </div>
                            <div className="flex w-16 items-center">
                                <button className="rounded-full text-2xl bg-red-500 p-3">
                                    <CiSearch className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>



                </div>

                <hr />
            </header>

            {/* Mobile Header */}
            <header className="flex flex-row mt-7 mx-4 py-4 justify-center items-center text-xl sm:hidden border rounded-full shadow-md gap-2">
                <CiSearch />
                <input type="text" className="outline-none bg-transparent" placeholder="Search" />
            </header>

            {/* Slider and Cards */}
            <Slider />
            <Cards />
        </>
    );
}
