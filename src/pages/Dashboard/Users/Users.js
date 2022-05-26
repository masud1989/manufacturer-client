import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])

    const handleDeleteUser = id =>{
        console.log('OK ');
    }
    return (
        <div className='container mc-auto mt-5'>
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
                            <tr key={user._id}>
                                <td>{user.email}</td>
                                <td><Button className='btn btn-info'>Make Admin</Button></td>
                                <td><Button className='btn btn-danger'>Delete</Button></td>
                                {/* <td>
                                    <Link to='/testxxj' className='btn btn-info mx-1'>Edit</Link>
                                    <a onClick={()=>handleDeleteUser(user._id)} className='btn btn-danger mx-1'>Delete</a>
                                </td>                                 */}
                            </tr>
                            )
                    }
                </tbody>
            </table>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Users;