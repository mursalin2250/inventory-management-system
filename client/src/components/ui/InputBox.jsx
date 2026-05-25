import React from 'react'

const InputBox = (props) => {
	return (
		<div className='input-field w-full flex flex-col gap-1'>
			<label htmlFor="">{props.label}</label>
			<input
				name={props.name}
				type={props.type}
				value={props.value} 
				onChange={props.onChange}
				placeholder={props.placeholder}
				className={
					`${props.classes ? props.classes : ""} 
					w-full h-14 px-4 border border-[#C4C4C4] rounded-lg duration-200 ease-in-out focus:outline-none focus:border-[#1591DC] `} 
			/>
		</div>
	)
}

export default InputBox