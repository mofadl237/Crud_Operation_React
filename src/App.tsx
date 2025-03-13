import { useState, FormEvent, ChangeEvent } from "react";
import ProductCard from "./Components/ProductCard";
import { products, InputData, defaultProduct, colorsData } from "./Data/index";
import { IProduct } from "./Interfaces/index";
import { v4 as uuid } from "uuid";
import Button from "./Components/UI/Button";
import Modal from "./Components/UI/Modal";
import INPUT from "./Components/UI/INPUT";
import { validationForm } from "./Validation";
import Error from "./Components/Error";

import "./App.css";
import { CircleColor } from "./Components/UI/CircleColor";
//import { closestTailwind } from "tailwind-shades";

function App() {
  //********* State **********/
  const [isOpen, setIsOpen] = useState(true);
  const [product, setProduct] = useState(defaultProduct);
  const [productData, setProducts] = useState<IProduct[]>(products);
  const [tempColor, setTemColor] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });

  //********* change State **********/
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  //*********  Handler **********/

  //1- cancel Dialog
  const cancelHandler = () => {
    setProduct(defaultProduct);
    closeModal();
  };

  //2- changeHandler
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };
  //3- submit Handler

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validation
    const errors = validationForm(product);
    setErrors(errors);
    //check valid
    const isFoundError =
      Object.values(errors).every((val) => val === "") &&
      Object.values(errors).every((val) => val === "");
    if (!isFoundError) return;

    setProducts((prev) => [
      { ...product, id: uuid(), colors: tempColor },
      ...prev,
    ]);

    setProduct(defaultProduct);
    closeModal();
    setTemColor([]);
  };
  //********* Rerender **********/

  //1-render Data Input
  const inputs = InputData.map((input) => (
    <div className="flex flex-col mb-3" key={input.id}>
      <label htmlFor={input.id}>Product {input.label}</label>
      <INPUT
        type={input.type}
        name={input.name}
        id={input.id}
        value={product[input.name]}
        onChange={changeHandler}
      />
      <Error msg={errors[input.name]} />
    </div>
  ));

  //2-render Data Products

  const my_products = productData.map((product) => (
    <ProductCard key={product.id} productInfo={product} />
  ));

  //3- render CircleColor
  const circleColors = colorsData.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (!tempColor.includes(color)) {
          setTemColor([...tempColor, color]);
        } else {
          setTemColor((prev) => prev.filter((item) => item !== color));
        }
      }}
    />
  ));

  return (
    <>
      <Button className="bg-indigo-400 hover:bg-indigo-500" onClick={openModal}>
        Build Product
      </Button>
      <div className="container px-2 sm:px-0  pt-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {my_products}
        <Modal
          isOpen={isOpen}
          title="Add A New Product"
          closeModal={closeModal}
        >
          <form action="" onSubmit={submitHandler}>
            {inputs}
            <div className="flex items-center space-x-2 my-3 ">
              {circleColors}
            </div>

            <div className="flex mb-3 flex-wrap items-center gap-2">
              {tempColor.map((color) => (
                <span
                key={color}
                  className="p-1 mr-1 rounded-md text-white "
                  style={{ backgroundColor: color }}
                >
                  {color}
                </span>
              ))}
            </div>

            <div className="flex item-center space-x-3">
              <Button className="bg-indigo-500 hover:bg-indigo-600">
                submit
              </Button>
              <Button
                className="bg-gray-300 hover:bg-gray-600"
                onClick={cancelHandler}
                type="reset"
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
