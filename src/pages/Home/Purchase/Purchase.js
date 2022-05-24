import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Purchase = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    // console.log(product);
    const [productQuantity, setProductQuantity] = useState();
    
    useEffect( () => {
        const url = `http://localhost:5000/product/${id}`;
       
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProduct(data))
    })

    const handlePurchase = () =>{
    
            // console.log('ok');
            const newQuantity = parseInt(product.quantity)-1;
            const productQuantity = newQuantity;
            console.log(parseInt(newQuantity));
            const url = `localhost:5000/product/${id}`;
            fetch(url,{
                method: 'PATCH',
                headers:{
                    'content-type': 'application/json'
                },
                body:JSON.stringify({productQuantity})
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setProductQuantity(data);
                    toast('Product Purchase Successful');
                })
        }    
    
    return (
        <div>
            <div className='w-50 mx-auto'>
            <h1 className='bg-success text-white mt-5'>Purchase Product of ID :{product._id} </h1>

            <div className="card mb-3">
                <img src={product.img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h3 className="card-title bg-warning text-white p-2">Name: {product.name}</h3>
                    <h4 className="card-title">Unit Price: {product.price}</h4>
                    <h4 className="card-title">Quantity Purchase: {product.price}</h4>
                    <h4 className="card-title">Total Price Minimum Purchase: {product.price}</h4>
                    <h4 className="card-title">Minimum Purchase: {product.price}</h4>
                    <h4 className="card-title">Quantity Available: {product.quantity}</h4>
                    <p className="card-text"><strong>Details:</strong>  {product.description}</p>
                    <div className='d-flex justify-content-around '>
                        <Button onClick={handlePurchase} className='btn btn-success'>Purchase</Button>
                        <form>
                            <input type='text' name='stock' placeholder='Quantity'/> 
                            <Button  className='btn btn-success'>Stock Update</Button>
                        </form>
                    </div>
                    <ToastContainer></ToastContainer>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;