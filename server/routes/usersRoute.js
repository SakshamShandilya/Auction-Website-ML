const router = require("express").Router();
const User = require("../models/usersModel");
const Product = require("../models/productModel");
const bcrypt = require("bcryptjs");
const events = require("events");
var easyinvoice = require("easyinvoice");

const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const emitter = new events.EventEmitter();
let client;
const OTP = [];

router.post("/ping", async (req, res) => {
  try {
    res.send({
      message: "pong",
      success: true,
      data: null,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
      data: null,
    });
  }
});

router.post("/send", async (req, res) => {
  const chatId = req.body.number.substring(1) + "@c.us";
  await client.sendMessage(chatId, req.body.text); //+918850549713
  res.send("Sent!");
});

router.get("/start", (req, res) => {
  console.log("Starting Client");

  try {
    client = new Client({
      authStrategy: new LocalAuth(),
      puppeteer: {
        headless: true,
        executablePath:
          "/nix/store/x205pbkd5xh5g4iv0g58xjla55has3cx-chromium-108.0.5359.94/bin/chromium-browser",
        args: ["--no-sandbox", "--disable-setuid-sandbox"],
      },
    });

    client.on("qr", (qr) => {
      qrcode.generate(qr, { small: true });
    });

    client.on("ready", () => {
      console.log("Client is ready!");
    });

    // client.initialize();
    res.send("Started!");
  } catch (error) {
    console.error("Error initializing client:", error);
    res.status(500).send("Internal Server Error");
  }
});
/*
router.get('/start', (req, res) => {
const data = {
    // Customize enables you to provide your own templates
    // Please review the documentation for instructions and examples
    "customize": {
        //  "template": fs.readFileSync('template.html', 'base64') // Must be base64 encoded html 
    },
    "images": {
        // The logo on top of your invoice
        "logo": "https://public.easyinvoice.cloud/img/logo_en_original.png",
        // The invoice background
        "background": "https://public.easyinvoice.cloud/img/watermark-draft.jpg"
    },
    // Your own data
    "sender": {
        "company": req.body.seller,
        "address": "Sample Street 123",
        "zip": "1234 AB",
        "city": "Sampletown",
        "country": "Samplecountry"
        //"custom1": "custom value 1",
        //"custom2": "custom value 2",
        //"custom3": "custom value 3"
    },
    // Your recipient
    "client": {
        "company": req.body.buyer,
        "address": "Clientstreet 456",
        "zip": "4567 CD",
        "city": "Clientcity",
        "country": "Clientcountry"
        // "custom1": "custom value 1",
        // "custom2": "custom value 2",
        // "custom3": "custom value 3"
    },
    "information": {
        // Invoice number
        "number": req.body.seller,
        // Invoice data
        "date": "04-05-2023",
        // Invoice due date
        "due-date": "14-05-2023"
    },
    // The products you would like to see on your invoice
    // Total values are being calculated automatically
    "products": [
        {
            "quantity": 1,
            "description": req.body.name,
            "price": req.body.price
        }
    ],
    // The message you would like to display on the bottom of your invoice
    "bottom-notice": "Kindly pay your invoice within 10 days.",
    // Settings to customize your invoice
    "settings": {
        "currency": "INR", // See documentation 'Locales and Currency' for more info. Leave empty for no currency.
        // "locale": "nl-NL", // Defaults to en-US, used for number formatting (See documentation 'Locales and Currency')        
        // "margin-top": 25, // Defaults to '25'
        // "margin-right": 25, // Defaults to '25'
        // "margin-left": 25, // Defaults to '25'
        // "margin-bottom": 25, // Defaults to '25'
        // "format": "A4", // Defaults to A4, options: A3, A4, A5, Legal, Letter, Tabloid
        // "height": "1000px", // allowed units: mm, cm, in, px
        // "width": "500px", // allowed units: mm, cm, in, px
        // "orientation": "landscape", // portrait or landscape, defaults to portrait
    },
    // Translate your invoice to your preferred language
    "translate": {
        // "invoice": "FACTUUR",  // Default to 'INVOICE'
        // "number": "Nummer", // Defaults to 'Number'
        // "date": "Datum", // Default to 'Date'
        // "due-date": "Verloopdatum", // Defaults to 'Due Date'
        // "subtotal": "Subtotaal", // Defaults to 'Subtotal'
        // "products": "Producten", // Defaults to 'Products'
        // "quantity": "Aantal", // Default to 'Quantity'
        // "price": "Prijs", // Defaults to 'Price'
        // "product-total": "Totaal", // Defaults to 'Total'
        // "total": "Totaal", // Defaults to 'Total'
        // "vat": "btw" // Defaults to 'vat'
    },
};

//Create your invoice! Easy!
easyinvoice.createInvoice(data, function (result) {
    //The response will contain a base64 encoded PDF file
    console.log('PDF base64 string: ', result.pdf);
})
});*/

router.post("/login", async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });
    if (!userExists) {
      return res.json({
        message: "User does not exist",
        success: false,
      });
    }
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      userExists.password
    );
    if (!passwordMatch) {
      return res.json({
        message: "Incorrect password",
        success: false,
      });
    }

    const pin = String(Math.floor(1000 + Math.random() * 9000));
    OTP.push({ id: userExists._id, pin: pin });
    const chatId = userExists.mobile.substring(1) + "@c.us";
    return res.json({
      _id: userExists._id,
      data: userExists,
      isAdmin: userExists.isAdmin,
      success: true,
    });
    // client.sendMessage(chatId, `Your Auction Bazaar Login OTP is ${pin}`);
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
});

router.post("/admin", async (req, res) => {
  try {
    //const user = await User.findById(req.body.id);
    //if(user.isAdmin){
    const maxValue = await Product.find({}).sort({ price: -1 });
    const maxBids = await Product.find({}).sort({ bids: -1 });
    const maxRatings = await Product.find({}).sort({ rating: -1 });
    res.send({
      maxValue: maxValue,
      maxBids: maxBids,
      maxRatings: maxRatings,
      success: true,
    });
    //}

    //res.send({maxValue:[], maxBids:[], maxRatings:[], success: true});
  } catch (error) {
    res.send({ message: [], success: false });
  }
});
router.post("/otp", async (req, res) => {
  try {
    for (const ele of OTP) {
      console.log(ele);
      if (ele.id == req.body.id && ele.pin == req.body.pin) {
        res.send({ message: "Login Successful", success: true });
        return OTP.splice(OTP.indexOf({ id: ele.id, pin: ele.pin }), 1);
      }
    }
    res.send({ message: "Invalid OTP", success: false });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.post("/register", async (req, res) => {
  try {
    const existingUser = await User.findOne({ name: req.body.name });
    if (existingUser) {
      return res.send({
        message: "User already exists",
        success: false,
      });
    }
    const existingEmail = await User.findOne({ email: req.body.email });
    if (existingEmail) {
      return res.send({
        message: "Email already registered",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    console.log(user);

    res.send({
      message: "User created successfully",
      success: true,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

router.post("/like-user", async (req, res) => {
  try {
    if (!req.body.likeId) {
      res.send({ message: "Error: No Like Id", success: false });
      return;
    }
    const user = await User.findById(req.body.id);
    user.likedUsers = [...user.likedUsers, user.likeId];
    user.save();
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

router.post("/dashboard", async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    const itemsBought = await Product.find({ _id: { $in: user.itemsBought } });
    const itemsSold = await Product.find({ _id: { $in: user.itemsSold } });
    const likedProducts = await Product.find({
      _id: { $in: user.likedProducts },
    });
    const likedUsers = await Product.find({ _id: { $in: user.likedUsers } });
    res.send({
      itemsBought: itemsBought,
      itemsSold: itemsSold,
      likedProducts: likedProducts,
      likedUsers: likedUsers,
      success: true,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

router.post("/like-product", async (req, res) => {
  try {
    if (!req.body.likeId) {
      res.send({ message: "Error: No Like Id", success: false });
      return;
    }
    const user = await User.findById(req.body.id);
    user.likedProducts = [...user.likedProducts, user.likeId];
    user.save();
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

router.get("/get", async (req, res) => {
  try {
    const users = await User.find({});
    res.send({ message: users, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.post("/get-user", async (req, res) => {
  try {
    const user = await User.findById(req.body.id);
    res.send({ message: users, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.get("/ping", async (req, res) => {
  try {
    res.send({
      message: "pong",
      success: true,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

module.exports = router;
