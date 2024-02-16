const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: ''
    },
		brand: {
			type: String,
      default: ''
		},
		description:{
			type:String,
			default: ''
		},
		tags:{
			type:Array,
			default:[],
		},
		price:{
			type:Number,
			default: 0
		},
		rating:{
			type:Number,
			default: 5
		},
		sellerReviews:{
			type:Array,
			default: []
		},
		productQuestions:{
			type:Array,
			default: []
		},
		condition:{
			type:String,
			default: 'New'
		},
    images: {
      type: Array,
      default: ['https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'],
    },
		createDate:{
			type: Date,
			default: new Date(+new Date() + 7*24*60*60*1000)
		},
		soldDate:{
			type:Date,
			default: null
		},
		seller: {
			type: String,
			default: ''
		},
		buyer: {
			type:String,
			default: ''
		},
    status: {
      type: String,
      default: 'Unsold',
    },
		category:{
			type: String,
			default: ''
		},
    specs: {
      type: Object,
      default: {}
    },
		location: {
      type: String,
      default: ''
    },
		returns: {
			type: Boolean,
			default: false
		},
		bids: {
			type:Number,
			default:0
		}
    },
);

module.exports = mongoose.model("product", productSchema);

/** 
{
    "name": "Samsung Galaxy S22",
    "description": "The latest Samsung flagship smartphone with a stunning display and powerful performance.",
    "price": 120000,
    "rating": 4.5,
    "sellerReviews": [
        {
            "name": "David",
            "comment": "The seller was very professional and the phone arrived on time. I'm very happy with my purchase.",
            "rating": 5
        },
        {
            "name": "Emily",
            "comment": "The phone works great and the camera is amazing. I would definitely recommend this seller.",
            "rating": 4
        }
    ],
    "productQuestions": [
        {
            "name": "Alice",
            "comment": "What is the battery life like on this phone?",
            "response": "The Samsung Galaxy S22 has a 4500mAh battery that provides up to 16 hours of video playback or up to 22 hours of talk time."
        },
        {
            "name": "Bob",
            "comment": "Does this phone have a headphone jack?",
            "response": "No, the Samsung Galaxy S22 does not have a headphone jack. You will need to use wireless headphones or a USB-C adapter to use wired headphones."
        }
    ],
    "condition": "New",
    "images": [
        "https://example.com/samsungs22-image1.jpg",
        "https://example.com/samsungs22-image2.jpg",
        "https://example.com/samsungs22-image3.jpg"
    ],
    "createDate": "2023-05-01T10:00:00Z",
    "status": "Available",
    "category": "Mobiles",
    "specs": {
        "Battery": 4500,
        "Bluetooth": true,
        "Clock Speed": 2.9,
        "Dual Sim": true,
        "Camera Mega Pixels (Front)": 20,
        "Connectivity": "5G",
        "Internal Memory (GB)": 128,
        "Number of Processor Cores": 8,
        "Camera Mega Pixels (Primary)": 64,
        "Screen Height (Pixels)": 2400,
        "Screen Width (Pixels)": 1080,
        "Ram": 6,
        "Screen Height (cm)": 15.49,
        "Screen Width (cm)": 6.98,
        "Wifi": true
    },
    "location": "Los Angeles, US",
    "returns": true,
    "bids": 0
}
*/