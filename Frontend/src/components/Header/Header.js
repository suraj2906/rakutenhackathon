import React from 'react';
// import Button from "../UI/Button/Button";
import './Header.css';
import {AdjustmentsIcon, MenuAlt3Icon} from "@heroicons/react/outline";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, provider} from "../../firebase";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import {signInWithPopup} from 'firebase/auth';

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const signIn = (e) => {
        e.preventDefault();
        signInWithPopup(auth, provider)
            .then((result) => {
                navigate('/homepage')
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // const user = result.user;
            }).catch((error) => alert(error.message));
    };

    return (
        <header className="flex bg-[#DCF9FD] items-center justify-between py-4 px-6 mb-1 w-screen">
            <a href="/">
                <img
                    src={require("../Assets/MetaData.png")}
                    className="w-32 h-12 object-contain"
                    alt="Hello"
                />
            </a>
            <div className="hidden flex lg:flex space-x-6">
                <a href="/" className="navbar__link">Home</a>
                <a href="/" className="navbar__link">Community</a>
                <a href="/" className="navbar__link">Notifications</a>
            </div>
            <div className="flex space-x-4">
                <button
                    className="bg-[#3D5A80] p-2 rounded-md text-white text-lg px-12 focus:outline-none hover:shadow-2xl transition duration-200 ease-in-out whitespace-nowrap font-medium"
                    onClick={!user ? signIn : () => navigate('/homepage')}>


                    {!user ? "Login" : "Want to work?"}
                </button>
                <img className="h-10 w-10 profile__img rounded-full"
                     src="https://thumbs.dreamstime.com/b/rainbow-love-heart-background-red-wood-60045149.jpg" alt=""/>
                <AdjustmentsIcon className='h-10 text-[#72767d]'/>
                <MenuAlt3Icon className="h-9 text-[#741188] cursor-pointer lg:hidden"/>

            </div>
        </header>
    );
};

export default Header;