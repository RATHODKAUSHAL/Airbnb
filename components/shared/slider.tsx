import { BiSolidCastle } from "react-icons/bi";
import { BsFillImageFill } from "react-icons/bs";
import { GiCampingTent, GiIsland, GiTreehouse } from "react-icons/gi";
import { GrTicket } from "react-icons/gr";
import { HiHomeModern, HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { MdCabin } from "react-icons/md";
import { TbBeach, TbUfo } from "react-icons/tb";
import { Switch } from "../ui/switch";

export default function Slider() {
    return (
        <div className="grid grid-row-4 sm:grid-row-3 md:grid-row-3 lg:grid-row-4 gap-2 items-center justify-center mx-20 py-8">
            <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-10 gap-8">
                {/* Category Icons */}
                {[
                    { icon: <MdCabin />, label: "Cabin" },
                    { icon: <GrTicket />, label: "Icons" },
                    { icon: <BsFillImageFill />, label: "Amazing View" },
                    { icon: <TbBeach />, label: "Beachfront" },
                    { icon: <GiCampingTent />, label: "Camping" },
                    { icon: <GiIsland />, label: "Islands" },
                    { icon: <GiTreehouse />, label: "Treehouses" },
                    { icon: <HiHomeModern />, label: "Tiny Houses" },
                    { icon: <BiSolidCastle />, label: "Mansions" },
                    { icon: <TbUfo />, label: "OMG!" },
                ].map(({ icon, label }, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-center items-center transition-transform duration-300 hover:scale-110"
                    >
                        <div className="text-3xl text-gray-700 hover:text-red-500">
                            {icon}
                        </div>
                        <label className="mt-2 text-sm text-gray-500">{label}</label>
                    </div>
                ))}
            </div>

            {/* Filter and Toggle */}
            <div className="flex justify-center gap-6">
                {/* Filter Button */}
                <div className="flex items-center max-sm:hidden px-6 py-3 border rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <HiOutlineAdjustmentsHorizontal className="text-xl text-gray-600" />
                    <label className="ml-2 text-sm text-gray-600">Filter</label>
                </div>

                {/* Display Total Toggle */}
                <div className="flex items-center gap-2 px-6 py-3 border rounded-xl">
                    <label className="text-sm text-gray-600">Display total before taxes</label>
                    <Switch />
                </div>
            </div>
        </div>
    );
}
