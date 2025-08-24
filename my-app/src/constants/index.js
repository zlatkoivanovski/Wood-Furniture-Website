const cardsData = [
  {
    id: 1,
    title: "Shoes Dresser",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    tags: ["photography", "travel", "winter"],
  },
  {
    id: 2,
    title: "Dinner Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    tags: ["photography", "travel", "winter"],
  },
  {
    id: 3,
    title: "Dressing Table",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    tags: ["photography", "travel", "winter"],
  },
  {
    id: 4,
    title: "Chair",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    tags: ["photography", "travel", "winter"],
  },
  {
    id: 5,
    title: "Wardrobe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    tags: ["photography", "travel", "winter"],
  },
  {
    id: 6,
    title: "The Coldest Sunset",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    tags: ["photography", "travel", "winter"],
  },
  {
    id: 7,
    title: "The Coldest Sunset",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    tags: ["photography", "travel", "winter"],
  },
  {
    id: 8,
    title: "The Coldest Sunset",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    image: "https://placehold.co/600x400",
    tags: ["photography", "travel", "winter"],
  },
];

const cardsGallery = [
  {
    id: 1,
    title: "Shoes Dresser",
    price: "100.00",
    stock: "In Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/kitchen1_1.jpg",
      "/images/kitchen1_2.jpg",
      "/images/kitchen1_3.jpg",
    ],
    depth: "10",
    height: "200",
    width: "170",
  },
  {
    id: 2,
    title: "Dinner Table",
    price: "250.00",
    stock: "In Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/kitchen2_1.jpg",
      "/images/kitchen2_2.jpg",
      "/images/kitchen2_3.jpg",
    ],
    depth: "12",
    height: "75",
    width: "180",
  },
  {
    id: 3,
    title: "Dressing Table",
    price: "180.00",
    stock: "Out of Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/Untitled.jpg",
      "/images/wardrobe1_1.jpg",
      "/images/wardrobe1_2.jpg",
      "/images/wardrobe1_3.jpg",
    ],
    depth: "8",
    height: "150",
    width: "120",
  },
  {
    id: 4,
    title: "Chair",
    price: "75.00",
    stock: "In Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/kitchen3_1.jpg",
      "/images/kitchen3_2.jpg",
      "/images/kitchen3_3.jpg",
      "/images/kitchen3_4.jpg",
    ],
    depth: "6",
    height: "90",
    width: "45",
  },
  {
    id: 5,
    title: "Wardrobe",
    price: "320.00",
    stock: "In Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/wardrobe2_1.jpg",
      "/images/wardrobe2_2.jpg",
      "/images/wardrobe2_3.jpg",
      "/images/wardrobe2_4.jpg",
    ],
    depth: "20",
    height: "210",
    width: "160",
  },
  {
    id: 6,
    title: "The Coldest Sunset",
    price: "210.00",
    stock: "Limited Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/wardrobe3_1.jpg",
      "/images/wardrobe3_2.jpg",
      "/images/wardrobe3_3.jpg",
    ],
    depth: "10",
    height: "100",
    width: "100",
  },
  {
    id: 7,
    title: "The Coldest Sunset",
    price: "210.00",
    stock: "Limited Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/kitchen4_1.jpg",
      "/images/kitchen4_2.jpg",
      "/images/kitchen4_3.jpg",
    ],
    depth: "10",
    height: "100",
    width: "100",
  },
  {
    id: 8,
    title: "The Coldest Sunset",
    price: "210.00",
    stock: "Limited Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/tvstand1_1.jpg",
      "/images/tvstand1_2.jpg",
      "/images/tvstand1_3.jpg",
    ],
    depth: "10",
    height: "100",
    width: "100",
  },
  {
    id: 9,
    title: "Wardrobe",
    price: "320.00",
    stock: "In Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/kitchen5_2.jpg",
      "/images/kitchen5_1.jpg",
      "/images/kitchen5_3.jpg",
    ],
    depth: "20",
    height: "210",
    width: "160",
  },
  {
    id: 10,
    title: "The Coldest Sunset",
    price: "210.00",
    stock: "Limited Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/kitchen6_1.jpg",
      "/images/kitchen6_2.jpg",
      "/images/kitchen6_3.jpg",
    ],
    depth: "10",
    height: "100",
    width: "100",
  },
  {
    id: 11,
    title: "The Coldest Sunset",
    price: "210.00",
    stock: "Limited Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/tvstand2_1.jpg",
      "/images/tvstand2_2.jpg",
      "/images/tvstand2_3.jpg",
    ],

    depth: "10",
    height: "100",
    width: "100",
  },
  {
    id: 12,
    title: "The Coldest Sunset",
    price: "210.00",
    stock: "Limited Stock",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    images: [
      "/images/kitchen7_1.jpg",
      "/images/kitchen7_2.jpg",
      "/images/kitchen7_3.jpg",
    ],
    depth: "10",
    height: "100",
    width: "100",
  },
];

const testimonials = [
  {
    text: `"We absolutely love our custom kitchen cabinets! The 3D tool helped us pick the perfect walnut finish, and the craftsmanship is stunning. The team was professional and made the process so easy. Highly recommend!"`,
  },
  {
    text: `"The custom bookshelf fits perfectly in our living room. The attention to detail is amazing. We will definitely order again!"`,
  },
  {
    text: `"Fantastic experience from start to finish. The team listened to our ideas and delivered exactly what we wanted. Thank you!"`,
  },
];


export { cardsData, cardsGallery, testimonials };
