import { useState } from 'react';
import logo from "../assets/logo-vertical.png";
import {Link} from "react-router-dom";
import LoginForm from '../components/auth/LoginForm.jsx';

const LogIn = () => {

    return (
        <div className='main flex items-center justify-center p-6 sm:p-12 md:p-20 lg:p-10'>
            <div className="container">
                <div className="wrapper flex flex-col justify-center items-center gap-8">
                    
                    <div className="logo-wrapper max-w-40">
                        <img src={logo} alt="" />
                    </div>

                    <LoginForm></LoginForm>

                    {/* <div className='border border-gray-300 rounded-xl max-w-160 w-full p-8 flex flex-col justify-center items-center gap-12'>
                        <h1 className='text-[32px]/[32px] font-medium text-[#333333]'>Sign in</h1>
                        <form action="" className='w-full flex flex-col gap-6'>
                            <div className="email-wrapper">

                                <InputBox name='email' label='Your Email' type="email" value={loginFormData.email} onChange={handleChange} />

                            </div>
                            <div className="password-wrapper">

                                <InputBox name='password' label='Your Password' type={showPassword ? "text" : "password"} onChange={handleChange} value={loginFormData.password} />

                            </div>
                            <div className="password-show-box-wrapper flex flex-wrap justify-between gap-2">

                                <div className='show-password'>

                                    <CheckBox label="Show password" onChange={(e) => setshowPassword(e.target.checked)} />

                                </div>
                                <div className="forgot-password-wrapper text-end">
                                    <Link to='' className='underline'>Forgot your password?</Link>
                                </div>

                            </div>
                            <div className="btn-wrapper w-auto">
                                <Button text="Log in" classes={`${isValid && pwdLen ? "bg-[#1591DC]" : "bg-[#dddddd]"} w-full`} />
                            </div>
                        </form>
                    </div> */}

                    <div className="signup-btn-wrapper flex flex-col gap-8 w-full max-w-160">
                        <div className="border-wrapper flex items-center gap-6">
                            <div className="signup-border w-full h-px bg-gray-300"></div>
                            <div className="signup-border-text w-full">New to our community</div>
                            <div className="signup-border w-full h-px bg-gray-300"></div>
                        </div>
                        <div className="btn-wrapper flex justify-center w-full">
                            <Link to='/signup' className="w-full text-center px-6 py-4 rounded-full text-lg duration-200 ease-in-out  border text-black!">Create an account</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LogIn