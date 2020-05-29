import React from 'react';
import { CircleSpinner } from "react-spinners-kit";
import './navbar.css';

const SpinnerX = () => {
    return (
    <div className="spinner text-center">
        <CircleSpinner size={30} color="#686769" />
    </div>
    ) 
}
export default SpinnerX
