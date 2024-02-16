const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
			unique:true
    },
    email: {
      type: String,
      required: true,
			unique:true
    },
    password: {
      type: String,
      required: true,
    },
		address: {
			type: String,
			required: true,
		},
		mobile: {
			type: String,
			required: true,
		},
    likedUsers: {
      type: Array,
      default: [],
    },
		likedProducts: {
      type: Array,
      default: [],
    },
		itemsBought: {
			type: Array,
			default:[],
		},
		likesRecieved: {
      type: Number,
			default: 0
    },
    feedback: {
      type: Array,
			default: [],
    },
    itemsSold: {
			type: Array,
			default:[],
    },
		isAdmin: {
			type: Boolean,
			default:false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);