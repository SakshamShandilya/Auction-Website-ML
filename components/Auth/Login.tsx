"use client"
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from "next/navigation";
import router from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import LoginPic from '../../src/assets/loginPic.png'

type Props = {};


const Login = (props: Props) => {
    // const DefaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: RegisterPic,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice",
    //     },
    // };

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/login`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ email, password }),
                }
            );

            var res = await response.json();
            console.log(res);
            if (res.success == true) {
                if (typeof window !== 'undefined') {
                    localStorage.setItem("id", res._id);
                    localStorage.setItem("uname", res.data.name);
                    localStorage.setItem("isLogin", "true");
                    localStorage.setItem("user", JSON.stringify(res.data));
                }
                toast.success("Login Successful")
                if(res.isAdmin ==  false){
                    router.push('/')
                    window.location.reload();
                }else{
                    router.push('/admin');
                    window.location.reload();
                }
            } 
            else{
                toast.error("Login Unsuccessful. Something went wrong !!!")
            }

            // setisLoggedIn(true)
            // setuserid(payload.data.user._id);
        } catch (err) {
            console.log(err);
            alert("Something Went Wrong");
        }
        setEmail("");
        setPassword("");
    }
    if (typeof window !== 'undefined') {
        if(localStorage.getItem("isLogin") == "true"){
            router.push('/')
        }
    }

    return (
        <>
            <div className='grid grid-cols-2 bg-gray-50'>
                <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto pl-28 md:h-screen lg:py-0">
                    <div className="md:w-[500px] bg-white rounded-lg drop-shadow-lg">
                        <div className="space-y-4 py-10 px-10">
                            <h1 className="text-2xl text-center pb-3 font-bold leading-tight tracking-tight text-mobile md:text-3xl">
                                Login
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-4">

                                <div>
                                    <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900">Your email</label>
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " placeholder="name@xyz.com" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-base font-medium text-gray-900">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Enter your password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required />
                                </div>


                                <button type="submit" className="w-full text-white bg-mobile hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center ">Login</button>
                                <hr />
                                <p className="text-base font-normal text-gray-800">
                                    Don't have an account yet ? <Link href="/signup" className="font-medium text-lg text-mobile hover:underline dark:text-primary-500">Sign Up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='mt-10 mr-28'>
                    {/* <Lottie options={DefaultOptions} height={650} width={650} /> */}
                    <img src={LoginPic.src} alt="" />
                    <ToastContainer
                        position="top-center"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                    />
                </div>
            </div>
        </>
    );
};

export default Login;
