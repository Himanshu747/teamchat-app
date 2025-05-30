import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import AppLink from "../components/UIComponents/AppLink/AppLink";
import InputField from "../components/UIComponents/Input/InputField";
import Button from "../components/UIComponents/Button/Button";
import { ButtonType } from "../components/UIComponents/Button/ButtonType";
import Form from "../components/UIComponents/Form/Form";
import Label from "../components/UIComponents/Label/Label";
interface LoginFormData {
    userName: string;
    passWord: string;
}
const Login:React.FC=()=>{
    const [loginFormData, setloginFormData] = useState<LoginFormData>({
            userName: '',
            passWord: ''
        });
        const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
            const { name, value, type } = e.target;
            setloginFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        };
        const submitData = (e: FormEvent) => {
            e.preventDefault();
            console.log(loginFormData);
        };
    return(
        <>
        <div className="w-full h-full">
        <div className="px-5 py-24 sm:px-24 lg:px-0">
            <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-12 auth-bg">
                <div className="mx-5 lg:mx-20 lg:col-start-5 lg:col-span-4">
                    <div className="text-center">
                       
                            <img src="assets/images/logo-dark.png" alt="" className="block h-8 mx-auto dark:hidden"/>
                            <img src="assets/images/logo-light.png" alt="" className="hidden h-8 mx-auto logo-light dark:block"/>
                    
                        <h4 className="mb-2 text-gray-800 text-21 dark:text-gray-50">Sign in</h4>
                        <p className="mb-6 text-gray-500 dark:text-gray-300">Sign in to continue to Chatvia.</p>
                    </div>
                    <div className="bg-white card dark:bg-zinc-800 dark:border-transparent">
                        <div className="p-5">
                            <div className="p-4">
                                 <Form onSubmit={submitData}>
                                    <div className="mb-5">
                                        <Label className="font-medium text-gray-700 dark:text-gray-200" label="Username"/>
                                        <div className="flex items-center mt-2 mb-3 rounded-3 bg-slate-50/50 dark:bg-transparent">
                                            <span className="flex items-center px-4 py-2 text-gray-500 border border-r-0 border-gray-100 rounded rounded-r-none dark:border-zinc-600" id="basic-addon3">
                                                <i className="ri-lock-2-line text-16"></i>
                                            </span>

                                            <InputField
                                                    type='text'
                                                    name="userName"
                                                    placeholder='Enter Username'
                                                    value={loginFormData.userName}
                                                    onChange={handleChangeInput}
                                                    className="w-full border-gray-100 rounded rounded-l-none placeholder:text-14 bg-slate-50/50 text-14 focus:ring-0 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-200"
                                                    autoComplete="off"
                                                />
                                        </div>

                                        

                                      
                                    </div>
                    
                                    <div className="mb-6">
                                           <Label className="font-medium text-gray-700 dark:text-gray-200" label="Password"/>
                                        <div className="float-right">
                                            <a href="auth-recoverpw.html" className="text-gray-500 text-13 ">Forgot password?</a>
                                        </div>

                                        <div className="flex items-center mt-2 mb-3 rounded-3 bg-slate-50/50 dark:bg-transparent">
                                            <span className="flex items-center px-4 py-2 text-gray-500 border border-r-0 border-gray-100 rounded rounded-r-none dark:border-zinc-600" id="basic-addon3">
                                                <i className="ri-lock-2-line text-16"></i>
                                            </span>
                                                <InputField
                                                    type='password'
                                                    name="passWord"
                                                    placeholder='Enter Password'
                                                    value={loginFormData.passWord}
                                                    onChange={handleChangeInput}
                                                    className="w-full border-gray-100 rounded rounded-l-none placeholder:text-14 bg-slate-50/50 text-14 focus:ring-0 dark:bg-zinc-700 dark:border-zinc-600 dark:text-gray-200"
                                                    autoComplete="off"
                                                />
                                         </div>
                                    </div>
                    
                                    <div className="flex items-center mb-6">
                                         <InputField
                                             type="checkbox" 
                                             className="border-gray-100 rounded focus:ring-1 checked:ring-1 focus:ring-offset-0 focus:outline-0 checked:bg-violet-500 dark:bg-zinc-600 dark:border-zinc-600 dark:checked:bg-violet-500 "
                                             id="memberCheck1"
                                         />
                                         <Label className="font-medium text-gray-700 ltr:ml-2 rtl:mr-2 dark:text-gray-200" label="Remember me"/>
                                    </div>
                    
                                    <div className="grid">
                                        <Button type={ButtonType.Submit} className="py-2 text-white border-transparent btn bg-violet-500 hover:bg-violet-600 text-16" buttonText='Sign in'/>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-10 text-center">
                        <p className="mb-5 text-gray-700 dark:text-gray-200">Don't have an account ? 
                              <AppLink linkUrl="/register" className="fw-medium text-violet-500" lableText="Signup now"/>
                           </p>
                        <p className="text-gray-700 dark:text-gray-200">© <script>document.write(new Date().getFullYear())</script> Chatvia. Crafted with <i className="text-red-500 mdi mdi-heart"></i> by Themesbrand</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default Login;