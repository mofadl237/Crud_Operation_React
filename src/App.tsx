import "./App.css";
import ProductCard from "./Components/ProductCard";
import { products } from "./Components/Data/index";

function App() {
  //get Data In Variable And Display
  const my_products = products.map((product) => (
    <ProductCard key={product.id} productInfo={product} />
  ));

  return (
    <>
      <div className="container px-2 sm:px-0  pt-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
        {my_products}
      </div>
    </>
  );
}

export default App;
