"use client";
import React, { useState, useEffect } from "react";
import User from "@/types/User";
import Link from "next/link";

import io from "socket.io-client";
// import "./App.css";

let socket: any;
const CONNECTION_PORT = process.env.NEXT_PUBLIC_CONNECTION_URL || "";

type Props = {};

const Chat = (props: Props) => {
    const [room, setRoom] = useState(
        window.location.href.substr(window.location.href.length - 24)
    );

    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [_, update] = useState(1);

    const [price, setPrice] = useState(0);
    const [bidAmt, setBidAmt] = useState(0);

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [bidList, setBidList] = useState([]);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const usr = JSON.parse(localStorage.getItem("user")).name;
            const uid = JSON.parse(localStorage.getItem("user"))._id;
            setUserName(usr);
            setUserId(uid);
        }
    }, []);

    const user: User = {
        id: "1",
        name: userName,
        email: "JohnDoe@gmail.com",
        mobile: "1234567890",
    };

    useEffect(() => {
        socket = io(CONNECTION_PORT);
        socket.emit(
            "join_room",
            window.location.href.substr(window.location.href.length - 24)
        );
    }, [CONNECTION_PORT]);

    useEffect(() => {
        socket.once("connectToRoom", (data: any) => {
            // console.log(data);
            setPrice(data.price);
            setBidAmt(data.price + 100);
            setBidList(data.history);
        });
        return () => socket.off("connectToRoom");
    });

    useEffect(() => {
        socket.once("receive_message", (data: any) => {
            const temp = messageList;
            temp.push(data);
            setMessageList(temp);
            update(Math.random());
        });
        return () => socket.off("receive_message");
    });

    useEffect(() => {
        socket.on("recieve_bid", (data: any) => {
            // console.log(data);
            setPrice(Number(data.price));
            setBidList(data.history);
        });
    });

    const sendMessage = () => {
        if (message == "") return;
        const messageContent: any = {
            room: room,
            content: {
                author: userName,
                message: message,
            },
        };
        // console.log(1);
        // console.log(userId, userName, messageList);
        socket.emit("send_message", messageContent);
        const temp = messageList;
        temp.push(messageContent.content);
        setMessageList(temp);
        setMessage("");
    };

    const sendBid = (amount: number) => {
        const messageContent = {
            room: room,
            content: {
                date: Date.now(),
                amount: amount,
                name: userName,
            },
            reverse: props.product.category === "Government",
        };
        socket.emit("bid", messageContent);
    };

    return (
        <div className="flex h-screen antialiased text-gray-800 w-full">
            <div className="flex flex-row h-full w-full overflow-x-hidden">
                <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                    <div className="flex flex-row items-center justify-center h-12 w-full">
                        <div className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10">
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                                ></path>
                            </svg>
                        </div>
                        <div className="ml-2 font-bold text-2xl">QuickChat</div>
                    </div>

                    {userId != "" && userName != null ? (
                        <>
                            <div className="flex flex-col items-center bg-indigo-100 border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg">
                                <div className="h-20 w-20 rounded-full border overflow-hidden">
                                    <img
                                        src={`https://avatars.dicebear.com/api/initials/${user?.name}.svg`}
                                        alt="Avatar"
                                        className="h-full w-full"
                                    />
                                </div>
                                <div className="text-sm font-semibold mt-2">
                                    {user?.name}
                                </div>
                                <div className="text-xs text-gray-500">
                                    {user?.bio || "No bio available"}
                                </div>
                                <div className="flex flex-row items-center mt-3">
                                    <div className="flex flex-col justify-center h-4 w-8 bg-indigo-500 rounded-full">
                                        <div className="h-3 w-3 bg-white rounded-full self-end mr-1"></div>
                                    </div>
                                    <div className="leading-none ml-1 text-xs">
                                        Active
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col mt-8">
                                <div className="flex flex-row items-center justify-between text-xs">
                                    <span className="font-bold">
                                        Active Conversations
                                    </span>
                                    <span className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                                        4
                                    </span>
                                </div>
                                <div className="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                                    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                                        <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                                            B
                                        </div>
                                        <div className="ml-2 text-sm font-semibold">
                                            Bike Auction
                                        </div>
                                    </button>
                                    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                                        <div className="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                                            G
                                        </div>
                                        <div className="ml-2 text-sm font-semibold">
                                            Government Auction
                                        </div>
                                        <div className="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                                            2
                                        </div>
                                    </button>
                                    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                                        <div className="flex items-center justify-center h-8 w-8 bg-orange-200 rounded-full">
                                            M
                                        </div>
                                        <div className="ml-2 text-sm font-semibold">
                                            Mobile Auction
                                        </div>
                                    </button>
                                    <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                                        <div className="flex items-center justify-center h-8 w-8 bg-pink-200 rounded-full">
                                            C
                                        </div>
                                        <div className="ml-2 text-sm font-semibold">
                                            Cars Auction
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <Link href="/login">
                            <div className="flex items-center justify-center text-center">
                                <button className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                                    <div className="ml-2 text-sm font-semibold text-mobile">
                                        Login to Chat
                                    </div>
                                </button>
                            </div>
                        </Link>
                    )}
                </div>

                {/* Chat start here */}
                <div className="flex flex-col flex-auto h-full p-6">
                    <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                        <div className="flex flex-col h-full overflow-x-auto mb-4">
                            <div className="flex flex-col h-full">
                                <div className="grid grid-cols-12 gap-y-2">
                                    {Array.isArray(messageList) &&
                                        messageList.length > 0 &&
                                        messageList.map((message, index) => {
                                            return message?.author ==
                                                userName ? (
                                                <div
                                                    key={index}
                                                    className="col-start-6 col-end-13 p-3 rounded-lg"
                                                >
                                                    <div className="flex items-center justify-start flex-row-reverse">
                                                        <img
                                                            className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                            src={`https://avatars.dicebear.com/api/initials/${userName}.svg`}
                                                        />
                                                        <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                                            <div>
                                                                {
                                                                    message?.message
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div
                                                    key={index}
                                                    className="col-start-1 col-end-8 p-3 rounded-lg"
                                                >
                                                    <div className="flex flex-row items-center">
                                                        <img
                                                            className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                                                            src={`https://avatars.dicebear.com/api/initials/${message?.author}.svg`}
                                                        />
                                                        <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                                            <div>
                                                                {
                                                                    message?.message
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                            <div>
                                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-grow ml-4">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                                        onChange={(e) =>
                                            setMessage(e.target.value)
                                        }
                                        value={message}
                                    />
                                    <button className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="ml-4">
                                <button
                                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                                    onClick={sendMessage}
                                >
                                    <span>Send</span>
                                    <span className="ml-2">
                                        <svg
                                            className="w-4 h-4 transform rotate-45 -mt-px"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                            ></path>
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
