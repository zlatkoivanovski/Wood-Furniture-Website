import React from "react";
import { useParams, Link } from "react-router-dom";
import ShoesDresserDetails from "./models/CardModelsDetails/ShoesDresserDetails";
import DinnerTableDetails from "./models/CardModelsDetails/DinnerTableDetails";
import {cardsData} from "../constants";

const CardDetail = () => {
  const models = [ShoesDresserDetails, DinnerTableDetails];
  const { id } = useParams();

  const getModelById = (id) => {
    const modelIndex = (id - 1) % models.length;
    const SelectedModel = models[modelIndex];
    return SelectedModel ? <SelectedModel /> : null;
  };

  const card = cardsData.find((card) => card.id === parseInt(id));

  return (
    <div className="min-h-screen bg-customGray flex items-center justify-center py-20">
      {getModelById(card.id)}
    </div>
  );
};

export default CardDetail;
