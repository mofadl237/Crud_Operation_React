
import Image from "./Image";
import Button from "./UI/Button";
import { IProduct } from '../Interfaces/index';
import { slicerText } from "../Utilities";
import { CircleColor } from "./UI/CircleColor";


interface IProps{
  productInfo:IProduct;
}

const ProductCard = ({productInfo}:IProps) => {
  const {title, description,imageURL,price,category ,colors} = productInfo;
  const deleteProduct = ()=>{
    console.log("Hello");
  }
  const editProduct = ()=>{
    console.log("Hello");
  }
  return (
    <div className="border rounded-md p-2 flex flex-col space-y-3">
      <Image
        src={imageURL}
        alt={`${productInfo.id} this Image Camera`}
        className="rounded-md w-full h-48 object-cover"
      />

      <h3 className="text-lg h-10">{title} </h3>

      <p className="h-12 text-gray-500 text-wrap w-full overflow-hidden">
        {slicerText(description)}
      </p>

      <div className="flex gap-2 flex-wrap  items-center justify-start ">
      {colors.map((color,i) => <CircleColor key={i} color={color} />)}
      </div>

      <div className="flex items-center justify-between">
        <h3>{`${Number(price)}$`}</h3>

        <Image
          src={category.imageURL}
          alt={`${productInfo.id}  Image `}
          className="rounded-full w-10 h-10 object-cover"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Button className="bg-indigo-600 " onClick={deleteProduct}>EDIT</Button>
        <Button className="bg-red-600 " onClick={editProduct}>DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
