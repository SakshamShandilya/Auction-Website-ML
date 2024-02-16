import React, { useState } from "react";
import { useContext } from "react";
import { AppContext } from "context/AppContext";
import { ToastContainer, toast } from "react-toastify";
type Props = {};

const Pictures = (props: Props) => {
  const {
    category,
    setCategory,
    productName,
    setProductName,
    condition,
    setCondition,
    brand,
    setBrand,
    location,
    setLocation,
    productDescription,
    setProductDescription,
    tags,
    setTags,
    productImages,
    setProductImages,
    formNumber,
    setFormNumber,
    links,
    setLinks,
    specs,
    setSpecs,
    price,
    setPrice,
    soldDate,
    setSoldDate,
  } = useContext(AppContext);
  const uploadCloudinary = async (file: any) => {
    console.log(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "my_uploads");
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/db2oirxkg/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );
    return await res.json();
  };

  const [images, setImages] = useState<any>([]);
  // const [links, setLinks] = useState<any[]>([])
  const imageSubmitHandler = async (e: any) => {
    e.preventDefault();
    try {
      let arr: any[] = [];
      for (let i = 0; i < images.length; i++) {
        const data = await uploadCloudinary(images[i]);
        arr.push(data);
        console.log(data);
      }
      setLinks((links: any) => [...links, ...arr]);
      console.log(arr);
    } catch (error) {
      console.log(error);
    }
  };

  const formSubmitHandler = () => {
    console.log(links);

    if (typeof window !== "undefined") {
      if (localStorage.getItem("uname") == null) {
        return toast.error("😓 Please login or refresh to create auction!");
      }
    }
    const product = {
      name: productName,
      brand: brand,
      description: productDescription,
      tags: tags,
      price: price,
      rating: 0,
      sellerReviews: [],
      productQuestions: [],
      condition: condition,
      images: links.map((link: any) => link.secure_url),
      createDate: new Date(),
      soldDate: soldDate,
      seller:
        typeof window !== "undefined" && localStorage.getItem("uname")
          ? localStorage.getItem("uname")
          : "",
      buyer: "",
      category: category,
      specs: specs,
      location: location,
      bids: 0,
    };
    console.log(product);

    // send product json object to backend
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/product/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Product From server", data);
        // setCategory('');
        setProductName("");
        setBrand("");
        setProductDescription("");
        setTags([]);
        setPrice(0);
        setCondition("");
        setSoldDate(new Date());
        setSpecs({});
        setLocation("");
        setLinks([]);
        toast.success("🙌 Auction created successfully!");
        setFormNumber(4);
      })
      .catch((err) => {
        toast.error("😓 Something went wrong!");
        console.log(err);
      });
  };

  return (
    <div className="mt-8 p-4">
      <ToastContainer />
      <div className="flex flex-col space-y-4 items-center">
        <form
          onSubmit={imageSubmitHandler}
          className="flex space-x-2 items-center mx-auto"
        >
          <input
            type="file"
            multiple={true}
            onChange={(e) => setImages(e.target.files)}
          />
          <button
            type="submit"
            className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition"
          >
            Upload
          </button>
        </form>
        <div className="flex flex-wrap gap-2 my-2">
          {links &&
            links.length > 0 &&
            links.map((link: any, id: number) => {
              return (
                <div
                  key={id}
                  className="object-contain w-56 h-56 flex items-center justify-center shadow-md"
                >
                  <img
                    src={link?.url}
                    alt=""
                    className="object-contain shadow-md border-mobile hover:border-2"
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="flex p-2 mt-4">
        <button
          onClick={() => {
            setFormNumber(2);
          }}
          className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile-light bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition"
        >
          Previous
        </button>
        <div className="flex-auto flex flex-row-reverse">
          <button
            onClick={formSubmitHandler}
            className="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pictures;
