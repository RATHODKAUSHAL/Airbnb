"use client";
import React, { useState } from "react";

export default function Footer() {
    // Define the type of tabs
    type TabKey =
        | "Popular"
        | "Arts & Culture"
        | "Outdoors"
        | "Mountains"
        | "Beach"
        | "Unique Styles"
        | "Categories"
        | "Things to do";

    const [activeBar, setActiveBar] = useState<TabKey>("Popular");

    // Define tab data with proper typing
    const tabData: Record<TabKey, { label: string; description: string }[]> = {
        Popular: Array(12).fill({ label: "Paris", description: "Iconic landmarks" }),
        "Arts & Culture": Array(12).fill({ label: "Rome", description: "Ancient history" }),
        Outdoors: Array(12).fill({ label: "Banff", description: "Stunning landscapes" }),
        Mountains: Array(12).fill({ label: "Aspen", description: "Skiing paradise" }),
        Beach: Array(12).fill({ label: "Maldives", description: "Tropical getaway" }),
        "Unique Styles": Array(12).fill({ label: "Tokyo", description: "Modern and traditional" }),
        Categories: Array(12).fill({ label: "Dubai", description: "Luxury experiences" }),
        "Things to do": Array(12).fill({ label: "Sydney", description: "Outdoor activities" }),
    };

    return (
        <div className="bg-gray-100">
            <div className="mx-4 sm:mx-10 lg:mx-20 py-10">
                <div>
                    <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                        Inspiration for future getaways
                    </h1>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 sm:gap-10 py-5">
                    {Object.keys(tabData).map((tab) => (
                        <div key={tab}>
                            <label
                                onClick={() => setActiveBar(tab as TabKey)}
                                className={`${
                                    activeBar === tab
                                        ? "text-black border-black border-b"
                                        : "text-gray-400"
                                } cursor-pointer py-2 text-sm sm:text-base`}
                            >
                                {tab}
                            </label>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 py-5 border-b border-gray-400">
                    {tabData[activeBar].map((item, index) => (
                        <div key={index} className="space-y-1">
                            <label className="font-medium text-base">{item.label}</label>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/*  */}
                <div className="py-5 flex flex-row gap-60 border-b border-gray-400">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-60 gap-y-10">
                        {/* support */}
                    <div className="flex flex-col">
                        <h1 className="font-bold text-base">Support</h1>
                        <div className="flex flex-col font-semibold gap-y-2 py-3 text-gray-600">
                        <a href="#" className="hover:text-black text-gray-500">Help Center</a>
                        <a href="#" className="hover:text-black text-gray-500">Air Cover</a>
                        <a href="#" className="hover:text-black text-gray-500">Anti-discrimination</a>
                        <a href="#" className="hover:text-black text-gray-500">Disability support</a>
                        <a href="#" className="hover:text-black text-gray-500">Cancellation options</a>
                        <a href="#" className="hover:text-black text-gray-500">Report neighbourhood concern</a>
                        </div>
                    </div>
                    {/* support */}
                    <div className="flex flex-col">
                        <h1 className="font-bold text-base">Hosting</h1>
                        <div className="flex flex-col font-semibold gap-y-2 py-3 text-gray-600">
                        <a href="#" className="hover:text-black text-gray-500">Airbnb your home</a>
                        <a href="#" className="hover:text-black text-gray-500">AirCover for Hosts</a>
                        <a href="#" className="hover:text-black text-gray-500">Hosting resources</a>
                        <a href="#" className="hover:text-black text-gray-500">Community forum</a>
                        <a href="#" className="hover:text-black text-gray-500">Hosting responsibly</a>
                        <a href="#" className="hover:text-black text-gray-500">Join a free Hosting class</a>
                        <a href="#" className="hover:text-black text-gray-500">Find a co‑host</a>
                        </div>
                    </div>
                    {/* support */}
                    <div className="flex flex-col">
                        <h1 className="font-bold text-base">Airbnb</h1>
                        <div className="flex flex-col font-semibold gap-y-2 py-3 text-gray-600">
                        <a href="#" className="hover:text-black text-gray-500">Newsroom</a>
                        <a href="#" className="hover:text-black text-gray-500">New features</a>
                        <a href="#" className="hover:text-black text-gray-500">Careers</a>
                        <a href="#" className="hover:text-black text-gray-500">Investors</a>
                        <a href="#" className="hover:text-black text-gray-500">Airbnb.org emergency stays</a>
                        </div>
                    </div>
                    </div>
                </div>

                {/* copyright section */}
                <div className="pt-10">
                    <div>
                        <p className="font-semibold text-gray-400">© 2025 Airbnb-clone, Inc.·PrivacyTermsSitemapCompany details</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
