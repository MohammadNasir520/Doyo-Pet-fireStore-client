import React, { useEffect } from 'react';
import { getAllUser } from '../api/userApi';

const Home = () => {

    useEffect(() => {
        getAllUser()
            .then(data => {
                console.log(data)
            })
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            Home
        </div>
    );
};

export default Home;