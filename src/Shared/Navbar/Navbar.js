import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <header class="text-gray-600 ">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">

                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center ">
                    <NavLink to={'/addUser'} className="mr-5 font-bold text-3xl ">Add user</NavLink>

                </nav>

            </div>
        </header>
    );
};

export default Navbar;