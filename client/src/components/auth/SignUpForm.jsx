import { useState } from 'react';
import InputBox from '../ui/InputBox.jsx';
import Button from '../ui/Button.jsx';
import Checkbox from '../ui/PasswordCheckBox.jsx';
import {signUpUser} from "../../services/authService.js";
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    
    const [formData, setFormData] = useState({
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "", 
        confirmPassword: ""
    });
    const [showPassword, setshowPassword] = useState(false);
    const isValid = formData.firstName && formData.lastName && formData.email && formData.password && formData.confirmPassword;
    const matchPassword = formData.password === formData.confirmPassword;
    const pwdLen = formData.password.length >= 8 && formData.confirmPassword.length >= 8;
    const pwdFilled = formData.confirmPassword !== "" && formData.password !== "";
    const handleChange = (e) => { setFormData({...formData, [e.target.name]: e.target.value}) }
    const navigate = useNavigate();
    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            const {confirmPassword, ...userData} = formData;
            const data = await signUpUser(userData);
            console.log(data.success);
            if (data.success){
                navigate("/");
            }
            
        } catch (error) {
            console.error(error);
        }
    }


    return (
        <div>
            <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
                <div className="name-wrapper flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-4">

                    <InputBox placeholder="First name" name='firstName' label='First Name' type="text" onChange={handleChange} value={formData.firstName} require="required" />

                    <InputBox placeholder="Last name" name='lastName' label='Last Name' type="text" onChange={handleChange} value={formData.lastName} />
                
                </div>
                <div className="email-wrapper">

                    <InputBox placeholder="Your Email" name='email' label='Email' type="email" onChange={handleChange} value={formData.email} />

                </div>
                <div className="password-wrapper flex flex-col gap-2">

                    <div className='flex flex-wrap md:flex-nowrap lg:flex-nowrap gap-4'>
                        
                        <InputBox placeholder="Password" name='password' label="Password" type={showPassword ? "text" : "password"} onChange={handleChange} value={formData.password} />

                        <InputBox placeholder="Confirm password" name="confirmPassword" label="Confirm password" type={showPassword ? "text" : "password"} onChange={handleChange} value={formData.confirmPassword} />

                    </div>

                    <div className='match-indicator'>
                        
                        <p className={`text-red-500 text-sm ${!matchPassword && pwdFilled ? "inline" : "hidden"}`}>Password did not match.</p>
                        
                        <p className={`text-green-500 text-sm ${matchPassword && pwdFilled ? "inline" : "hidden"}`}>Password matched.</p>
                    
                    </div>

                </div>
                <div className="password-show-box-wrapper flex flex-col gap-2">
                    
                    <p className='text-[#666666] text-4'>Use 8 or more characters with a mix of letters, numbers & symbols</p>
                    
                    <div className='show-password'>
                        
                        <Checkbox label="Show password" onChange={(e) => setshowPassword(e.target.checked)} />
                    
                    </div>

                </div>
                <div className="btn-wrapper">
                    <Button type="submit" text="Create an account" classes={isValid && matchPassword && pwdLen ? "bg-[#1591DC]" : "bg-[#dddddd]"} />
                </div>

            </form>

        </div>

    )

}

export default SignUpForm;