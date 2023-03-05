import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { addUser, updateUserById } from '../../api/userApi';

const AddUser = () => {


    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const age = parseInt(form.age.value);
        const location = form.location.value;

        const newUser = { name, email, age, location }
        console.log(newUser)

        addUser(newUser)
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`${name} Added successfully`)
                    navigate("/")
                }
            })
            .catch(error => { console.log(error) })



    }
    return (
        <div className='grid place-items-center bg-slate-300 min-h-screen'>
            <form onSubmit={handleSubmit}>

                <div className='flex flex-col'>
                    <label htmlFor="name">Add Name</label>
                    <input
                        className='outline-none px-2'
                        type="text"
                        name="name"
                        id="name"

                    />

                </div>
                <div className='my-2 flex flex-col' >
                    <label htmlFor="age">Add Age</label>
                    <input
                        className='outline-none px-2'
                        type="text"
                        name="age"
                        id="age"

                    />
                </div>

                <div className='my-2 flex flex-col' >
                    <label htmlFor="email">Add Email</label>
                    <input
                        className='outline-none px-2'
                        type="text"
                        name="email"
                        id="email"

                    />
                </div>
                <div className='my-2 flex flex-col' >
                    <label htmlFor="location">Add location</label>
                    <input
                        className='outline-none px-2'
                        type="text"
                        name="location"
                        id="location"

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

export default AddUser;