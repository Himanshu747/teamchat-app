
import React from 'react';

interface InputFieldProps{
    label:string;
    name:string;
    type?:string;
    value:string;
    placeholder:string;
    children:React.ReactNode;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
};
const InputField:React.FC<InputFieldProps>=({label,name,type,value,placeholder,children,onChange})=>{
    return(
        <>
         <label className="font-medium text-gray-700 dark:text-gray-200">{label}</label>
            <div className="flex items-center mt-2 mb-3 rounded-3 bg-slate-50/50 dark:bg-transparent">
                <span className="flex items-center px-4 py-2 text-gray-500 border border-r-0 border-gray-100 rounded rounded-r-none dark:border-zinc-600" id="basic-addon3">
                    {children}
                </span>
                <input type={type} name={name} className="w-full border-gray-100 rounded rounded-l-none placeholder:text-14 bg-slate-50/50 text-14 focus:ring-0 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-200" placeholder={placeholder} aria-label={placeholder} aria-describedby="basic-addon3" value={value} onChange={onChange} autoComplete="off"/>
            </div>
        </>
    );
}
export default InputField;