import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import UserRow from './UserRow';

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    
    return (
        <div className='container mx-40 mt-5'>
            <h1 className='bg-success text-white text-center'> Total Users: {users.length}  </h1>
            <table className="table table-sm mb-10">
                <thead>
                    <tr>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user=> 
                            <UserRow
                                key={user._id}
                                user={user}
                            ></UserRow>
                            )
                    }
                </tbody>
            </table>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Users;