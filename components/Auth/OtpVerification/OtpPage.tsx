'use client'
import React, { useEffect, useRef, useState } from 'react'

let currentOTPIndex: number = 0;
const OptPage = () => {
    const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
    const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0);
    const inputRef = useRef<HTMLInputElement>(null)
    const [code, setCode] = useState("");

    const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>): void => {
        const { value } = target;
        const newOTP: string[] = [...otp];
        newOTP[currentOTPIndex] = value.substring(value.length - 1);
        if (!value) setActiveOTPIndex(currentOTPIndex - 1)
        else setActiveOTPIndex(currentOTPIndex + 1);
        setOtp(newOTP)
        let str = newOTP.join('');
        setCode(str);
        console.log(otp, newOTP, str);       
    }

    const handleOnKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        currentOTPIndex = index
        if (key === "Backspace") setActiveOTPIndex(currentOTPIndex - 1);
    }

    const handleOnSubmit = (e: any)=> {
        e.preventDefault();
        console.log(code)
    }

    useEffect(() => {
        inputRef.current?.focus();
    }, [activeOTPIndex])

    return (
        <div>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
                <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                        <div className="flex flex-col items-center justify-center text-center space-y-2">
                            <div className="font-semibold text-3xl">
                                <p>OTP Verification</p>
                            </div>
                            <div className="flex flex-row text-sm font-medium text-gray-400">
                                <p>We have sent a OTP to your number</p>
                            </div>
                        </div>

                        <div>
                            {/* <form action="" method="post"> */}
                            <div className="flex flex-col space-y-16">
                                <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                                    {otp.map((_, index) => {
                                        return (
                                            <React.Fragment key={index}>
                                                <input
                                                    type="text"
                                                    ref={index === activeOTPIndex ? inputRef : null}
                                                    // maxLength={1}
                                                    onChange={handleOnChange}
                                                    onKeyDown={(e) => handleOnKeyDown(e, index)}
                                                    value={otp[index]}
                                                    className="w-14 h-14 rounded-lg bg-transparent outline-none text-center font-semibold spin-button-nonerounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700 transition"
                                                />
                                                {index === otp.length - 1 ? null : (
                                                    <span className="w-2 py-0.5 bg-gray-400" />
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </div>

                                <div className="flex flex-col space-y-5">
                                    <div>
                                        <button className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                                            onClick={()=> handleOnSubmit}
                                        >
                                            Verify Account
                                        </button>
                                    </div>

                                    {/* <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                                            <p>Didn't recieve code?</p> <a className="flex flex-row items-center text-blue-600" href="http://" target="_blank" rel="noopener noreferrer">Resend</a>
                                        </div> */}
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OptPage