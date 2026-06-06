import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../assets/logo-vertical.png";
import profile from "../../assets/profile-icon.png";
import logoutIcon from "../../assets/logout-icon.png";

const Navbar = () => {
    return (
        <div>
            <div className='navbar-section h-screen w-[20%] min-w-55 px-4 py-6 fixed border border-gray-200 shadow-md'>
                <div className='navbar-wrapper h-full flex flex-col justify-between gap-6'>
                    <div className='navigation-section'>
                        <div className="logo-wrapper">
                            <img src={logo} alt="inventra" className='max-w-35' />
                        </div>
                        <div className="nav-link-wrapper">
                            <ul className='flex flex-col gap-1'>
                                <li>
                                    <NavLink to={"/"} className={({ isActive }) => `block px-3 py-2 w-full rounded ${isActive ? "text-[#1591DC] bg-[#ccebff]" : "text-black bg-white hover:text-[#1591DC] hover:bg-[#ccebff]"} duration-300 ease-in-out`}>
                                        Dashboard
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/product"} className={({ isActive }) => `block px-3 py-2 w-full rounded ${isActive ? "text-[#1591DC] bg-[#ccebff]" : "text-black bg-white hover:text-[#1591DC] hover:bg-[#ccebff]"} duration-300 ease-in-out`}>
                                        Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/supplier"} className={({ isActive }) => `block px-3 py-2 w-full rounded ${isActive ? "text-[#1591DC] bg-[#ccebff]" : "text-black bg-white hover:text-[#1591DC] hover:bg-[#ccebff]"} duration-300 ease-in-out`}>
                                        Supplier
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/category"} className={({ isActive }) => `block px-3 py-2 w-full rounded ${isActive ? "text-[#1591DC] bg-[#ccebff]" : "text-black bg-white hover:text-[#1591DC] hover:bg-[#ccebff]"} duration-300 ease-in-out`}>
                                        Category
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/warehouse"} className={({ isActive }) => `block px-3 py-2 w-full rounded ${isActive ? "text-[#1591DC] bg-[#ccebff]" : "text-black bg-white hover:text-[#1591DC] hover:bg-[#ccebff]"} duration-300 ease-in-out`}>
                                        Warehouse
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/employee"} className={({ isActive }) => `block px-3 py-2 w-full rounded ${isActive ? "text-[#1591DC] bg-[#ccebff]" : "text-black bg-white hover:text-[#1591DC] hover:bg-[#ccebff]"} duration-300 ease-in-out`}>
                                        Employee
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/role"} className={({ isActive }) => `block px-3 py-2 w-full rounded ${isActive ? "text-[#1591DC] bg-[#ccebff]" : "text-black bg-white hover:text-[#1591DC] hover:bg-[#ccebff]"} duration-300 ease-in-out`}>
                                        Role
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/setting"} className={({ isActive }) => `block px-3 py-2 w-full rounded ${isActive ? "text-[#1591DC] bg-[#ccebff]" : "text-black bg-white hover:text-[#1591DC] hover:bg-[#ccebff]"} duration-300 ease-in-out`}>
                                        Settings
                                    </NavLink>
                                </li>


                            </ul>
                        </div>
                    </div>

                    <div className="logout-wrapper flex justify-between items-top py-4 border-t border-gray-200">
                        <div className="avater-wrapper flex gap-4">
                            <div className="profile-wrapper">
                                <img src={profile} alt="" className='max-w-9 rounded-full border border-gray-300' />
                            </div>
                            <div className='text-wrapper flex flex-col'>
                                <h1 className='name text-'>Mursalin</h1>
                                <p className='role text-sm'>Admin</p>
                            </div>
                        </div>
                        <div className='btn-wrapper'>
                            <button className='hover:cursor-pointer p-2 rounded duration-300 ease-in-out hover:text-[#1591DC] hover:bg-[#ccebff]'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="100%" height="100%" className='max-w-6'>
                                    <path
                                        d="M276 40H96C65.1 40 40 65.1 40 96v320c0 30.9 25.1 56 56 56h180c15.5 0 28-12.5 28-28s-12.5-28-28-28H96V96h180c15.5 0 28-12.5 28-28s-12.5-28-28-28z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M462.1 236.1L352.1 126.1c-10.9-10.9-28.7-10.9-39.6 0s-10.9 28.7 0 39.6L392.4 228H196c-15.5 0-28 12.5-28 28s12.5 28 28 28h196.4l-79.9 79.9c-10.9 10.9-10.9 28.7 0 39.6 5.5 5.5 12.7 8.2 19.8 8.2s14.3-2.7 19.8-8.2l110-110c11-10.9 11-28.7 0-39.6z"
                                        fill="currentColor"
                                    />
                                </svg>

                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar