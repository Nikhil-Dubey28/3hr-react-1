import React,{useEffect,useState} from 'react'
import ProductForm from './Components/ProductForm/ProductForm'
import ProductList from './Components/ProductList/ProductList'
import './App.css'

const App = () => {
const [products,setProducts] = useState([])
const [total, setTotal] = useState(0)


useEffect(() => {
  const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
  setProducts(storedProducts);
  calculateTotal(storedProducts);
},[])

const handleAdd  = (newProduct) => {
setProducts([...products,newProduct])

// Update local storage after adding the product
localStorage.setItem('products', JSON.stringify([...products, newProduct]));
calculateTotal([...products, newProduct]);
}

const calculateTotal = (productList) => {
  const total = productList.reduce((sum, product) => sum + product.sellingPrice, 0);
  setTotal(total);
};


const handleDelete = (productId) =>  {
  const updatedProducts = products.filter((product) => product.productId !== productId);
  setProducts(updatedProducts);
  localStorage.setItem('products', JSON.stringify(updatedProducts));
  calculateTotal(updatedProducts);
}


  return (
    <div className='main'>
      <ProductForm onAddProduct={handleAdd} />
      <ProductList products={products}  onDeleteProduct={handleDelete} />
      
        <div className='total'>
          <h2>Total: ₹{total}</h2>
        </div>
      
    </div>
  )
}

export default App