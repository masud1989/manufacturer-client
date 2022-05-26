import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (    
        <div class="d-flex" id="wrapper">
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="list-group list-group-flush">
                    <Link to='/manage-product' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Manage Product</Link>
                    <Link to='/my-orders' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Orders</Link>
                    <Link to='/users' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">User Management</Link>
                    <Link to='/test' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Add a Review</Link>
                    <Link to='/test' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Profile</Link>
                </div>
            </div>
            <div id="page-content-wrapper">            
                <div class="container">
                    <h1 className='bg-secondary text-center text-white mx-auto mt-5'> This is Dashboard Content</h1>
                </div>
            </div>
        </div>        
    );
};

export default Dashboard;