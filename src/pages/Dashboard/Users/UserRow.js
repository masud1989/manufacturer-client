import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user}) => {
    const {email, role} = user;

    const makeAdmin = () =>{
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            
        })
        .then(res => {
            if(res.status === 403){
                toast.error('Making Admin Failed')
            }
            return res.json()} )
        .then(data => {
            // console.log(data);
            if(data.modifiedCount > 0){
                toast.success('Admin Making Suucess')
            }
        })
    }

    const handleDeleteUser = id =>{
        console.log('OK ');
    }

    return (
        <tr>
            <td>{email}</td>
            <td>{role!== 'admin' && <a onClick={makeAdmin} className='btn btn-info'>Make Admin</a>}</td>
            <td><a onClick={handleDeleteUser} className='btn btn-danger'>Delete User</a></td>
                {/* <td>
                                    <Link to='/testxxj' className='btn btn-info mx-1'>Edit</Link>
                                    <a onClick={()=>handleDeleteUser(user._id)} className='btn btn-danger mx-1'>Delete</a>
                                </td>                                 */}
        </tr>
    );
};

export default UserRow;