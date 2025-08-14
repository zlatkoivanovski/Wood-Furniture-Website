import React from "react";
import { useParams, Link } from "react-router-dom";
import { cardsGallery } from "../../constants";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GalleryCardDetails = () => {
  const { id } = useParams();
  const card = cardsGallery.find((card) => card.id === parseInt(id));

  // Fallback image if card or images are not available
  const fallbackImage = "/images/fallback.jpg";

  return (
    <div className="bg-customGray min-h-screen py-20 font-poppins">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            {card && card.images && card.images.length > 0 ? (
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                className="rounded-2xl"
              >
                {card.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`${card.title} ${index + 1}`}
                      className="w-full h-[400px] object-cover rounded-2xl"
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <img
                src={card?.image || fallbackImage}
                alt={card?.title || "GalleryDetailsImage"}
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            )}
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {card?.title || "Product Not Found"}
            </h2>
            <div className="flex flex-col mb-3 gap-y-3">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${card?.price || "N/A"}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {card?.stock || "N/A"}
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {card?.description || "No description available."}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row text-white">
            <div className="overflow-x-auto mt-10">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-white uppercase bg-white/30">
                  <tr>
                    <th scope="col" className="md:px-20 px-6 py-3">
                      Feature
                    </th>
                    <th scope="col" className="md:px-20 px-6 py-3">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white/20 text-white border-white/20">
                    <td className="md:px-20 px-6 py-4">Depth</td>
                    <td className="md:px-20 px-6 py-4">{card?.depth || "N/A"} cm</td>
                  </tr>
                  <tr className="border-b bg-white/20 text-white border-white/20">
                    <td className="md:px-20 px-6 py-4">Height</td>
                    <td className="md:px-20 px-6 py-4">{card?.height || "N/A"} cm</td>
                  </tr>
                  <tr className="border-b bg-white/20 text-white border-white/20">
                    <td className="md:px-20 px-6 py-4">Width</td>
                    <td className="md:px-20 px-6 py-4">{card?.width || "N/A"} cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCardDetails;