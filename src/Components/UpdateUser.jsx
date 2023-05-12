import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const loadedUser= useLoaderData()
    const{ name, email, gender, phone, nationalid, skill, photo }=loadedUser;

 const handleUpdateUser = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const gender = form.gender.value;
        const phone = form.phone.value;
        const nationalid = form.nationalid.value;
        const skill = form.skill.value;
        const photo = form.photo.value;
        const updatedUser = { name, email, gender, phone, nationalid, skill, photo }
        console.log(updatedUser);


          // send data to server 
          fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedUser)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Updated successfully',
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
            <form onSubmit={handleUpdateUser}  className='w-3/5 mx-auto shadow-lg px-10 pt-10 bg-gray-100'>
                <h1 className='text-center text-2xl pb-8'>Update User Data</h1>

                <div className="flex flex-col md:flex-row gap-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <input id="name" placeholder='User Name' defaultValue={name} name='name' type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">

                            <input id="email" placeholder='Email' defaultValue={email} name='email' type="email" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">
                            <select id="gender" name='gender' defaultValue={gender} className="px-4 py-2 border rounded">
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">

                            <input id="phone" placeholder='Phone' defaultValue={phone} name='phone' type="tel" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">

                            <input id="nationalId" placeholder='National ID' defaultValue={nationalid} name='nationalid' type="text" className="px-4 py-2 border rounded" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="flex flex-col">

                            <input id="skills" placeholder='Skill' defaultValue={skill} name='skill' className="px-4 py-2 border rounded"></input>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <div className="flex flex-col">

                        <input id="photoUrl" placeholder='Photo URL' defaultValue={photo} name='photo' type="text" className="px-4 py-2 border rounded" />
                    </div>
                </div>
                <div className="mt-4">
                    <button className="w-full px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600">Update</button>
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

export default UpdateUser;