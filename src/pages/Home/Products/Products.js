import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    const [products, setProducts] = useState([]);
    const lastSixProducts = products.slice(-6);

    useEffect( ()=>{
        fetch('https://obscure-hamlet-59270.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    }, [])

    return (
        <div id='trainings' className='container my-2'>
        <h2 className="product-title mt-5 bg-success">Total Products Created: {products.length}</h2>
        <div className="product-container mb-5">
            {
                lastSixProducts.map(product=> 
                <Product 
                    key={product._id}
                    product = {product}
                ></Product>
                )
            }
        </div> 
    </div>
    );
};

export default Products;