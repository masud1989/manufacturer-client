import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import ViewProduct from './ViewProduct';

const AddProduct = () => {

    const [user] = useAuthState(auth);
    const addProduct = event =>{
        
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const supplier = event.target.supplier.value;
        const minOrderQty = event.target.minOrderQty.value;
        const availableStock = event.target.availableStock.value;

        // const email = event.target.email.value;
        // const email = user.email;
        const img = event.target.img.value;
        const description = event.target.description.value;

        const product = { name, price, img, description, minOrderQty, availableStock, supplier  }
        // console.log({product});

        // sending data  =========================================
        fetch('https://obscure-hamlet-59270.herokuapp.com/product',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(product)
        })
            .then( res => res.json())          
            .then(data => {
                console.log('Success', data);
                // alert('Product Added Success')
                toast('Product Added Success')
                event.target.reset();
            })

    }


    return (
        <div className='container mt-5 w-75'>
            <div className='mx-auto mb-5 border-2 border-info'>
            <h3 className='text-info mb-3 bg-success text-white p-2'>Add Product Here</h3>
                    <form onSubmit={addProduct} >
                    {/* onSubmit={addProduct} */}
                        {/* <div className="form-group mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div> */}
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="name" name='name' placeholder="Product Name" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="price" name='price' placeholder="Product Price" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="supplier" name='supplier' placeholder="Product Supplier" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="number" className="form-control" id="minOrderQty" name='minOrderQty' placeholder="Min Order Quantity" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="number" className="form-control" id="availableStock" name='availableStock' placeholder="Stock Quantity" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" id="email" value={user.email} name='email' placeholder="User Email" required/>
                                </div>
                            </div>
                            <div className='col-md-6 col-sm-12 col-12'>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" id="img" name='img' placeholder="Product Photo URL" required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control mb-4" id="description" name='description' rows="3" placeholder='Description'></textarea>
                        </div>
                        <Button type='submit' className='btn btn-success text-white p-2'>Add Product</Button>
                        <ToastContainer></ToastContainer>
                </form>
            </div>
        </div>
        
    );
};

export default AddProduct;