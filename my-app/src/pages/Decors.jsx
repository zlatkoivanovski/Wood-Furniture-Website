import React from "react";

const Decors = () => {
  const decors = [
    {
      id: 1,
      title: "H1367 ST40",
      description: "Light Nature Casela Oak",

      image:
        "https://cdn.egger.com/img/pim/8854529048606/8854529081374/AR_16_9.webp?width=512&srcext=png",
    },
    {
      id: 2,
      title: "H1385 ST40",
      description: " Natural Casella Oak",
      image:
        "https://cdn.egger.com/img/pim/8854530293790/8854530326558/AR_16_9.webp?width=512&srcext=png",
    },
    {
      id: 3,
      title: "H1386 ST40",
      description: "Brown Casella Oak",
      image:
        "https://cdn.egger.com/img/pim/8854530687006/8854530719774/AR_16_9.webp?width=512&srcext=png",
    },
    {
      id: 4,
      title: "H1384 ST40",
      description: "White Casella Oak",
      image:
        "https://cdn.egger.com/img/pim/8854529900574/8854529933342/AR_16_9.webp?width=512&srcext=png",
    },
    {
      id: 5,
      title: "H1369 ST40",
      description: "Marone Casella Oak",
      image:
        "https://cdn.egger.com/img/pim/8854529376286/8854529409054/AR_16_9.webp?width=512&srcext=png",
    },

     {
      id: 6,
      title: "H1176 ST37",
      description: "White Halifax Oak",
      image:
        "https://cdn.egger.com/img/pim/8854364979230/8854522626078/AR_16_9.webp?width=512&srcext=png",
    },
  ];

  return (
    <div className="bg-customGray">
      <div className="w-full max-w-[1440px] mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Decor Collection
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center">
          {decors.map((decor) => (
            <div
              key={decor.id}
              className="w-[320px] bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <img
                src={decor.image}
                alt={decor.title}
                className="w-full h-[200px] object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {decor.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {decor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Decors;
