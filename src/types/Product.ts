export interface Product {
    _id: number;
    name: string;
    brand: string;
    description: string;
    tags?: string[];
    price: number;
    rating?: number;
    sellerReviews?: SellerReview[];
    productQuestions?: ProductQuestion[];
    condition?: string;
    images: string[];
    createDate: Date | string;
    soldDate?: Date | string;
    seller: string;
    buyer?: string;
    status?: string;
    category: string;
    specs?: Specs;
    location?: string;
    returns?: boolean;
    bids?: number;
}

export interface SellerReview {
    name: string;
    comment: string;
    rating: number;
}

export interface ProductQuestion {
    name: string;
    comment: string;
    response: string;
}

export interface Specs {
    [key: string]: string | number | boolean | undefined | any;
}

// Product Schema Example
// {
//     “_id”:123
//     "name": "Samsung Galaxy S22",
//     “brand”: “Samsung”
//     "description": "The latest Samsung flagship smartphone with a stunning display and powerful performance.",
//     “tags”:[”Electronics”,”Phones”]
//     "price": 120000,
//     "rating": 4.5,
//     "sellerReviews": [
//         {
//             "name": "David",
//             "comment": "The seller was very professional and the phone arrived on time. I'm very happy with my purchase.",
//             "rating": 5
//         },
//         {
//             "name": "Emily",
//             "comment": "The phone works great and the camera is amazing. I would definitely recommend this seller.",
//             "rating": 4
//         }
//     ],
//     "productQuestions": [
//         {
//             "name": "Alice",
//             "comment": "What is the battery life like on this phone?",
//             "response": "The Samsung Galaxy S22 has a 4500mAh battery that provides up to 16 hours of video playback or up to 22 hours of talk time."
//         },
//         {
//             "name": "Bob",
//             "comment": "Does this phone have a headphone jack?",
//             "response": "No, the Samsung Galaxy S22 does not have a headphone jack. You will need to use wireless headphones or a USB-C adapter to use wired headphones."
//         }
//     ],
//     "condition": "New",
//     "images": [
//         "https://example.com/samsungs22-image1.jpg",
//         "https://example.com/samsungs22-image2.jpg",
//         "https://example.com/samsungs22-image3.jpg"
//     ],
//     "createDate": "2023-05-01T10:00:00Z",
//     "status": "Available",
//     "category": "Mobiles",
//     "specs": {
// 	Specs will be final after ML MODEL is finalized
//         "Battery": 4500,
//         "Bluetooth": true,
//         "Clock Speed": 2.9,
//         "Dual Sim": true,
//         "Camera Mega Pixels (Front)": 20,
//         "Connectivity": "5G",
//         "Internal Memory (GB)": 128,
//         "Number of Processor Cores": 8,
//         "Camera Mega Pixels (Primary)": 64,
//         "Screen Height (Pixels)": 2400,
//         "Screen Width (Pixels)": 1080,
//         "Ram": 6,
//         "Screen Height (cm)": 15.49,
//         "Screen Width (cm)": 6.98,
//         "Wifi": true
//     },
//     "location": "Los Angeles, US",
//     "returns": true,
//     "bids": 0
// }
