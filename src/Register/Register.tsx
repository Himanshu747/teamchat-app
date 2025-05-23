import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import InputField from '../components/UIComponents/Input/InputField';
import AppLink from '../components/UIComponents/AppLink/AppLink';
import Button from '../components/UIComponents/Button/Button';
import { ButtonType } from '../components/UIComponents/Button/ButtonType';
import Form from '../components/UIComponents/Form/Form';

interface FormData {
    firstName: string;
    userName: string;
    passWord: string;
}
const Register: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        userName: '',
        passWord: ''
    });
    const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const submitData = (e: FormEvent) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <>

            <div className="w-full h-full">
                <div className="px-5 py-24 sm:px-24 lg:px-0">
                    <div className="grid items-center justify-center grid-cols-1 lg:grid-cols-12 auth-bg">
                        <div className="mx-5 lg:mx-20 lg:col-start-5 lg:col-span-4">
                            <div className="text-center">
                                {/* <a href="index.html" className="block mb-10"> */}
                                <img src="assets/images/logo-dark.png" alt="" className="block h-8 mx-auto dark:hidden" />
                                <img src="assets/images/logo-light.png" alt="" className="hidden h-8 mx-auto logo-light dark:block" />
                                {/* </a> */}

                                <h4 className="mb-2 text-gray-800 text-21 dark:text-gray-50">Sign up</h4>
                                <p className="mb-6 text-gray-500 dark:text-gray-300">Get your Chatvia account now.</p>
                            </div>
                            <div className="bg-white card dark:bg-zinc-800 dark:border-transparent">
                                <div className="p-5">
                                    <div className="p-4">
                                        <Form onSubmit={submitData}>
                                            <div className="mb-5">
                                                <InputField
                                                    type='text'
                                                    label='Email'
                                                    name="firstName"
                                                    placeholder='Enter Email'
                                                    children={<i className="ri-mail-line text-16"></i>}
                                                    value={formData.firstName}
                                                    onChange={handleChangeInput}
                                                />

                                            </div>

                                            <div className="mb-5">
                                                <InputField
                                                    type='text'
                                                    label='Username'
                                                    name="userName"
                                                    placeholder='Enter Username'
                                                    children={<i className="ri-user-2-line text-16"></i>}
                                                    value={formData.userName}
                                                    onChange={handleChangeInput}
                                                />

                                            </div>

                                            <div className="mb-6">
                                                <InputField
                                                    type='password'
                                                    label='Password'
                                                    name="passWord"
                                                    placeholder='Enter Password'
                                                    children={<i className="ri-lock-2-line text-16"></i>}
                                                    value={formData.passWord}
                                                    onChange={handleChangeInput}
                                                />

                                            </div>

                                            <div className="grid">
                                                <Button type={ButtonType.Submit} className="py-2 text-white border-transparent btn bg-violet-500 hover:bg-violet-600 text-16" buttonText='Sign up' />
                                            </div>

                                            <div className="mt-5 text-center">
                                                <p className="mb-0 text-gray-500 dark:text-gray-300">By registering you agree to the Chatvia <a href="#" className="text-violet-500">Terms of Use</a></p>
                                            </div>

                                        </Form>

                                    </div>
                                </div>
                            </div>

                            <div className="mt-10 text-center">
                                <p className="mb-5 text-gray-700 dark:text-gray-200">Don't have an account ?
                                    <AppLink className="fw-medium text-violet-500" lableText="Login" />
                                    {/* <Link to={'/'} className="fw-medium text-violet-500">Login</Link> 
                                         */}
                                </p>
                                <p className="text-gray-700 dark:text-gray-200">©
                                    <script>document.write(new Date().getFullYear())</script> Chatvia. Crafted with <i className="text-red-500 mdi mdi-heart"></i> by Themesbrand
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Register;