import React from 'react'
import './ProductList.css'


const ProductList = ({products,onDeleteProduct}) => {


    const handleDeleteClick = (productId) =>  {
        onDeleteProduct(productId)
    }
  return (
    <div className='product-list-main'>
        {products.length? (
            <>
            <div className='title'>
        
            <h1>Product List</h1>    
       </div> 
        
<div>
        <div className='product-list'>
        <ul className='ul'>
            {products.map((product) => {
                return (
                    <li key={product.productId}>
                         <strong>{product.productName}</strong> - ₹{product.sellingPrice}
                         <button className='li-btn' onClick={() => handleDeleteClick(product.productId)}>Delete</button>
                    </li>
                )
            })}

        </ul>
        </div>
       </div>
       </>
        ) : (
<h1>No Products added...</h1>
        )
        
    }
       

       
    </div>
  )
}

export default ProductList