import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const phone = form.phone.value;
        const nationalid = form.nationalid.value;
        const skill = form.skill.value;
        const photo = form.photo.value;
        const newUser = { name, email, gender, phone, nationalid, skill, photo }
        console.log(newUser);

        // send data to server 
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'New User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Great!',
                        color: 'green',
                        backdrop: `rgba(0,0,123,0.4) `
                    })
                }
            })

        // send data to server 

    }

    return (
        <div className='pt-6'>
            
            <form onSubmit={handleAddUser} className='w-3/5 mx-auto shadow-lg pt-10 px-10  bg-gray-100'>
                
                <h1 className='text-center text-2xl pb-8'>Add New User</h1>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <input id="name" placeholder='User Name' name='name' type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">

                            <input id="email" placeholder='Email' name='email' type="email" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <select id="gender" name='gender' className="px-4 py-2 border rounded">
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">

                            <input id="phone" placeholder='Phone' name='phone' type="tel" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">

                            <input id="nationalId" placeholder='National ID' name='nationalid' type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">

                            <input id="skills" placeholder='Skill' name='skill' className="px-4 py-2 border rounded"></input>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col">

                        <input id="photoUrl" placeholder='Photo URL' name='photo' type="text" className="px-4 py-2 border rounded" />
                    </div>
                </div>
                <div className="mt-4">
                    <button className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Submit</button>
                </div>
                <div className='text-end pt-6'>
                <Link to='/'>
                <button className='  mb-6 rounded-md text-black hover:text-green-500 font-semibold' >Back to Home</button>
                </Link>
                </div>
            </form>
        </div>
    );
};

export default AddUser;