import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
import { toast } from 'react-toastify'
type Props = {}

const LaptopForm = (props: Props) => {
    // specs is a object with key value pair of specs
    const { setFormNumber, specs, brand, setSpecs, price, setPrice, soldDate, setSoldDate } = useContext(AppContext)
    const submitHandler = () => {
        console.log({
            "specs": specs,
            "price": price,
            "soldDate": soldDate
        })
        setFormNumber(3)
    }
    const handelDateTime = (e: any) => {
        const event = new Date(e.target.value);
        const newDate = event.toISOString();
        setSoldDate(newDate)
    }
    const predictPrice = () => {
        // fetch predicted initail bid (price) from backend based on all specs
        if (specs["CPU"] && specs["GPU Brand"] && specs["Battery (Wh)"] && specs["Ram (GB)"] && specs["SSD (GB)"] && specs["HDD (GB)"] && specs["Display Resolution (pixels)"] && specs["Weight (KG)"]) {
            // fetch predicted price from backend
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/predict`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "specs": {
                        ...specs,
                        "brand": brand
                    },
                    "category": "Laptops"
                })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.success) {
                        setPrice(data["message"])
                        toast.success("😀 Successfully predicted bid price for these specs!")
                    } else {
                        toast.error("😓 Unable to predict bid price for these specs!")
                    }
                })
                .catch(err => {
                    toast.error("😓 Unable to predict bid price for these specs!")
                    console.log(err)
                })
        }
    }

    const predictEndDate = () => {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/predict-soldDate`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "category": "Laptops"
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.success) {
                    // setSoldDate(data["message"])
                    const event = new Date(data["message"]);
                    const newDate = event.toISOString().slice(0, 16);
                    setSoldDate(newDate)
                    toast.success("😀 Successfully predicted bid price for these specs!")
                } else {
                    toast.error("😓 Unable to predict bid price for these specs!")
                }
            })
            .catch(err => {
                toast.error("😓 Unable to predict bid price for these specs!")
                console.log(err)
            })
    }
    // specs format
    //   "specs": {
    //     "Display (Inch)": 14, >
    //     "Ram (GB)": 8, >
    //     "Weight (KG)": 1.4, >
    //     "CPU": "Intel Core i7", >
    //     "GPU Brand": "Intel",  >
    //     "SSD (GB)": 512,  
    //     "HDD (GB)": 0,
    //     "Display Resolution (pixels)": 1080,
    //     "Battery (Wh)": 42 >
    // },
    return (
        <div className="mt-8 p-4">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="os" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CPU</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "CPU": e.target.value })}
                        type="text" name="cpu" id="cpu" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intel Core i7" required />
                </div>
                <div>
                    <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">GPU Brand</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "GPU Brand": e.target.value })}
                        type="text" name="color" id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intel" required />
                </div>
                <div>
                    <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Battery</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Battery (Wh)": parseInt(e.target.value) })}
                        type="number" min={0} name="battery" id="battery" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5000" required />
                </div>
                <div>
                    <label htmlFor="ram" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ram (GB)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Ram (GB)": parseInt(e.target.value) })}
                        type="number" min={0} name="ram" id="ram" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8" required />
                </div>
                <div>
                    <label htmlFor="ssd" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">SSD (GB)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "SSD (GB)": parseInt(e.target.value) })}
                        type="number" min={0} name="ssd" id="ssd" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="512" required />
                </div>
                <div>
                    <label htmlFor="hdd" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">HDD (GB)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "HDD (GB)": parseInt(e.target.value) })}
                        type="number" min={0} name="internal-storage" id="internal-storage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1024" required />
                </div>
                <div>
                    <label htmlFor="display" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display Resolution (pixels)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Display Resolution (pixels)": parseFloat(e.target.value) })}
                        type="number" min={0} name="display-res" id="display-res" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1080" required />
                </div>
                <div>
                    <label htmlFor="display" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display (Inch)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Display (Inch)": parseFloat(e.target.value) })}
                        type="number" min={0} step="0.01" name="display" id="display" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="13.6" required />
                </div>
                <div>
                    <label htmlFor="display" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (KG)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Weight (KG)": parseFloat(e.target.value) })}
                        type="number" min={0} name="display" id="display" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1.4" required />
                </div>
            </div>
            <hr className=" bg-gray-200 w-full my-4" />
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Initial Bid</label>
                    <div className='flex space-x-2'>
                        <button
                            onClick={() => { predictPrice() }}
                            className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition">Predict</button>
                        <input
                            onChange={(e) => setPrice(e.target.value)}
                            value={price}
                            type="text" name="bid" id="bid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3500" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                    <div className='flex space-x-2'>
                        <button
                            onClick={() => { predictEndDate() }}
                            className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition">Predict</button>
                        <input
                            onChange={handelDateTime}
                            value={soldDate}
                            type="datetime-local" name="end-date" id="end-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DD-YY-MM" required />
                    </div>
                </div>
            </div>
            <div className="flex p-2 mt-4">
                <button
                    onClick={() => { setFormNumber(1) }}
                    className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile-light bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Previous</button>
                <div className="flex-auto flex flex-row-reverse">
                    <button
                        onClick={() => { submitHandler() }}
                        className="text-base ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition">Next</button>
                    {/* <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile hover:text-white bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Skip</button> */}
                </div>
            </div>
        </div>
    )
}

export default LaptopForm