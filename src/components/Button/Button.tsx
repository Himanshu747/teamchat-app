import React from "react";
import { ButtonType } from "./ButtonType";

type ButtonProps={
    type:ButtonType;
    buttonText:string;
    className:string;
    onClick?:()=>void;
}

const Button:React.FC<ButtonProps>=({type,buttonText,className,onClick})=>{
    return (
        <>
         <button className={className} type={type} onClick={onClick}>{buttonText}</button>
        </>
    );
}
export default Button;