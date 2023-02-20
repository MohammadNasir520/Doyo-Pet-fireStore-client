import React from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { updateUserById } from '../../api/userApi';

const EditUser = () => {
    const user = useLoaderData()
    console.log(user)
    const id = user.id;

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;

        const newUser = { name, email }
        console.log(newUser)

        updateUserById(newUser, id)
            .then(data => {
                console.log(data)
                if (data.message) {
                    toast.success(`${name} updated successfully`)
                    navigate("/")
                }
            })
            .catch(error => { console.log(error) })



    }
    return (
        <div className='grid place-items-center bg-slate-300 min-h-screen'>
            <form onSubmit={handleSubmit}>

                <div className='flex flex-col'>
                    <label htmlFor="name">Edit Name</label>
                    <input
                        className='outline-none px-2'
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={user?.data?.name}
                    />

                </div>

                <div className='my-2 flex flex-col' >
                    <label htmlFor="email">Edit Email</label>
                    <input
                        className='outline-none px-2'
                        type="text"
                        name="email"
                        id="email"
                        defaultValue={user?.data?.email}
                    />
                </div>

                <button type='submit'
                    className='bg-teal-900 text-white font-medium px-4 py-1 rounded-sm '>
                    Save
                </button>
            </form>
        </div>
    );
};

export default EditUser;