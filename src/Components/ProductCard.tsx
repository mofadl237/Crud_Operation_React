import React from "react";
import Image from "./Image";
import Button from "../UI/Button";


const ProductCard = () => {
  return (
    <div className="border rounded-md p-2 ">
      <Image
        imageUrl="https://images.pexels.com/photos/247769/pexels-photo-247769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="this Image Camera"
        className="rounded-md"
      />

      <h3 className="my-2">2022 sensor for qualified </h3>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quis optio
        saepe perferendis distinctio.
      </p>

      <div className="flex space-x-2 my-2">
        <span className="w-5 h-5 rounded-full bg-indigo-400 cursor-pointer "></span>
        <span className="w-5 h-5 rounded-full bg-red-400 cursor-pointer"></span>
        <span className="w-5 h-5 rounded-full bg-black cursor-pointer"></span>
      </div>

      <div className="flex items-center justify-between">
        <h3>$500.00</h3>

        <Image
          imageUrl="https://images.pexels.com/photos/247769/pexels-photo-247769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="this Image Camera"
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>

      <div className="flex space-x-2 mt-4">
        <Button className="bg-indigo-500 ">EDIT</Button>
        <Button className="bg-red-500 ">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
