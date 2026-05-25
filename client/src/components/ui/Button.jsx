import React from 'react'

const Button = (props) => {
	return (
		<div>
			<button
				type={props.type}
				className= {
					`px-6 py-4 rounded-full text-white text-lg duration-200 ease-in-out cursor-pointer 
        			${props.classes}`
				}>
				Create an account
			</button>
		</div>
	)
}

export default Button