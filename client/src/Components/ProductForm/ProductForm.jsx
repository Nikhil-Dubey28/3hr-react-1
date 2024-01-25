import React, {useState,useEffect} from 'react'
import './ProductForm.css'


const ProductForm = ({onAddProduct}) => {
    const [formValues, setFormValues] = useState({
        productId: '',
        sellingPrice: '',
        productName: '',
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!formValues.productId || !formValues.sellingPrice || !formValues.productName) {
            alert('Please fill in all fields');
            return;
          }


          const newProduct = {
            productId: formValues.productId,
            sellingPrice: parseFloat(formValues.sellingPrice),
            productName: formValues.productName,
          }
          onAddProduct(newProduct)

          setFormValues({
            productId: '',
            sellingPrice: '',
            productName: '',
          });
    }


  return (
    <div className='main-container'>
        <form onSubmit={handleSubmit}>
            <div className="form-group">

                <div className='product-id'>
                <input 
                type="number"
                placeholder='Product Id' 
                value={formValues.productId}
                name = 'productId'
                onChange={handleInputChange}
                />
                </div>

                <div className='selling-price'>
                    <input 
                    type="number" 
                    placeholder='Selling Price'
                    value={formValues.sellingPrice}
                    name='sellingPrice'
                    onChange={handleInputChange}
                    />
                </div>

                <div className='product-name'>
                    <input 
                    type="text" 
                    placeholder='Product Name'
                    value={formValues.productName}
                    name='productName'
                    onChange={handleInputChange}
                    />
                </div>
                <div className='btn'>
                    <button type='submit'>Add</button>
                </div>

            </div>
            
        </form>
    </div>
  )
}

export default ProductForm