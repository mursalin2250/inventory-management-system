import React from 'react';

const PasswordCheckBox = (props) => {
    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                name="checkbox"
                id=""
                className='w-4 h-4 accent-[#1591DC]'
                onChange={props.onChange}
            />
            <label htmlFor="" className='text-[#333333]!'>{props.label}</label>
        </div>
    )
};

export default PasswordCheckBox;