import { IProduct } from "../Interfaces";
export const products: IProduct[] = [
  /*
    

   [
  {
    "id": "1",
    "title": "Apple iPhone 15 Pro Max",
    "description": "Experience the pinnacle of smartphone technology with the Apple iPhone 15 Pro Max. Featuring the revolutionary A17 Pro chip, this device delivers unparalleled performance and efficiency. The sleek titanium design not only enhances durability but also adds a touch of elegance. With its advanced camera system, you can capture stunning photos and videos in any lighting condition. Whether you're gaming, streaming, or multitasking, the iPhone 15 Pro Max offers a seamless and immersive experience.",
    "imageURL": "https://images.unsplash.com/photo-1691160664395-c6ac6be576c5",
    "price": 45000,
    "colors": ["#000000", "#808080"],
    "category": {
      "name": "Smartphones",
      "imageURL": "https://images.unsplash.com/photo-1691160664395-c6ac6be576c5"
    }
  },
  {
    "id": "2",
    "title": "Samsung Galaxy Z Fold 5",
    "description": "Step into the future with the Samsung Galaxy Z Fold 5, a foldable smartphone that redefines versatility. The 7.6-inch AMOLED display offers vibrant colors and sharp details, perfect for both work and play. With S Pen support, you can take notes, sketch, and navigate with precision. The powerful processor ensures smooth performance, whether you're multitasking or running demanding applications. The Galaxy Z Fold 5 is the ultimate device for those who demand more from their smartphone.",
    "imageURL": "https://images.unsplash.com/photo-1694568739926-efc4e7f32cc3",
    "price": 50000,
    "colors": ["#1E90FF", "#000000"],
    "category": {
      "name": "Smartphones",
      "imageURL": "https://images.unsplash.com/photo-1694568739926-efc4e7f32cc3"
    }
  },
  {
    "id": "3",
    "title": "Dell XPS 15 9530",
    "description": "The Dell XPS 15 9530 is a powerhouse laptop designed for professionals and creatives alike. Equipped with an Intel Core i9 processor and a stunning OLED display, this laptop delivers exceptional performance and visual clarity. Whether you're editing videos, designing graphics, or running complex simulations, the XPS 15 handles it all with ease. The sleek, lightweight design makes it perfect for on-the-go productivity, while the long-lasting battery ensures you stay powered throughout the day.",
    "imageURL": "https://images.unsplash.com/photo-1555617981-43d52686c303",
    "price": 60000,
    "colors": ["#C0C0C0", "#A9A9A9"],
    "category": {
      "name": "Laptops",
      "imageURL": "https://images.unsplash.com/photo-1555617981-43d52686c303"
    }
  },
  {
    "id": "4",
    "title": "ASUS ROG Strix G16",
    "description": "Dominate the gaming arena with the ASUS ROG Strix G16. This gaming laptop is equipped with an RTX 4070 GPU and a 240Hz refresh rate display, ensuring smooth and responsive gameplay. The powerful processor and advanced cooling system keep the laptop running at peak performance, even during intense gaming sessions. With its aggressive design and customizable RGB lighting, the ROG Strix G16 is as stylish as it is powerful, making it the ultimate choice for gamers.",
    "imageURL": "https://images.unsplash.com/photo-1611003228941-6744ec81f36b",
    "price": 75000,
    "colors": ["#000000", "#FF0000"],
    "category": {
      "name": "Laptops",
      "imageURL": "https://images.unsplash.com/photo-1611003228941-6744ec81f36b"
    }
  },
  {
    "id": "5",
    "title": "Sony A7 IV Mirrorless Camera",
    "description": "Capture the world in stunning detail with the Sony A7 IV Mirrorless Camera. Featuring a 33MP full-frame sensor, this camera delivers exceptional image quality and clarity. The advanced autofocus system ensures sharp and accurate focus, even in challenging conditions. With 4K video recording capabilities, you can create professional-quality videos with ease. Whether you're a professional photographer or an enthusiast, the Sony A7 IV is the perfect tool to bring your creative vision to life.",
    "imageURL": "https://images.unsplash.com/photo-1526178614533-50fcb163195e",
    "price": 80000,
    "colors": ["#000000", "#808080"],
    "category": {
      "name": "Cameras",
      "imageURL": "https://images.unsplash.com/photo-1526178614533-50fcb163195e"
    }
  },
  {
    "id": "6",
    "title": "Nike Air Max 270",
    "description": "Step up your style and comfort with the Nike Air Max 270. These running shoes feature Nike's iconic Air cushioning technology, providing unparalleled comfort and support with every step. The bold design and vibrant color options make a statement, while the breathable materials keep your feet cool and comfortable. Whether you're hitting the gym or the streets, the Nike Air Max 270 is the perfect blend of fashion and function.",
    "imageURL": "https://images.unsplash.com/photo-1562183241-b937e95585a8",
    "price": 3500,
    "colors": ["#FFFFFF", "#000000"],
    "category": {
      "name": "Shoes",
      "imageURL": "https://images.unsplash.com/photo-1562183241-b937e95585a8"
    }
  },
  {
    "id": "7",
    "title": "Adidas Predator Edge 23",
    "description": "Take your game to the next level with the Adidas Predator Edge 23. These professional football boots are designed for precision and control, featuring advanced technology that enhances your touch and accuracy on the ball. The lightweight construction and snug fit provide optimal comfort and agility, allowing you to perform at your best. Whether you're a seasoned pro or an aspiring player, the Adidas Predator Edge 23 will give you the edge you need to dominate the field.",
    "imageURL": "https://images.unsplash.com/photo-1600185365929-d59f6b3d563b",
    "price": 4200,
    "colors": ["#FF0000", "#000000"],
    "category": {
      "name": "Shoes",
      "imageURL": "https://images.unsplash.com/photo-1600185365929-d59f6b3d563b"
    }
  },
  {
    "id": "8",
    "title": "Tesla Model 3 Performance",
    "description": "Experience the future of driving with the Tesla Model 3 Performance. This high-performance electric car combines cutting-edge technology with sleek design, offering an exhilarating driving experience. With all-wheel drive and autopilot capabilities, the Model 3 Performance delivers unmatched safety and convenience. The instant torque and rapid acceleration make every drive thrilling, while the long-range battery ensures you can go the distance. Step into the Tesla Model 3 Performance and redefine what it means to drive.",
    "imageURL": "https://images.unsplash.com/photo-1605296867424-33e1f2d268b5",
    "price": 1600000,
    "colors": ["#FFFFFF", "#000000"],
    "category": {
      "name": "Cars",
      "imageURL": "https://images.unsplash.com/photo-1605296867424-33e1f2d268b5"
    }
  },
  {
    "id": "9",
    "title": "Rolex GMT-Master II",
    "description": "Elevate your style with the Rolex GMT-Master II, a luxury watch that combines timeless elegance with advanced functionality. The dual-time zone feature allows you to keep track of time in two different locations, making it perfect for frequent travelers. Crafted with precision and attention to detail, the GMT-Master II is a symbol of sophistication and success. Whether you're attending a business meeting or exploring a new city, this watch is the perfect companion for any occasion.",
    "imageURL": "https://images.unsplash.com/photo-1609852786371-49a871682da8",
    "price": 250000,
    "colors": ["#000000", "#FFD700"],
    "category": {
      "name": "Watches",
      "imageURL": "https://images.unsplash.com/photo-1609852786371-49a871682da8"
    }
  },
  
  
  
]
      
      */
{
    "id": "10",
    "title": "Canon EOS R5",
    "description": "Unleash your creativity with the Canon EOS R5, a professional mirrorless camera that sets new standards in photography and videography. With a 45MP full-frame sensor and 8K video recording capabilities, the EOS R5 delivers stunning image quality and incredible detail. The advanced autofocus system ensures sharp and accurate focus, even in fast-paced situations. Whether you're capturing breathtaking landscapes or shooting high-action sports, the Canon EOS R5 is the ultimate tool for capturing your vision.",
    "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CDpkoI7gLfyOXSFL4fxq0FtYzNo1TfQl2w&s",
    "price": 85000,
    "colors": ["#000000", "#A9A9A9"],
    "category": {
      "name": "Cameras",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1CDpkoI7gLfyOXSFL4fxq0FtYzNo1TfQl2w&s"
    }
  },

{
    "id": "11",
    "title": "LG OLED C3 55-inch",
    "description": "Immerse yourself in stunning visuals with the LG OLED C3 55-inch TV. Featuring 4K resolution and AI-powered picture enhancement, this TV delivers breathtaking image quality with vibrant colors and deep contrasts. The sleek design and ultra-thin bezels make it a stylish addition to any living space. Whether you're watching movies, gaming, or streaming your favorite shows, the LG OLED C3 offers an unparalleled viewing experience that will leave you in awe.",
    "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPQ5wPEU-a44U2nYZlzL0YRhLIFuxxkkoMw&s",
    "price": 40000,
    "colors": ["#000000", "#C0C0C0"],
    "category": {
      "name": "Electronics",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTPQ5wPEU-a44U2nYZlzL0YRhLIFuxxkkoMw&s"
    }
  },

{
    "id": "12",
    "title": "PS5 Digital Edition",
    "description": "Step into the next generation of gaming with the PS5 Digital Edition. This powerful gaming console features 4K ray tracing, delivering stunning visuals and realistic lighting effects. The ultra-fast SSD ensures quick load times and smooth gameplay, while the immersive 3D audio enhances your gaming experience. With a vast library of games and exclusive titles, the PS5 Digital Edition is the ultimate console for gamers who demand the best.",
    "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow2M1un17uI-ephUwwV_2RDVHxZIVf6G2mg&s",
    "price": 25000,
    "colors": ["#FFFFFF", "#000000"],
    "category": {
      "name": "Gaming",
      "imageURL": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTow2M1un17uI-ephUwwV_2RDVHxZIVf6G2mg&s"
    }
  },


        {
            id: "21",
            title: "Samsung Galaxy S23 Ultra",
            description: "A flagship smartphone with a 200MP camera and S Pen support.",
            imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4JJfA86QTVzrwI6wHcluHK2nGB2ZEGNPug&s",
            price: 35000,
            colors: ["#000000", "#1E90FF"], 
            category: {
              name: "Smartphones",
              imageURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH4JJfA86QTVzrwI6wHcluHK2nGB2ZEGNPug&s",
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
  // {
  //   id: "6",
  //   title: "Nike Air Max 270",
  //   description:
  //     "The Nike Air Max 270 is a stylish and comfortable running shoe featuring Air cushioning technology. Its bold design and vibrant color options make it a popular choice for both athletes and casual wearers.",
  //   imageURL: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", // شغال
  //   price: 3500,
  //   colors: ["#FFFFFF", "#000000"], // White, Black
  //   category: {
  //     name: "Shoes",
  //     imageURL: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg", // شغال
  //   },
  // },

  {
    id: "8",
    title: "Tesla Model 3 Performance",
    description:
      "The Tesla Model 3 Performance is a high-performance electric car featuring all-wheel drive, autopilot, and a 0-60 mph time of just 3.1 seconds. With its sleek design and cutting-edge technology, it’s a top choice for electric vehicle enthusiasts.",
    imageURL:
      "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg", // شغال
    price: 1600000,
    colors: ["#FFFFFF", "#000000"], // White, Black
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
