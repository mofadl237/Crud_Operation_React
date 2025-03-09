
import Image from "./Image";
import Button from "../UI/Button";
import { IProduct } from './Interfaces/index';
import { slicerText } from "./Utilities";

interface IProps{
  productInfo:IProduct;
}

const ProductCard = ({productInfo}:IProps) => {
  const {title, description,imageURL,price,category} = productInfo;
  const deleteProduct = ()=>{
    console.log("Hello");
  }
  return (
    <div className="border rounded-md p-2 ">
      <Image
        imageUrl={imageURL}
        alt="this Image Camera"
        className="rounded-md w-full h-48 object-cover"
      />

      <h3 className="my-2">{title} </h3>

      <p>
        {slicerText(description)}
      </p>

      <div className="flex space-x-2 my-2">
        <span className="w-5 h-5 rounded-full bg-indigo-600 cursor-pointer "></span>
        <span className="w-5 h-5 rounded-full bg-red-400 cursor-pointer"></span>
        <span className="w-5 h-5 rounded-full bg-black cursor-pointer"></span>
      </div>

      <div className="flex items-center justify-between">
        <h3>{`${price}$`}</h3>

        <Image
          imageUrl={category.imageURL}
          alt={`${productInfo.id}  Image `}
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>

      <div className="flex space-x-2 mt-4">
        <Button className="bg-indigo-600 " onClick={deleteProduct}>EDIT</Button>
        <Button className="bg-red-600 ">DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
