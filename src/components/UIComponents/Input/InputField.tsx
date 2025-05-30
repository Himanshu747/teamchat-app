
import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void;
};
const InputField:React.FC<InputFieldProps>=({onChange,...otherAttr})=>{
    return(
        <>
          <input onChange={onChange} {...otherAttr}/>
        </>
    );
}
export default InputField;