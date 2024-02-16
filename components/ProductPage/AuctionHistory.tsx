"use client";

import { Product } from "@/types/Product";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let socket: any;
const CONNECTION_PORT = process.env.NEXT_PUBLIC_CONNECTION_URL || "";
type Props = {
    product: Product;
};

const AuctionHistory = (props: Props) => {
    // const [room, setRoom] = useState(window.location.pathname.split("/")[2]);

    const [room, setRoom] = useState(
        window.location.href.substr(window.location.href.length - 24)
    );

    const [userName, setUserName] = useState<any>("");
    const [userId, setUserId] = useState<any>("");
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const id = localStorage.getItem("id")?.toString();
            const usr = localStorage.getItem("uname")?.toString();
            setUserName(usr);
            setUserId(id);
        }
    }, []);

    const [_, update] = useState(1);

    const [price, setPrice] = useState(0);
    const [bidAmt, setBidAmt] = useState(0);

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);
    const [bidList, setBidList] = useState([]);

    useEffect(() => {
        socket = io(CONNECTION_PORT);
        socket.emit(
            "join_room",
            window.location.href.substr(window.location.href.length - 24)
        );
    }, [CONNECTION_PORT]);

    useEffect(() => {
        socket.once("connectToRoom", (data: any) => {
            console.log(data);
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
            // console.log(usr, userId);
        });
    });

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
        <div className="w-full bg-white shadow-lg rounded-sm border border-gray-200 max-w-[100vw]">
            <header className="px-5 py-4 border-b border-gray-100">
                <h2 className="font-semibold text-gray-800 text-xl">
                    Bid History
                </h2>
            </header>
            <div className="p-3">
                <div className="overflow-x-auto max-h-[400px]">
                    <table className="table-auto w-full">
                        <thead className="sticky top-0 text-base font-medium uppercase text-mobile bg-mobile-light">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-medium text-left">
                                        Name
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-medium text-left">
                                        Date
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        Spent
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100 max-h-[400px] overflow-y-auto">
                            {bidList?.map((bid: any, index: number) => {
                                return (
                                    <tr key={index}>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                    <img
                                                        className="rounded-full"
                                                        src={`https://avatars.dicebear.com/api/initials/${bid?.name}.svg`}
                                                        width={40}
                                                        height={40}
                                                        alt="Alex Shatov"
                                                    />
                                                </div>
                                                <div className="font-medium text-gray-800">
                                                    {bid?.name}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left">
                                                {String(new Date(bid?.date))}
                                            </div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left font-medium text-mobile">
                                                {bid?.amount}
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AuctionHistory;
