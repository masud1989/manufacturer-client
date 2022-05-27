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
        <div className="d-flex" id="wrapper">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                {admin && <Link to='/dashboard/manage-product' className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Manage Product</Link>}
                    <Link to='/my-orders' className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Orders</Link>
                    {admin && <Link to='/dashboard/users' className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">User Management</Link>}
                    <Link to='/dashboard/add-review' className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Add a Review</Link>
                    <Link to='/test' className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">My Profile</Link>
                </div>
            </div>
            <div id="page-content-wrapper">   
                  
                <div className="container">
                     <Outlet></Outlet> 
                </div>
                  
            </div>
        </div>        
    );
};

export default Dashboard;