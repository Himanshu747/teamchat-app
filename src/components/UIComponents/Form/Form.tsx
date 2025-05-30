import React from "react";

interface FormProps extends  React.FormHTMLAttributes<HTMLFormElement>{
    onSubmit:(e:React.FormEvent<HTMLFormElement>)=>void;
    children:React.ReactNode;
}
const Form:React.FC<FormProps>=({onSubmit,children,...otherAttr})=>{
    return (
        <>
        <form onSubmit={onSubmit} {...otherAttr}>
            {children}
        </form>
        </>
    );
}
export default Form;