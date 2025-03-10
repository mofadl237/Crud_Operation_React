import { useState ,FormEvent,ChangeEvent} from "react";
import "./App.css";
import ProductCard from "./Components/ProductCard";
import { products, InputData ,defaultProduct} from "./Components/Data/index";

import Button from "./Components/UI/Button";
import Modal from "./Components/UI/Modal";
import INPUT from "./Components/UI/INPUT";



//import { closestTailwind } from "tailwind-shades";

function App() {
  //********* State **********/
  const [isOpen, setIsOpen] = useState(true);

  const [product ,setProduct] = useState(defaultProduct);
  //********* change State **********/
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

//********* Change Handler **********/

    //1- submit Handler

    const submitHandler =(e:FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      products.push(product);
    }

    //2- changeHandler
    const changeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
      const {name , value} = e.target ;
      setProduct({...product , [name] :value })
      
    }
    //3- cancel Dialog 
    const cancelHandler =()=>{
      setProduct(defaultProduct);
      console.log(product);
      closeModal();
    }
//********* Rerender **********/

    //1-render Data Input
  const inputs = InputData.map((input) => (
    <div className="flex flex-col mb-3" key={input.id}>
      <label htmlFor={input.id}>Product {input.label}</label>
      <INPUT type={input.type} name={input.name} id={input.id} value ={product[input.name]} onChange={changeHandler}  />
    </div>
  ));

  //2-render Data Products

  const my_products = products.map((product) => (
    <ProductCard key={product.id} productInfo={product} />
  ));

  return (
    <>
      <Button className="bg-indigo-400 hover:bg-indigo-500" onClick={openModal}>
        Build Product
      </Button>
      <div className="container px-2 sm:px-0  pt-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {my_products}
        <Modal isOpen={isOpen} title="Add A New Product" closeModal={closeModal}>
          <form action="" onSubmit={submitHandler}>
          {inputs}
          <div className="flex item-center space-x-3">
            <Button className="bg-indigo-500 hover:bg-indigo-600">
              submit
            </Button>
            <Button
              className="bg-gray-300 hover:bg-gray-600"
              onClick={cancelHandler}
              type='reset'
            >
              cancel
            </Button>
          </div>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default App;
