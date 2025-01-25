import Image from "next/image";
import japan from '@/public/Img/japan.jpg';
import { FaStar } from "react-icons/fa";

export default function Cards() {
    const Data = [
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
        {img: japan, location: "Tiny home in Shinano, Kamiminochi District, Japan", rating: '4.9', distance: "6,384 kilometers away", date: "30 Mar - 4 Apr", price: "38,229 night"},
    ];

    return (
        <div className="mx-4 md:mx-20 py-8">
            {/* Grid Layout for Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    Data.map((data, index) => (
                        <div key={index} className="rounded-md p-4">
                            {/* Image */}
                            <Image className="rounded-md w-full h-48 object-cover mb-4" src={data.img} alt="Japan" />
                            {/* Location and Rating */}
                            <div className="flex flex-row justify-between items-center mb-2">
                                <p className="text-base font-semibold">{data.location}</p>
                                <p className="flex flex-row items-center text-sm text-yellow-500">
                                    {data.rating} <FaStar />
                                </p>
                            </div>
                            {/* Distance */}
                            <p className="text-gray-500 text-sm">{data.distance}</p>
                            {/* Date */}
                            <p className="text-gray-500 text-sm">{data.date}</p>
                            {/* Price */}
                            <p className="font-semibold text-lg mt-2">{data.price}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
