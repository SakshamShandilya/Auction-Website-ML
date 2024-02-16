import React from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
import { toast, ToastContainer } from 'react-toastify'
type Props = {}

const BikeForm = (props: Props) => {
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
    if (specs["Age (years)"] && specs["transmission"] && specs["Owner"] && specs["Fuel Capacity (14L)"] && specs["Power (CC)"] && specs["Fuel"] && specs["Kilometers Driven"] && specs["Mileage (KMPL)"]) {
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
          "category": "Bikes"
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
        "category": "Bikes"
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
  //     "Age (years)": 2023,
  //     "transmission": "automatic",
  //     "Owner": "first",
  //     "Fuel Capacity (14L)": 14,
  //     "Power (CC)": 162.7,
  //     "Fuel": "Petrol",
  //     "Kilometers Driven": 200,
  //     "Mileage (KMPL)": 33
  // },
  return (
    <div className="mt-8 p-4">
      <ToastContainer />
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age (years)</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Age (years)": parseInt(e.target.value) })}
            type="number" name="age" id="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2023" required />
        </div>
        <div>
          <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Transmission</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "transmission": e.target.value })}
            type="text" name="transmission" id="transmission" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="automatic" required />
        </div>
        <div>
          <label htmlFor="owner" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Owner</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Owner": e.target.value })}
            type="text" name="owner" id="owner" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first" required />
        </div>
        <div>
          <label htmlFor="fuel-type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fuel</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Fuel": e.target.value })}
            type="text" name="fuel-type" id="fuel-type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Petrol" required />
        </div>
        <div>
          <label htmlFor="fuel" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fuel Capacity (14L)</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Fuel Capacity (14L)": parseInt(e.target.value) })}
            type="number" min={0} name="fuel" id="fuel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="14" required />
        </div>
        <div>
          <label htmlFor="power" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Power (CC)</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Power (CC)": parseInt(e.target.value) })}
            type="number" min={0} name="power" id="power" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="162.7" required />
        </div>
        <div>
          <label htmlFor="km-driven" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kilometers Driven</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Kilometers Driven": parseInt(e.target.value) })}
            type="number" min={0} name="km-driven" id="km-driven" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="200" required />
        </div>
        <div>
          <label htmlFor="mileage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mileage (KMPL)</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Mileage (KMPL)": parseFloat(e.target.value) })}
            type="number" min={0} step="0.01" name="mileage" id="mileage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="33" required />
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

export default BikeForm