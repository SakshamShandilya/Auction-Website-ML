import React from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
import { toast, ToastContainer } from 'react-toastify'
type Props = {}

const GovernmentForm = (props: Props) => {
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
        if (specs["Under Construction"] && specs["Rera Approved"] && specs["Ready to MoveIn"] && specs["Resale"] && specs["Area"] && specs["Rooms"] && specs["City"]) {
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
                    "category": "Government"
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
                "category": "Government"
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
    //     "type": "Hospital",
    //     "address": "Sector 63, Noida"
    //     "builtUpArea": "10,000 sq. m.",
    //     "workDuration": "24 months",
    //     "startMonth": "October 2023",
    //     "completionMonth": "September 2025"
    //     },
    return (
        <div className="mt-8 p-4">
            <ToastContainer />
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "type": e.target.value })}
                        type="text" name="type" id="type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hospital, Road, etc.." required />
                </div>
                <div>
                    <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "address": e.target.value })}
                        type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sector 63, Noida" required />
                </div>
                <div>
                    <label htmlFor="builtUpArea" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Built Up Area</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "builtUpArea": e.target.value })}
                        type="text" name="builtUpArea" id="builtUpArea" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10,000 sq. m." required />
                </div>
                <div>
                    <label htmlFor="workDuration" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Work Duration</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "workDuration": e.target.value })}
                        type="text" name="workDuration" id="workDuration" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="24 months" required />
                </div>

                <div>
                    <label htmlFor="startMonth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Month</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "startMonth": e.target.value })}
                        type="text" name="startMonth" id="startMonth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="October 2023" required />
                </div>
                <div>
                    <label htmlFor="completionMonth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Completion Month</label>
                    <input
                        onChange={(e) => setSpecs({ ...specs, "completionMonth": e.target.value })}
                        type="text" name="completionMonth" id="completionMonth" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="September 2025" required />
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

export default GovernmentForm