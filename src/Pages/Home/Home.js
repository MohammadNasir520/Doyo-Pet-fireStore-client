import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { deleteUserById, getAllUser } from '../../api/userApi';

const Home = () => {

    const [users, setUsers] = useState([])
    console.log(users);


    // fetch All user
    useEffect(() => {
        fetchAllUser()
    }, [])

    const fetchAllUser = () => {
        getAllUser()
            .then(data => {
                console.log(data)
                setUsers(data)
            })
            .catch(error => console.log(error))
    }


    const handleDelete = (id) => {
        deleteUserById(id)
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.error(`user deleted`)
                    fetchAllUser()
                }
            })
            .catch(error => console.log(error))
    }

    return (

        <div>

            {/* <p className='text-3xl font-bold text-center my-2'>Doyo Pet Care</p> */}

            <div className='grid place-items-center md:grid-cols-3 lg:grid-cols-4 min-h-screen gap-3 mt-1 p-3'>
                {
                    users?.map(user => <div
                        key={user._id}

                        className='w-64 h-90 bg-slate-200 shadow-2xl rounded-xl p-3'
                    >

                        {/* <div className='h-48 w-full'>
                            <img className=' h-full w-full object-cover' src={user.data?.photoURL} alt="user Pic" />
                        </div> */}
                        <div className='font-medium p-1'>
                            <p>Name: {user?.name}</p>
                            <p>Age: {user?.age}</p>
                            <p>Email: {user?.email}</p>
                            <p>Location: {user?.location}</p>
                        </div>
                        <div className='flex justify-center gap-4'>
                            <button
                                onClick={() => handleDelete(user._id)}
                                className='bg-teal-900 text-white font-medium px-4 py-1 rounded-sm '>
                                Delete
                            </button>


                            <Link to={`/editUser/${user._id}`} state={user}>
                                <button className='bg-teal-900 text-white font-medium px-4 py-1 rounded-sm '>Edit</button>
                            </Link>
                        </div>
                    </div>


                    )
                }
            </div>
        </div>
    );
};

export default Home;