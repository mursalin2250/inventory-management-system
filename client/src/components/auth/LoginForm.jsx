import {React, useState} from 'react'
import InputBox from '../ui/InputBox';
import Button from '../ui/Button';
import CheckBox from '../ui/PasswordCheckBox';
import { Link } from "react-router-dom";

const LoginForm = () => {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const [showPassword, setshowPassword] = useState(false);
    const isValid = loginFormData.email && loginFormData.password;
    const pwdLen = loginFormData.password.length >= 8;
    const handleChange = (e) => { setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value }) }

    return (
        <div className='border border-gray-300 rounded-xl max-w-160 w-full p-8 flex flex-col justify-center items-center gap-6'>
            <h1 className='text-[32px]/[32px] font-medium text-[#333333]'>Sign in</h1>
            <form action="" className='w-full flex flex-col gap-6'>
                <div className="email-wrapper">

                    <InputBox placeholder="Enter your email" name='email' label='Your Email' type="email" value={loginFormData.email} onChange={handleChange} />

                </div>
                <div className="password-wrapper">

                    <InputBox placeholder="Enter your password" name='password' label='Your Password' type={showPassword ? "text" : "password"} onChange={handleChange} value={loginFormData.password} />

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
        </div>
    )
}

export default LoginForm