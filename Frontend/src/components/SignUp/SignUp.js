import React from 'react';
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import './SignUp.css'

const SignUp = () => {
    return (
        <>
            <div className="signup-page">
                <div className="flex w-screen h-screen justify-between items-center">
                    <div className="mx-auto login-page__img flex justify-center text-center">
                        <img className="w-[80vh] text-center" src={require("../Assets/signup.png")} alt=""/>

                    </div>
                    <div className="flex-col">
                        <div className="flex flex-col justify-center w-[100vh] h-[100vh] py-10 px-[15%] signup__box text-center ">


                                <h1 className="signup-heading">MetaData</h1>


                                <span className="block text-left font-[iceland] signup-text">Signup</span>
                                <hr className="my-3 w-[25%] border-2 border-black"/>
                                <p className="text-left font-[Montserrat] font-[300] text-[20px]">Welcome onboard with
                                    us!</p>
                                <form className="flex-col gap-[40px] justify-between mt-10">
                                    <p className="text-left font-[Montserrat] mt-4 mb-2 font-[400]">Username</p>
                                    <input
                                        className="signup__input text-left px-4 py-2 w-full text-[20px] placeholder:font-[Montserrat] font-[500] font-[15px] focus:outline-none"
                                        placeholder="Enter your username"
                                        type="text"
                                        name="username"/>
                                    <p className="text-left font-[Montserrat] mt-4 mb-2 font-[400]">Email</p>
                                    <input
                                        className="signup__input text-left px-4 py-2 w-full text-[20px] placeholder:font-[Montserrat] font-[500] font-[15px] focus:outline-none"
                                        placeholder="Enter your email"
                                        type="email"
                                        name="email"/>
                                    <p className="text-left font-[Montserrat] mt-4 mb-2 font-[400]">Password</p>
                                    <input
                                        className="signup__input text-left px-4 py-2 w-full text-[20px] placeholder:font-[Montserrat] font-[500] font-[15px] focus:outline-none"
                                        placeholder="Enter your username"
                                        type="password"
                                        name="password"/>

                                    <Button className="w-full my-10">Signup</Button>

                                </form>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default SignUp;