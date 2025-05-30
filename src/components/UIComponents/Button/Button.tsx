import React from "react";
import { ButtonType } from "./ButtonType";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    type:ButtonType;
    buttonText:string;
    className:string;
    onClick?:()=>void;
}

const Button:React.FC<ButtonProps>=({buttonText,onClick,...otherAttr})=>{
    return (
        <>
         <button onClick={onClick} {...otherAttr}>{buttonText}</button>
        </>
    );
}
export default Button;