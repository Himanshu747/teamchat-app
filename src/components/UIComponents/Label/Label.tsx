import React from "react";

interface labelProps extends  React.LabelHTMLAttributes<HTMLLabelElement>{
    label:string;
}
const Label:React.FC<labelProps>=({label,...otherAttr})=>{
    return(
        <label {...otherAttr}>{label}</label>
    );
}
export default Label;