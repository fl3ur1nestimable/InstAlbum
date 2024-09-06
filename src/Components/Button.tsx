import React from 'react'

interface ButtonProps {
    text: string;
}


const Button: React.FC<ButtonProps> = ({ text }) => {
    return (
        <button className='rounded-md border-rose border-4 bg-blue-dark p-4 text-white hover:bg-white hover:text-blue-dark'>
            {text}
        </button>
    )
}

export default Button
