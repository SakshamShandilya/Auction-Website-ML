import React from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
import { toast, ToastContainer } from 'react-toastify'
type Props = {}

const MobileForm = (props: Props) => {
    // specs is a object with key value pair of specs
    const { setFormNumber, brand, specs, setSpecs, price, setPrice, soldDate, setSoldDate } = useContext(AppContext)
    const [localDate, setLocalDate] = React.useState("")
    const submitHandler = () => {
        console.log({
            "specs": specs,
            "price": price,
            "soldDate": soldDate
        })
        if(!price || !soldDate){
            toast.error("😓 Please fill all the fields!")
            return
        }
        setFormNumber(3)
    }
    const handelDateTime = (e: any) => {
        // check if date is after 24 hrs from now
        setLocalDate(e.target.value)
        if (new Date(e.target.value).getTime() < new Date().getTime() + 86400000) {
            toast.error("😓 Please select a date after 24 hours from now!")
            setLocalDate("")
            return
        }
        const event = new Date(e.target.value);
        const newDate = event.toISOString();
        setSoldDate(newDate)
    }

    const predictPrice = () => {
        // fetch predicted initail bid (price) from backend based on all specs
        if (specs["OS"] && specs["Color"] && specs["Ram (GB)"] && specs["Internal Storage (GB)"] && specs["Rear Camera (MP)"] && specs["Front Camera (MP)"] && specs["Display (Inch)"] && specs["Processor"] && specs["Battery"] && specs["Connectivity"]) {
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
                    "category": "Mobiles"
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
                "category": "Mobiles"
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
    // "specs": {
    //     "Ram (GB)": 8,
    //     "Internal Storage (GB)": 128,
    //     "Rear Camera (MP)": 64,
    //     "Front Camera (MP)": 20,
    //     "Display (Inch)": 6.2,
    //     "Processor": "Exynos 2200",
    //     "Battery": 4000,
    //     "Connectivity": "5G",
    //     "OS": "Android",
    //     "Color": "Gray"
    // },
    return (
        <div className="mt-8 p-4">
            <ToastContainer />
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="os" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Operating System</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "OS": e.target.value })}
                        type="text" name="os" id="os" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Andriod" required />
                </div>
                <div>
                    <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Color": e.target.value })}
                        type="text" name="color" id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dark Blue" required />
                </div>
                <div>
                    <label htmlFor="processor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Processor</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Processor": e.target.value })}
                        type="text" name="processor" id="processor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Exynos 2200" required />
                </div>
                <div>
                    <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Battery</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Battery": parseInt(e.target.value) })}
                        type="number" min={0} name="battery" id="battery" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5000" required />
                </div>
                <div>
                    <label htmlFor="ram" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ram (GB)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Ram (GB)": parseInt(e.target.value) })}
                        type="number" min={0} name="ram" id="ram" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8" required />
                </div>
                <div>
                    <label htmlFor="internal-storage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Internal Storage (GB)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Internal Storage (GB)": parseInt(e.target.value) })}
                        type="number" min={0} name="internal-storage" id="internal-storage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="128" required />
                </div>
                <div>
                    <label htmlFor="display" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display (Inch)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Display (Inch)": parseFloat(e.target.value) })}
                        type="number" min={0} step="0.01" name="display" id="display" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="6.2" required />
                </div>
                <div>
                    <label htmlFor="connectivity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Connectivity</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Connectivity": e.target.value })}
                        type="text" name="connectivity" id="connectivity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5G" required />
                </div>
                <div>
                    <label htmlFor="rear-camera" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rear Camera (MP)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Rear Camera (MP)": parseInt(e.target.value) })}
                        type="number" min={0} name="rear-camera" id="rear-camera" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="64" required />
                </div>
                <div>
                    <label htmlFor="front-camera" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Front Camera (MP)</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "Front Camera (MP)": parseInt(e.target.value) })}
                        type="number" min={0} name="front-camera" id="front-camera" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20" required />
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
                    {/* <button
                        className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile hover:text-white bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Skip</button> */}
                </div>
            </div>
        </div>
    )
}

export default MobileForm