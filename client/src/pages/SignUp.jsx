import { useState } from 'react';
import heroImg from "../assets/Illustration.png";
import SignUpForm from '../components/auth/SignUpForm.jsx';
import {Link} from "react-router-dom";
import logo from "../assets/logo_no_name.png";

const SignUp = () => {

    return (
        <div className="main h-screen bg-[#FBFBFB] flex flex-col items-center">
            <div className="container flex justify-center p-6 sm:p-12 md:p-20 lg:p-16">
                <div className="wrapper w-full flex justify-between items-center border border-[#C4C4C4] rounded-md p-6 sm:p-6 md:p-14 lg:p-14 max-w-254.25">
                    <div className='section-split sm:w-full md:w-full lg:w-1/2 flex flex-col gap-10'>
                        <div className="heading-wrapper flex flex-col gap-4">
                            <div className="logo-wrapper max-w-15">
                                <img src={logo} alt="" />
                            </div>
                            <div className="login-btn-wrapper flex flex-col gap-0.5">
                                <h1 className='font-medium text-[#333333] text-3xl/[48px]'>Create an account</h1>
                                <p className='text-[#333333]'>Already have an account? <Link to="/login" className='underline whitespace-nowrap'>Log in</Link></p>
                            </div>
                        </div>
                        <div className="form-wrapper">
                            <SignUpForm />
                        </div>
                    </div>
                    <div className="section-split  max-w-1/2 hidden sm:hidden md:hidden lg:inline">
                        <div className="hero-img-wrapper">
                            <img src={heroImg} alt="" className='max-w-110'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp