"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import router from "next/router";
// import { Navigate, useNavigate } from '';
import { useRouter } from "next/navigation";
import LoginPic from "../../src/assets/loginPic.png";

type Props = {};
const Signup = (props: Props) => {
  // const DefaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: RegisterPic,
  //     rendererSettings: {
  //         preserveAspectRatio: "xMidYMid slice",
  //     },
  // };

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("+91");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (name.length < 3) {
      toast.error("Name must contain atleast 3 characters");
      return;
    } else if (password.length < 5) {
      toast.error("Password must contain atleast 6 characters");
      return;
    } else if (mobile.length < 10) {
      toast.error("Please write 10 digit mobile number");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            name,
            mobile,
            address,
            password,
          }),
        }
      );

      var res = await response.json();
      console.log(res);
      toast.success("User created successfully");
      router.push("/login");
    } catch (err) {
      console.log(err);
      toast.error("Something Went Wrong");
    }
  };
  return (
    <>
      <div className="grid grid-cols-2 bg-gray-50">
        <div className="w-full flex flex-col items-center justify-center px-6 py-8 mx-auto pl-28 md:h-screen lg:py-0">
          <div className="w-[500px] bg-white rounded-lg drop-shadow-lg">
            <div className="space-y-2 py-10 px-10">
              <h1 className="text-2xl pb-3 text-center font-bold leading-tight tracking-tight text-mobile md:text-2xl">
                Sign Up
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    User name
                  </label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="mobile"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Mobile number
                  </label>
                  <input
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    type="text"
                    name="mobile"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="name@xyz.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Create password of atleast 6 characaters"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="addres"
                    className="block mb-1 text-base font-medium text-gray-900"
                  >
                    Address
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    name="address"
                    id="password"
                    placeholder="Write your address..."
                    rows={2}
                    cols={40}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-mobile hover:bg-violet-600 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                >
                  Sign Up
                </button>
                <hr />
                <p className="text-base font-normal text-gray-800">
                  Alreay have an account ?{" "}
                  <a
                    href="/login"
                    className="font-medium text-lg text-mobile hover:underline "
                  >
                    Login
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-10 mr-28">
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

export default Signup;
