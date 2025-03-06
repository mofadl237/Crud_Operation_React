
import './App.css'
import ProductCard from './Components/ProductCard'

function App() {
  

  return (
    <>
      <div className="container px-2 sm:px-0 mx-auto pt-4 grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      </div>
    </>
  )
}

export default App
