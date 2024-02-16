"use client";

import React from "react";
import ReactLoading from "react-loading";

type Props = {};
const LoadingComponent = (props: Props) => (
    <ReactLoading
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        type="spin"
        color="blue"
        height={80}
        width={160}
    />
);

export default LoadingComponent;
