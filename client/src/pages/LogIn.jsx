import { useState } from 'react';
import InputBox from '../components/ui/InputBox';
import Button from '../components/ui/Button';
import CheckBox from '../components/ui/PasswordCheckBox';

const LogIn = () => {

    const [loginFormData, setLoginFormData] = useState({ email: "", password: "" });
    const [showPassword, setshowPassword] = useState(false);
    const isValid = loginFormData.email && loginFormData.password;
    const pwdLen = loginFormData.password.length >= 8;
    const handleChange = (e) => { setLoginFormData({ ...loginFormData, [e.target.name]: e.target.value }) }


    return (
        <div className='main flex items-center justify-center p-6 sm:p-12 md:p-20 lg:p-10'>
            <div className="container">
                <div className="wrapper flex flex-col justify-center items-center gap-8">
                    <div className="logo-wrapper w-12 h-12 bg-[#C4C4C4] rounded-full"></div>

                    <div className='border border-gray-300 rounded-xl max-w-160 w-full p-14 flex flex-col justify-center items-center gap-12'>
                        <h1 className='text-[32px]/[48px] font-medium text-[#333333]'>Sign in</h1>
                        <form action="" className='w-full flex flex-col gap-6'>
                            <div className="email-wrapper">

                                <InputBox name='email' label='Your Email' type="email" value={loginFormData.email} onChange={handleChange} />

                            </div>
                            <div className="password-wrapper">

                                <InputBox name='password' label='Your Password' type={showPassword ? "text" : "password"} value={loginFormData.password} onChange={handleChange} />

                            </div>
                            <div className="password-show-box-wrapper flex flex-col gap-2">

                                <div className='show-password'>

                                    <CheckBox label="Show password" onChange={(e) => setshowPassword(e.target.checked)} />

                                </div>

                            </div>
                            <div className="btn-wrapper flex w-auto">
                                <Button text="Log in" classes={isValid && pwdLen ? "bg-[#1591DC]" : "bg-[#dddddd]"} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn