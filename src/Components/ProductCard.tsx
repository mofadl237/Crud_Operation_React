
import Image from "./Image";
import Button from "./UI/Button";
import { IProduct } from '../Interfaces/index';
import { slicerText,slicerNumber } from "../Utilities";
import { CircleColor } from "./UI/CircleColor";

interface IProps{
  productInfo:IProduct;
  setEditProduct:(val:IProduct)=>void;
  setTempColor:(val:string[])=>void;
  setIndexProduct:(val:number)=>void;
  idx:number;
  openEditModal:()=>void;
  openRemoveModal:()=>void;
}

const ProductCard = ({productInfo,setEditProduct,openEditModal,setTempColor,idx,setIndexProduct,openRemoveModal}:IProps) => {
  const {title, description,imageURL,price,category ,colors} = productInfo;

  function EditModal (){
    openEditModal();
    setEditProduct(productInfo);
    setTempColor(productInfo.colors);
    setIndexProduct(idx);

  }
  
  const deleteProduct = ()=>{
    openRemoveModal();
    setEditProduct(productInfo);
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

      {colors.length > 0 ? 
          <div className="flex gap-2 flex-wrap  items-center justify-start ">
          {colors.map((color,i) => <CircleColor key={i} color={color} />)}
          </div> 
      : <h5 className="text-red-700">Not Found Color</h5>}

      <div className="flex items-center justify-between">
        <h3 className="text-blue-700 font-bold">{`$ ${(slicerNumber(price))}`}</h3>

        <div className="flex items-center gap-3">
          <p>{category.name}</p>
        <Image
          src={category.imageURL}
          alt={`${productInfo.id}  Image `}
          className="rounded-full w-10 h-10 object-cover"
        />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Button className="bg-indigo-600 " onClick={EditModal}>EDIT</Button>
        <Button className="bg-red-600 " onClick={deleteProduct}>DELETE</Button>
      </div>
    </div>
  );
};

export default ProductCard;
