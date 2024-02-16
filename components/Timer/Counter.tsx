"use client";
import { useEffect, useState } from "react";
import { calculateTimeLeft } from "../../src/utils/TimeCounter";

import "./timer-styles.css";

type Props = {
    endDate: string;
};
export const Counter = (props: Props) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        let date = new Date(props?.endDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        const endDate = new Date(`${year}-${month}-${day}`);

        // console.log(day);

        setTimeout(() => setTimeLeft(calculateTimeLeft(endDate)), 1000);
    }, [timeLeft]);

    return (
        <div className="counter">
            <div className="counter-item bg-mobile">
                <span className="value">
                    {String(timeLeft?.days)?.padStart(2, "0")}
                </span>
                <span className="label">Days</span>
            </div>

            <div className="counter-item bg-mobile">
                <span className="value">
                    {String(timeLeft?.hours)?.padStart(2, "0")}
                </span>
                <span className="label">Hours</span>
            </div>

            <div className="counter-item bg-mobile">
                <span className="value">
                    {String(timeLeft?.minutes)?.padStart(2, "0")}
                </span>
                <span className="label">Minutes</span>
            </div>

            <div className="counter-item bg-mobile">
                <span className="value">
                    {String(timeLeft?.seconds)?.padStart(2, "0")}
                </span>
                <span className="label">Seconds</span>
            </div>
        </div>
    );
};
