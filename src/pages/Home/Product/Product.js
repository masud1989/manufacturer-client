import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const {_id, name, img, description, price, quantity, supplier } = product;
    const navigate = useNavigate();

    // const handleNavigateToProductDetails = id => {
    //     navigate(`/product/${_id}`);
    // }

    return (
        <div className='product'>
            <img src={img} alt=''/>
            <h3>{name}</h3>
            <p>Price: {price} Tk.</p>
            <p>{description?.slice(0,100)}</p>  
            <h4>Available in Stock: {quantity}</h4>  
            <h4>Supplier:{supplier}</h4>  
            <Button className='btn btn-info'>Product Details</Button>          
            {/* <Button onClick={ ()=> handleNavigateToProductDetails(_id)} className='btn btn-info'>Product Details</Button>           */}
        </div>
    );
};

export default Product;