import { IProduct, IInput } from "../Interfaces";

import { v4 as uuid } from 'uuid';
export const products: IProduct[] = [
  {
    id:uuid(),
    title: "Canon EOS R5",
    description:
      "Unleash your creativity with the Canon EOS R5, a professional  camera that sets new standards in photography and . With a 45MP full-frame sensor and 8K video recording capabilities, the EOS R5 delivers stunning image quality and incredible detail. The advanced autofocus system ensures sharp and accurate focus, even in fast-paced situations. Whether you're capturing breathtaking landscapes or shooting high-action sports, the Canon EOS R5 is the ultimate tool for capturing your vision.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CDpkoI7gLfyOXSFL4fxq0FtYzNo1TfQl2w&s",
    price: '85000',
    colors: ["#a855f7",
  '#2563eb',
  '#84D2C5',],
    category: {
      name: "Cameras",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CDpkoI7gLfyOXSFL4fxq0FtYzNo1TfQl2w&s",
    },
  },

  {
    id:uuid(),

    title: "LG OLD C3 55-inch",
    description:
      "Immerse yourself in stunning visuals with the LG OLD C3 55-inch TV. Featuring 4K resolution and AI-powered picture enhancement, this TV delivers breathtaking image quality with vibrant colors and deep contrasts. The sleek design and ultra-thin bezels make it a stylish addition to any living space. Whether you're watching movies, gaming, or streaming your favorite shows, the LG OLD C3 offers an unparalleled viewing experience that will leave you in awe.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPQ5wPEU-a44U2nYZlzL0YRhLIFuxxkkoMw&s",
    price: '40000',
    colors: ['#13005A',
  '#A31ACB',
  '#FF6E31',],
    category: {
      name: "Electronics",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPQ5wPEU-a44U2nYZlzL0YRhLIFuxxkkoMw&s",
    },
  },

  {
    id:uuid(),

    title: "PS5 Digital Edition",
    description:
      "Step into the next generation of gaming with the PS5 Digital Edition. This powerful gaming console features 4K ray tracing, delivering stunning visuals and realistic lighting effects. The ultra-fast SSD ensures quick load times and smooth gameplay, while the immersive 3D audio enhances your gaming experience. With a vast library of games and exclusive titles, the PS5 Digital Edition is the ultimate console for gamers who demand the best.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow2M1un17uI-ephUwwV_2RDVHxZIVf6G2mg&s",
    price: '25000',
    colors: ['#13005A',
  '#A31ACB','#84D2C5'],
    category: {
      name: "Gaming",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow2M1un17uI-ephUwwV_2RDVHxZIVf6G2mg&s",
    },
  },

  {
    id:uuid(),

    title: "Samsung Galaxy S23 Ultra",
    description: "A flagship smartphone with a 200MP camera and S Pen support.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4JJfA86QTVzrwI6wHcluHK2nGB2ZEGNPug&s",
    price: '35000',
    colors: ["#A31ACB", "#84D2C5"],
    category: {
      name: "Smartphones",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4JJfA86QTVzrwI6wHcluHK2nGB2ZEGNPug&s",
    },
  },

  {
    id:uuid(),

    title: "Dyson V15 Detect Vacuum",
    description:
      "Dyson V15 Detect is the most powerful cordless vacuum cleaner designed for deep cleaning with advanced laser dust detection and smart suction adjustments. Engineered for homes with pets and various floor types, it delivers superior performance with real-time dust tracking and automatic power optimization.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWhyxHg8q-Nsb1fUSGQN2DSCtyzX61iamfg&s",
    price: '12000',
    colors: ['#A31ACB',
  '#FF6E31',],
    category: {
      name: "Home Appliances",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFWhyxHg8q-Nsb1fUSGQN2DSCtyzX61iamfg&s",
    },
  },

  {
    id:uuid(),

    title: "Sony WH-1000XM5",
    description:
      "Premium noise-canceling wireless headphones with superior sound.",
    imageURL:
      "https://www.soundphilereview.com/wp-content/uploads/2022/11/Sony-WH1000XM5-review-560x360.jpg",
    price: '8000',
    colors: ['#645CBB',
  '#1F8A70',
  '#820000',], 
    category: {
      name: "Headphones",
      imageURL:
        "https://www.soundphilereview.com/wp-content/uploads/2022/11/Sony-WH1000XM5-review-560x360.jpg",
    },
  },
  {
    id:uuid(),

    title: "MacBook Pro M2 16-inch",
    description:
      "Powerful Apple laptop with M2 chip and Liquid Retina display.",
    imageURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTh7AIsC_oQaWN0X2S3z-x-3MgayDbagOW2A&s",
    price: '75000',
    colors: ['#645CBB',
  '#1F8A70',
  '#820000',],
    category: {
      name: "Laptops",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTh7AIsC_oQaWN0X2S3z-x-3MgayDbagOW2A&s",
    },
  },

  {
    id:uuid(),

    title: "Sony A7 IV  Camera",
    description:
      "The Sony A7 IV is a full-frame  camera with a 33MP sensor and 4K video recording capabilities. It features advanced autofocus, in-body image stabilization, and a versatile lens system, making it a favorite among professional photographers and .",
    imageURL:
      "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg", // 
    price: '80000',
    colors: ['#84D2C5',
  '#13005A',
  '#A31ACB',], 
    category: {
      name: "Cameras",
      imageURL:
        "https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg", // 
    },
  },

  {
    id:uuid(),

    title: "Tesla Model 3 Performance",
    description:
      "The Tesla Model 3 Performance is a high-performance electric car featuring all-wheel drive, autopilot, and a 0-60 mph time of just 3.1 seconds. With its sleek design and cutting-edge technology, it’s a top choice for electric vehicle enthusiasts.",
    imageURL:
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg", // 
    price: '1600000',
    colors: ['#FF6E31',
  '#3C2A21',
  '#6C4AB6',
  '#CB1CBD',],
    category: {
      name: "Cars",
      imageURL:
        "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg", // 
    },
  },
  {
    id:uuid(),

    title: "Rolex GMT-Master II",
    description:
      "The Rolex GMT-Master II is a luxury watch designed for travelers. It features a dual-time zone function, a durable Oyster case, and a sleek design. With its precision engineering and timeless style, it’s a symbol of sophistication.",
    imageURL:
      "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg", // 
    price: '250000',
    colors: ["#000000", "#FFD700"], // Black, Gold
    category: {
      name: "Watches",
      imageURL:
        "https://images.pexels.com/photos/125779/pexels-photo-125779.jpeg", // 
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

export const colorsData:string[]=[
  "#a855f7",
  '#2563eb',
  '#84D2C5',
  '#13005A',
  '#A31ACB',
  '#FF6E31',
  '#3C2A21',
  '#6C4AB6',
  '#CB1CBD',
  '#000',
  '#645CBB',
  '#1F8A70',
  '#820000',
  '#FF0032'
]