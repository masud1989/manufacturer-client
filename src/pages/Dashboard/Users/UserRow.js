import React from 'react';

const UserRow = ({user}) => {
    const {email} = user;

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            
        })
        .then(res => res.json() )
        .then(data => {
            console.log(data);
        })
    }

    const handleDeleteUser = id =>{
        console.log('OK ');
    }

    return (
        <tr>
            <td>{email}</td>
            <td><a onClick={makeAdmin} className='btn btn-info'>Make Admin</a></td>
            <td><a onClick={handleDeleteUser} className='btn btn-danger'>Delete User</a></td>
                {/* <td>
                                    <Link to='/testxxj' className='btn btn-info mx-1'>Edit</Link>
                                    <a onClick={()=>handleDeleteUser(user._id)} className='btn btn-danger mx-1'>Delete</a>
                                </td>                                 */}
        </tr>
    );
};

export default UserRow;