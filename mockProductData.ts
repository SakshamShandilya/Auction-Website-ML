import { Product } from "@/types/Product";

const products: Product[] = [
    {
        _id: 123,
        name: "Samsung Galaxy S22",
        brand: "Samsung",
        description:
            "The latest Samsung flagship smartphone with a stunning display and powerful performance.",
        tags: ["Electronics", "Phones"],
        price: 120000,
        rating: 4.5,
        sellerReviews: [
            {
                name: "David",
                comment:
                    "The seller was very professional and the phone arrived on time. I'm very happy with my purchase.",
                rating: 5,
            },
            {
                name: "Emily",
                comment:
                    "The phone works great and the camera is amazing. I would definitely recommend this seller.",
                rating: 4,
            },
        ],
        productQuestions: [
            {
                name: "Alice",
                comment: "What is the battery life like on this phone?",
                response:
                    "The Samsung Galaxy S22 has a 4500mAh battery that provides up to 16 hours of video playback or up to 22 hours of talk time.",
            },
            {
                name: "Bob",
                comment: "Does this phone have a headphone jack?",
                response:
                    "No, the Samsung Galaxy S22 does not have a headphone jack. You will need to use wireless headphones or a USB-C adapter to use wired headphones.",
            },
        ],
        condition: "New",
        images: [
            "https://picsum.photos/200/300",
            "https://example.com/samsungs22-image2.jpg",
            "https://example.com/samsungs22-image3.jpg",
        ],
        createDate: "2023-05-01T10:00:00Z",
        status: "Available",
        category: "Mobiles",
        specs: {
            Battery: 4500,
            Bluetooth: true,
            "Clock Speed": 2.9,
            "Dual Sim": true,
            "Camera Mega Pixels (Front)": 20,
            Connectivity: "5G",
            "Internal Memory (GB)": 128,
            "Number of Processor Cores": 8,
            "Camera Mega Pixels (Primary)": 64,
            "Screen Height (Pixels)": 2400,
            "Screen Width (Pixels)": 1080,
            Ram: 6,
            "Screen Height (cm)": 15.49,
            "Screen Width (cm)": 6.98,
            Wifi: true,
        },
        location: "Los Angeles, US",
        returns: true,
        bids: 0,
        seller: "John Doe",
    },
    {
        _id: 1,
        name: "iPhone 13 Pro Max",
        brand: "Apple",
        description:
            "The latest iPhone with a stunning display and powerful performance.",
        tags: ["Electronics", "Phones"],
        price: 130000,
        rating: 4.8,
        sellerReviews: [
            {
                name: "John",
                comment:
                    "The seller was very professional and the phone arrived on time. I'm very happy with my purchase.",
                rating: 5,
            },
            {
                name: "Mary",
                comment:
                    "The phone works great and the camera is amazing. I would definitely recommend this seller.",
                rating: 4,
            },
        ],
        productQuestions: [
            {
                name: "Alice",
                comment: "What is the battery life like on this phone?",
                response:
                    "The iPhone 13 Pro Max has a 4352mAh battery that provides up to 28 hours of video playback or up to 95 hours of audio playback.",
            },
            {
                name: "Bob",
                comment: "Does this phone have a headphone jack?",
                response:
                    "No, the iPhone 13 Pro Max does not have a headphone jack. You will need to use wireless headphones or a Lightning-to-3.5 mm headphone jack adapter to use wired headphones.",
            },
        ],
        condition: "New",
        images: [
            "https://picsum.photos/200/300",
            "https://example.com/iphone13pro-image2.jpg",
            "https://example.com/iphone13pro-image3.jpg",
        ],
        createDate: "2023-05-02T10:00:00Z",
        status: "Available",
        category: "Mobiles",
        specs: {
            Battery: 4352,
            Bluetooth: true,
            "Clock Speed": 3.2,
            "Dual Sim": true,
            "Camera Mega Pixels (Front)": 12,
            Connectivity: "5G",
            "Internal Memory (GB)": 256,
            "Number of Processor Cores": 6,
            "Camera Mega Pixels (Primary)": 48,
            "Screen Height (Pixels)": 2778,
            "Screen Width (Pixels)": 1284,
            Ram: 8,
            "Screen Height (cm)": 16.95,
            "Screen Width (cm)": 7.76,
            Wifi: true,
        },
        location: "San Francisco, US",
        returns: true,
        bids: 0,
        seller: "John Doe",
    },
    {
        _id: 456,
        name: "Sony PlayStation 5",
        brand: "Sony",
        description:
            "The latest gaming console from Sony, with lightning-fast loading speeds and advanced graphics.",
        tags: ["Electronics", "Gaming"],
        price: 49900,
        rating: 4.8,
        sellerReviews: [
            {
                name: "John",
                comment:
                    "Great seller, fast shipping and the product arrived in perfect condition.",
                rating: 5,
            },
            {
                name: "Kate",
                comment:
                    "The PS5 is amazing, I'm so glad I bought it! The seller was also very helpful and responsive.",
                rating: 4.5,
            },
        ],
        productQuestions: [
            {
                name: "Chris",
                comment: "Does the PS5 support 4K resolution?",
                response:
                    "Yes, the PS5 supports 4K resolution for both gaming and video playback.",
            },
            {
                name: "Sarah",
                comment: "How many controllers does the PS5 come with?",
                response:
                    "The PS5 comes with one DualSense wireless controller, but additional controllers can be purchased separately.",
            },
        ],
        condition: "New",
        images: [
            "https://picsum.photos/200/300",
            "https://example.com/ps5-image2.jpg",
            "https://example.com/ps5-image3.jpg",
        ],
        createDate: "2023-05-03T12:00:00Z",
        status: "Available",
        category: "Real-Estate",
        specs: {
            CPU: "AMD Zen 2",
            GPU: "AMD RDNA 2",
            RAM: 16,
            Storage: "825GB SSD",
            "Max Resolution": "4K",
            "Frame Rate": "Up to 120fps",
            "Optical Drive": "4K UHD Blu-ray",
            "Wireless Connectivity": ["Wi-Fi 6", "Bluetooth 5.1"],
        },
        location: "New York, US",
        returns: true,
        bids: 0,
        seller: "John Doe",
    },
    {
        _id: 789,
        name: "Apple MacBook Pro",
        brand: "Apple",
        description:
            "A high-performance laptop for professionals, with a stunning Retina display and long battery life.",
        tags: ["Electronics", "Laptops"],
        price: 2199,
        rating: 4.7,
        sellerReviews: [
            {
                name: "Mary",
                comment:
                    "The MacBook Pro is an amazing laptop, and the seller was very helpful in answering all my questions.",
                rating: 5,
            },
            {
                name: "Peter",
                comment:
                    "Great seller, fast shipping, and the laptop was exactly as described.",
                rating: 4.5,
            },
        ],
        productQuestions: [
            {
                name: "Tom",
                comment: "Does the MacBook Pro have a dedicated graphics card?",
                response:
                    "Yes, the MacBook Pro has a dedicated AMD Radeon Pro graphics card for improved performance in graphics-intensive tasks.",
            },
            {
                name: "Jane",
                comment: "How long does the battery last on a single charge?",
                response:
                    "The MacBook Pro has a battery life of up to 10 hours on a single charge, depending on usage.",
            },
        ],
        condition: "New",
        images: [
            "https://picsum.photos/200/300",
            "https://example.com/macbookpro-image2.jpg",
            "https://example.com/macbookpro-image3.jpg",
        ],
        createDate: "2023-05-03T14:00:00Z",
        status: "Available",
        category: "Laptops",
        specs: {
            Processor: "Intel Core i7",
            Memory: "16GB",
            Storage: "512GB SSD",
            "Display Size": "16 inches",
            "Display Resolution": "3072 x 1920",
            "Graphics Card": "AMD Radeon Pro 5600M",
            "Wireless Connectivity": ["Wi-Fi 6", "Bluetooth 5.0"],
        },
        location: "San Francisco, US",
        returns: true,
        bids: 0,
        seller: "John Doe",
    },
];

export { products };
