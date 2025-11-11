"use client";


const Button = ({ children, onClick, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2  bg-linear-to-r from-purple-900 to-purple-800 text-white rounded-lg hover:bg-linear-to-l transition hover:scale-105 duration-300 cursor-pointer ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;