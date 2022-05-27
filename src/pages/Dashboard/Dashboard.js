import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import Users from './Users/Users';

import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {

   
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (    
        <div class="d-flex" id="wrapper">
            <div class="border-end bg-white" id="sidebar-wrapper">
                <div class="list-group list-group-flush">
                    <Link to='/dashboard/manage-product' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Manage Product</Link>
                    <Link to='/my-orders' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Orders</Link>
                    {admin && <Link to='/dashboard/users' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">User Management</Link>}
                    <Link to='/dashboard/add-review' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Add a Review</Link>
                    <Link to='/test' class="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Profile</Link>
                </div>
            </div>
            <div id="page-content-wrapper">   
                  
                <div class="container">
                     <Outlet></Outlet> 
                </div>
                  
            </div>
        </div>        
    );
};

export default Dashboard;