import { IProduct, IInput } from "../Interfaces";

export const products: IProduct[] = [
  {
    id: "10",
    title: "Canon EOS R5",
    description:
      "Unleash your creativity with the Canon EOS R5, a professional mirrorless camera that sets new standards in photography and videography. With a 45MP full-frame sensor and 8K video recording capabilities, the EOS R5 delivers stunning image quality and incredible detail. The advanced autofocus system ensures sharp and accurate focus, even in fast-paced situations. Whether you're capturing breathtaking landscapes or shooting high-action sports, the Canon EOS R5 is the ultimate tool for capturing your vision.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CDpkoI7gLfyOXSFL4fxq0FtYzNo1TfQl2w&s",
    price: 85000,
    colors: ["#000000", "#A9A9A9"],
    category: {
      name: "Cameras",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CDpkoI7gLfyOXSFL4fxq0FtYzNo1TfQl2w&s",
    },
  },

  {
    id: "11",
    title: "LG OLED C3 55-inch",
    description:
      "Immerse yourself in stunning visuals with the LG OLED C3 55-inch TV. Featuring 4K resolution and AI-powered picture enhancement, this TV delivers breathtaking image quality with vibrant colors and deep contrasts. The sleek design and ultra-thin bezels make it a stylish addition to any living space. Whether you're watching movies, gaming, or streaming your favorite shows, the LG OLED C3 offers an unparalleled viewing experience that will leave you in awe.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPQ5wPEU-a44U2nYZlzL0YRhLIFuxxkkoMw&s",
    price: 40000,
    colors: ["#000000", "#C0C0C0"],
    category: {
      name: "Electronics",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPQ5wPEU-a44U2nYZlzL0YRhLIFuxxkkoMw&s",
    },
  },

  {
    id: "12",
    title: "PS5 Digital Edition",
    description:
      "Step into the next generation of gaming with the PS5 Digital Edition. This powerful gaming console features 4K ray tracing, delivering stunning visuals and realistic lighting effects. The ultra-fast SSD ensures quick load times and smooth gameplay, while the immersive 3D audio enhances your gaming experience. With a vast library of games and exclusive titles, the PS5 Digital Edition is the ultimate console for gamers who demand the best.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow2M1un17uI-ephUwwV_2RDVHxZIVf6G2mg&s",
    price: 25000,
    colors: ["#FFFFFF", "#000000"],
    category: {
      name: "Gaming",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow2M1un17uI-ephUwwV_2RDVHxZIVf6G2mg&s",
    },
  },

  {
    id: "21",
    title: "Samsung Galaxy S23 Ultra",
    description: "A flagship smartphone with a 200MP camera and S Pen support.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4JJfA86QTVzrwI6wHcluHK2nGB2ZEGNPug&s",
    price: 35000,
    colors: ["#000000", "#1E90FF"],
    category: {
      name: "Smartphones",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4JJfA86QTVzrwI6wHcluHK2nGB2ZEGNPug&s",
    },
  },

  {
    id: "14",
    title: "Dyson V15 Detect Vacuum",
    description:
      "Dyson V15 Detect is the most powerful cordless vacuum cleaner designed for deep cleaning with advanced laser dust detection and smart suction adjustments. Engineered for homes with pets and various floor types, it delivers superior performance with real-time dust tracking and automatic power optimization.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWhyxHg8q-Nsb1fUSGQN2DSCtyzX61iamfg&s",
    price: 12000,
    colors: ["#FF0000", "#808080"],
    category: {
      name: "Home Appliances",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWhyxHg8q-Nsb1fUSGQN2DSCtyzX61iamfg&s",
    },
  },

  {
    id: "22",
    title: "Sony WH-1000XM5",
    description:
      "Premium noise-canceling wireless headphones with superior sound.",
    imageURL:
      "https://www.soundphilereview.com/wp-content/uploads/2022/11/Sony-WH1000XM5-review-560x360.jpg",
    price: 8000,
    colors: ["#808080", "#000000"], // Gray, Black
    category: {
      name: "Headphones",
      imageURL:
        "https://www.soundphilereview.com/wp-content/uploads/2022/11/Sony-WH1000XM5-review-560x360.jpg",
    },
  },
  {
    id: "23",
    title: "MacBook Pro M2 16-inch",
    description:
      "Powerful Apple laptop with M2 chip and Liquid Retina display.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTh7AIsC_oQaWN0X2S3z-x-3MgayDbagOW2A&s",
    price: 75000,
    colors: ["#A9A9A9", "#C0C0C0"], // Dark Gray, Silver
    category: {
      name: "Laptops",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTh7AIsC_oQaWN0X2S3z-x-3MgayDbagOW2A&s",
    },
  },

  {
    id: "5",
    title: "Sony A7 IV Mirrorless Camera",
    description:
      "The Sony A7 IV is a full-frame mirrorless camera with a 33MP sensor and 4K video recording capabilities. It features advanced autofocus, in-body image stabilization, and a versatile lens system, making it a favorite among professional photographers and videographers.",
    imageURL:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg", // شغال
    price: 80000,
    colors: ["#000000", "#808080"], // Black, Gray
    category: {
      name: "Cameras",
      imageURL:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg", // شغال
    },
  },

  {
    id: "8",
    title: "Tesla Model 3 Performance",
    description:
      "The Tesla Model 3 Performance is a high-performance electric car featuring all-wheel drive, autopilot, and a 0-60 mph time of just 3.1 seconds. With its sleek design and cutting-edge technology, it’s a top choice for electric vehicle enthusiasts.",
    imageURL:
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg", // شغال
    price: 1600000,
    colors: ["#FFFFFF", "#000000", "#93c5fd"], // White, Black
    category: {
      name: "Cars",
      imageURL:
        "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg", // شغال
    },
  },
  {
    id: "9",
    title: "Rolex GMT-Master II",
    description:
      "The Rolex GMT-Master II is a luxury watch designed for travelers. It features a dual-time zone function, a durable Oyster case, and a sleek design. With its precision engineering and timeless style, it’s a symbol of sophistication.",
    imageURL:
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg", // شغال
    price: 250000,
    colors: ["#000000", "#FFD700"], // Black, Gold
    category: {
      name: "Watches",
      imageURL:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg", // شغال
    },
  },
];

export const InputData: IInput[] = [
  {
    type:'text',
    id:'title',
    label:'Title',
    name:'title'
  },
  {
    type:'text',
    id:'description',
    label:'Description',
    name:'description'
  },
  {
    type:'text',
    id:'imageURL',
    label:'Image URL',
    name:'imageURL'
  },
  {
    type:'text',
    id:'price',
    label:'Price',
    name:'price'
  },

];


export const defaultProduct :IProduct = {

  title:'',
  description:'',
  imageURL:'',
  price:'',
  colors:[],
  category:{
      name:'',
      imageURL:'',
  },

}