import {React, useState} from 'react'
import InputBox from '../ui/InputBox';
import Button from '../ui/Button';
import CheckBox from '../ui/PasswordCheckBox';
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from '../../services/authService.js';

const LoginForm = () => {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const [showPassword, setshowPassword] = useState(false);
    const isValid = loginFormData.email && loginFormData.password;
    const handleChange = (e) => { setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value })};
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = await loginUser(loginFormData);
            
            if (data.success) {
                navigate("/");
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='border border-gray-300 rounded-xl max-w-160 w-full p-8 flex flex-col justify-center items-center gap-6'>
            <h1 className='text-[32px]/[32px] font-medium text-[#333333]'>Sign in</h1>
            <form action="" className='w-full flex flex-col gap-6' onSubmit={handleSubmit}>
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
                    <Button type="submit" text="Log in" classes={`${isValid ? "bg-[#1591DC]" : "bg-[#dddddd]"} w-full`} />
                </div>
            </form>
        </div>
    )
}

export default LoginForm