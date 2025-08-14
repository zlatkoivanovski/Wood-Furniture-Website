import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoesDresserCard from "../models/CardModels/ShoesDresserCard";
import DinnerTableCard from "../models/CardModels/DinnerTableCard";
import DressingTableCard from "../models/CardModels/DressingTableCard";
import ChairCard from "../models/CardModels/ChairCard";
import ShelfCard from "../models/CardModels/ShelfCard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cardsData } from "../../constants";

const CustomizationCard = () => {
  const models = [
    ShoesDresserCard,
    DinnerTableCard,
    DressingTableCard,
    ChairCard,
    ShelfCard,
  ];

  const getModelById = (id) => {
    const modelIndex = (id - 1) % models.length;
    const SelectedModel = models[modelIndex];
    return SelectedModel ? <SelectedModel /> : null;
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const skeletonCount = 8;

  return (
    <div className="flex flex-wrap justify-center gap-10 pt-20 pb-20">
      {loading
        ? Array(skeletonCount)
            .fill()
            .map((_, index) => (
              <div
                key={`skeleton-${index}`}
                // className="w-[320px] max-w-sm rounded overflow-hidden shadow-lg "
                // className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-sm"
              >
                <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
                  <div>
                    <Skeleton height={378} width={384} />
                    <div className="p-6 bg-white/30 rounded-b" height={84} width={384}>
                      <Skeleton height={26} width={304} className="mb-10" />
                      <Skeleton height={26} width={304} />
                      <Skeleton height={26} width={304} />
                      <Skeleton height={26} width={304} />
                      <Skeleton height={26} width={304} />
                      <Skeleton height={26} width={304} />
                    </div>
                  </div>
                </SkeletonTheme>
              </div>
            ))
        : cardsData.map((card) => (
            <Link
              to={`/card/${card.id}`}
              key={card.id}
              className="max-w-sm rounded overflow-hidden shadow-lg op"
            >
              {getModelById(card.id)}
              <div>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-white/30 backdrop-blur-md p-6 group font-poppins">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 text-white">
                        {card.title}
                      </div>
                      <p className="text-white/80 text-base">
                        {card.description}
                      </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                      {card.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="inline-block bg-white/20 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
    </div>
  );
};

export default CustomizationCard;
