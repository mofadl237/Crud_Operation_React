import { useState, FormEvent, ChangeEvent } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ProductCard from "./Components/ProductCard";

import {
  products,
  InputData,
  defaultProduct,
  colorsData,
  Category,
} from "./Data/index";
import { IProduct } from "./Interfaces/index";
import { v4 as uuid } from "uuid";
import Button from "./Components/UI/Button";
import Modal from "./Components/UI/Modal";
import INPUT from "./Components/UI/INPUT";
import { validationForm } from "./Validation";
import Error from "./Components/Error";

import "./App.css";
import { CircleColor } from "./Components/UI/CircleColor";
import SELECT from "./Components/UI/SELECT";
//import { closestTailwind } from "tailwind-shades";

function App() {
  //********* State **********/
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenRemove, setIsOpenRemove] = useState(false);

  const [product, setProduct] = useState(defaultProduct);
  const [EditProduct, setEditProduct] = useState(defaultProduct);
  const [productData, setProducts] = useState<IProduct[]>(products);

  const [indexProduct, setIndexProduct] = useState<number>(0);

  const [tempColor, setTemColor] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageURL: "",
    price: "",
  });
  const [selected, setSelected] = useState(Category[3]);

  //********* change State **********/
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeEditModal() {
    setIsOpenEdit(false);
  }
  function openEditModal() {
    setIsOpenEdit(true);
  }
  function closeRemoveModal() {
    setIsOpenRemove(false);
  }
  function openRemoveModal() {
    setIsOpenRemove(true);
  }

  const removeProduct = () => {
    //1-Deep Copy
    // let UpdatedProducts=[...products];
    // //2-Action
    // UpdatedProducts = UpdatedProducts.filter((prev) => prev.id !== EditProduct.id);
    const UpdatedProducts = productData.filter(
      (prev) => prev.id !== EditProduct.id
    );
    //3-Set
    setProducts(UpdatedProducts);
    //CloseModel
    closeRemoveModal();
    toast("Remove Success!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

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
  const changeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditProduct({ ...EditProduct, [name]: value });
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
      { ...product, id: uuid(), colors: tempColor, category: selected },
      ...prev,
    ]);

    setProduct(defaultProduct);
    closeModal();
    setTemColor([]);

    toast("Add Product Success!", {
      icon: "👏",
      style: {
        borderRadius: "10px",
        background: "#4e7",
        color: "#fff",
      },
    });
  };
  const EditHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Validation
    const errors = validationForm(EditProduct);
    setErrors(errors);
    //check valid
    const isFoundError = Object.values(errors).every((val) => val === "");
    if (!isFoundError) return;

    //1- deep Copy
    const updateProducts = [...products];

    //2-Action
    updateProducts[indexProduct] = { ...EditProduct, colors: tempColor };

    //3-Set
    setProducts(updateProducts);

    // Big O Notation Using Index
    //setProducts((prev) => prev.map(product => product.id === EditProduct.id ? EditProduct :product));
    setEditProduct(defaultProduct);
    closeEditModal();
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
  const inputsEdit = InputData.map((input) => (
    <div className="flex flex-col mb-3" key={input.id}>
      <label htmlFor={input.id}>Product {input.label}</label>
      <INPUT
        type={input.type}
        name={input.name}
        id={input.id}
        value={EditProduct[input.name]}
        onChange={changeEditHandler}
      />
      <Error msg={errors[input.name]} />
    </div>
  ));

  //2-render Data Products

  const my_products = productData.map((product, idx) => (
    <ProductCard
      key={product.id}
      idx={idx}
      setIndexProduct={setIndexProduct}
      productInfo={product}
      setEditProduct={setEditProduct}
      openEditModal={openEditModal}
      setTempColor={setTemColor}
      openRemoveModal={openRemoveModal}
    />
  ));

  //3- render CircleColor
  const circleColors = colorsData.map((color) => {
    return (
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
    );
  });

  return (
    <>
      <Button
        className="bg-indigo-400 hover:bg-indigo-500 mx-auto block mt-3"
        onClick={openModal}
      >
        Build Product
      </Button>

      <div className="container px-2 sm:px-0  pt-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {my_products}
        {/* Add Product  */}
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
            <SELECT selected={selected} setSelected={setSelected} />
            <div className="flex my-3 flex-wrap items-center gap-2">
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
        {/* Edit Product  */}
        <Modal
          isOpen={isOpenEdit}
          title="Edit Product"
          closeModal={openEditModal}
        >
          <form action="" onSubmit={EditHandler}>
            {inputsEdit}

            <div className="flex items-center space-x-2 my-3 ">
              {circleColors}
            </div>

            <div className="flex mb-y flex-wrap items-center gap-2">
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

            <SELECT
              selected={EditProduct.category}
              setSelected={(value) =>
                setEditProduct({ ...EditProduct, category: value })
              }
            />

            <div className="flex my-3 item-center space-x-3">
              <Button className="bg-indigo-500 hover:bg-indigo-600">
                Edit
              </Button>
              <Button
                className="bg-gray-300 hover:bg-gray-600"
                onClick={closeEditModal}
                type="reset"
              >
                cancel
              </Button>
            </div>
          </form>
        </Modal>

        {/*Modal Remove */}
        <Modal
          isOpen={isOpenRemove}
          title="Are You Sure Delete Product"
          closeModal={closeRemoveModal}
        >
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ad.
          </p>

          <div className="flex my-3 item-center space-x-3">
            <Button
              className="bg-red-500 hover:bg-red-600"
              onClick={removeProduct}
            >
              Yes. remove
            </Button>
            <Button
              className="bg-gray-300 hover:bg-gray-600"
              onClick={closeRemoveModal}
              type="reset"
            >
              cancel
            </Button>
          </div>
        </Modal>

        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
