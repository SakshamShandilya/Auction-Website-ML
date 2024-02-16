import React, { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
import { RxCrossCircled } from 'react-icons/rx'
import { ToastContainer, toast } from 'react-toastify';
type Props = {}

const Product = (props: Props) => {
  const { category, setCategory, productName, setProductName, productDescription, setProductDescription, condition, setCondition, brand, setBrand, location, setLocation, tags, setTags, formNumber, setFormNumber } = useContext(AppContext)
  // const [tags, setTags] = useState<string[]>([])
  const [tag, setTag] = useState<string>("")

  const handleSubmit = () => {
    setFormNumber(2)
  }

  return (
    <div className="mt-8 p-4">
      <ToastContainer />
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label htmlFor="product-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{
          category === "Real-Estate" ? "Property" : category === "Government" ? "Tender" : "Product"} Name</label>
          <input
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            type="text" name="product-name" id="product-name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${
              category === "Real-Estate" ? "Property" : category === "Government" ? "Tender" : "Product"} name`} required />
        </div>
        {
          category === "Real-Estate" || category === "Government" ||
          <div>
            <label htmlFor="brand" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              type="text" name="brand" id="brand" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Product brand" required />
          </div>
        }
        <div>
          <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text" name="location" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mumbai, India" required />
        </div>
        {
          category !== "Government" &&
          <div>
            <label htmlFor="condition" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Condition</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
              name="condition" id="condition" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
              {
                category === "Real-Estate" ?
                  <>
                    <option value="Newily built">Newly built</option>
                    <option value="Pre owned">Pre owned</option>
                    <option value="Requires Repairs">Requires Repair</option>
                  </>
                  :
                  <>
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                    <option value="For Parts">For Parts</option>
                  </>
              }
            </select>
          </div>
        }
        <div>
          <div className='flex flex-wrap gap-2'>
            {
              tags && tags.map((tag: any, index: number) => (
                <span key={index}
                  onClick={() => setTags(tags.filter((t: any) => t !== tag))}
                  className="inline-flex items-center px-2.5 py-1 rounded-full border-1 border-mobile text-md font-medium bg-mobile-light text-mobile mr-2">
                  {tag}
                  <RxCrossCircled className="ml-1" size={16} />
                </span>
              ))
            }
          </div>
          <label htmlFor="tags" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tags</label>
          <div className='flex space-x-2 items-center'>
            <input
              onChange={(e) => setTag(e.target.value)}
              value={tag}
              type="text" name="tags" id="tags" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={`${
                category === "Real-Estate" ? "Dream House, Well furnished, etc.." : category === "Government" ? "Contarctor, Purchasing, etc.." : "Fast Processor 🔥, Good Camera, etc.."}`} required />
            <button
              onClick={() => {
                if (tag === "") return
                if (tags?.includes(tag)) return
                if (tags?.length === 11) {
                  // return toast.error("Maximum 10 tags are allowed")
                  return toast('❌ Maximum 10 tags are allowed!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
                }
                setTags([...tags, tag])
                setTag("")
              }}
              className='bg-mobile hover:bg-mobile-light text-white hover:text-mobile border-2 border-mobile font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
            >Add</button>
          </div>
        </div>                        <div>
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
          <textarea
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
      </div>
      <div className="flex p-2 mt-4">
        <div className="flex-auto flex flex-row-reverse">
          <button
            onClick={() => {
              handleSubmit()
            }}
            className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition">Next</button>
          {/* <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-200 hover:text-white bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Skip</button> */}
        </div>
      </div>
    </div>
  )
}

export default Product