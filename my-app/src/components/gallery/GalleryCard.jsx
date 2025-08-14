import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cardsGallery } from "../../constants";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GalleryCard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const skeletonCount = 12;

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="flex flex-wrap justify-center gap-10 pt-20 pb-20">
        {loading
          ? Array(skeletonCount)
              .fill()
              .map((_, index) => (
                <div
                  key={`skeleton-${index}`}
                  className="w-[320px] max-w-sm rounded overflow-hidden shadow-lg"
                >
                  <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                    <div>
                      <Skeleton height={200} width={320} />
                      <div className="p-6 bg-white/30" height={84} width={320}>
                        <Skeleton height={32} width={180} />
                      </div>
                    </div>
                  </SkeletonTheme>
                </div>
              ))
          : cardsGallery.map((card) => (
              <Link
                to={`/gallery/${card.id}`}
                key={card.id}
                className="w-[320px] max-w-sm rounded overflow-hidden shadow-lg"
              >
                <img
                  src={
                    card.images && card.images.length > 0
                      ? card.images[0]
                      : card.images
                  }
                  alt={card.title}
                  className="w-full h-[200px] object-cover"
                />{" "}
                <div className="bg-white/30 backdrop-blur-md p-6 font-poppins">
                  <div className="font-bold text-xl mb-2 text-white text-center">
                    {card.title}
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default GalleryCard;
