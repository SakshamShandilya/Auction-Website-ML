const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8000;
require("./config/dbConfig");
app.use(cors());
app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const productRoute = require("./routes/productRoute");

app.use("/api/users", usersRoute);
app.use("/api/product", productRoute);

const server = app.listen(port, () =>
  console.log(`Node server listening on port ${port}`)
);

const socket = require("socket.io");
const Product = require("./models/productModel");
const User = require("./models/usersModel");

io = socket(server, {
  cors: {
    origin: "http://localhost:3000", // "http://localhost:3000",//"https://socketiotest.sidd065.repl.co",
    methods: ["GET", "POST"],
  },
});

let prices = {};
let history = {};
var delay = 10; // * 60 * 1000;
io.on("connection", (socket) => {
  socket.on("join_room", async (data) => {
    socket.join(data);
    let product = false;
    if (data.length == 24) product = await Product.findById(data).lean();
    console.log(data, product.price);
    if (!(data in prices)) {
      if (product) {
        prices[data] = product.price;
      } else {
        prices[data] = 1000;
      }
    }
    if (!(data in history)) {
      history[data] = [];
    }
    console.log("User Joined Room: " + data);
    console.log(prices[data]);
    io.sockets
      .in(data)
      .emit("connectToRoom", { price: prices[data], history: history[data] });
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data.content);
  });

  socket.on("bid", async (data) => {
    console.log("data ---->", data);
    console.log(
      data,
      prices[data.room],
      prices[data.room] < data.content.amount,
      !data.reverse
    );
    if (
      (prices[data.room] < data.content.amount && !data.reverse) ||
      (prices[data.room] > data.content.amount && data.reverse)
    ) {
      console.log(123);
      //price
      prices[data.room] = Number(data.content.amount);

      //history
      const temp = history[data.room];
      temp.push(data.content);
      history[data.room] = temp;

      //database
      // const product = await Product.findById(data.room);
      // if (product.price) {
      // 	product.price = prices[data.room];
      // 	product.buyer = data.content.name;
      // 	product.status = "Pending";
      // 	product.bids = product.bids + 1;
      // 	product.save()
      // }
      console.log(123);
      socket.to(data.room).emit("recieve_bid", {
        price: prices[data.room],
        history: history[data.room],
      });
    }
  });

  socket.on("disconnect", () => {
    console.log("USER DISCONNECTED");
  });
});
