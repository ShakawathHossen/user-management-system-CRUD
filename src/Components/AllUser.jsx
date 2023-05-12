import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUser = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    const { _id, name, email, gender, phone, nationalid, skill, photo } = loadedUsers;
    // handle delete 
    const handleDelete = (_id) => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                console.log('deleted')
                fetch(`http://localhost:5000/users/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                            const remaining = users.filter(u => u._id !== _id);
                            setUsers(remaining);
                        }
                    })
                    .catch(error => {
                        console.error('Error deleting user:', error);
                    });

            }
        })

    }
    // handle delete 






    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <div className='text-end'>
                <Link to='addUser'>
                <button className='border-2 px-2 py-1 mb-6 rounded-md border-green-500 hover:bg-green-500 hover:text-white duration-500' >Add New User</button>
                </Link>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Gender</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Skill</th>
                                <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">National ID</th>
                                <th className="px-6 py-3"></th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {users.map((user) =>

                            (

                                <tr key={user._id}>
                                    <td className="px-6 py-4 whitespace-nowrap"><img className='w-12' src={user.photo} alt="" /></td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.gender}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.skill}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{user.nationalid}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <Link to={`updateUser/${user._id}`}>

                                            <button
                                                className="py-2 px-4 mr-2"
                                            >
                                                <img src="https://i.ibb.co/G08dvDK/edit-button.png" alt="" />
                                            </button>
                                        </Link>

                                        <button
                                            className="py-2 px-4 rounded"
                                            onClick={() => handleDelete(user._id)}

                                        >
                                            <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
                                        </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUser;