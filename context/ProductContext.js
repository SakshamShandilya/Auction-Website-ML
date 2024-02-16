import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [product, setProduct] = useState({});
    const [cars, setCars] = useState([]);
    const [bikes, setBikes] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [realestates, setRealestates] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [govt, setGovt] = useState([]);


    const getCars = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get-cars`);
        const data = await res.json();
        if (data.success) setCars(data.message);
    }

    const getBikes = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get-bikes`);
        const data = await res.json();
        if (data.success) setBikes(data.message);
    }

    const getMobiles = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get-mobiles`);
        const data = await res.json();
        if (data.success) setMobiles(data.message);
    }

    const getRealestates = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get-properties`);
        const data = await res.json();
        if (data.success) setRealestates(data.message);
    }

    const getLaptops = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get-laptops`);
        const data = await res.json();
        if (data.success) setLaptops(data.message);
    }

    const getGovernment = async () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get-government`, requestOptions)
            .then(response => response.json())
            .then(response => setGovt(response.message))
            .catch(error => error);
    }

    const getAllProducts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/get`);
        const data = await res.json();
        if (data.success) setProducts(data.message);
    }

    return (
        <ProductContext.Provider value={{
            cars,
            bikes,
            mobiles,
            realestates,
            laptops,
            govt,
            products,
            setCars,
            setBikes,
            setMobiles,
            setRealestates,
            setLaptops,
            setGovt,
            setProducts,
            getCars,
            getBikes,
            getMobiles,
            getRealestates,
            getLaptops,
            getAllProducts,
            getGovernment,

        }}>
            {children}
        </ProductContext.Provider>
    )
}