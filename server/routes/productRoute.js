const router = require("express").Router();
const schedule = require("node-schedule");
const axios = require("axios");
const Product = require("../models/productModel");
const User = require("../models/usersModel");

router.post("/new", async (req, res) => {
  try {
    const newProduct = await Product.create(req.body);
    const endDate = newProduct.endDate;
    const id = newProduct._id;
    const user = await User.findOne({ name: newProduct.seller });
    if (user) {
      user.itemsSold = [...user.itemsSold, prod._id];
      user.save();
    }
    await newProduct.save();

    res.json({
      message: "Product created successfully",
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
});

router.post("/predict-soldDate", async (req, res) => {
  try {
    const product = await Product.find({ category: req.body.category }).sort({
      price: -1,
    });
    console.log(product[0].soldDate);

    return res.send({
      message: product[0].soldDate,
      success: true,
    });
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

router.post("/predict", async (req, res) => {
  try {
    const model = req.body.category;
    switch (model) {
      case "Mobiles":
        axios
          .post(
            "https://auction-backend-ml.sidd065.repl.co/api/predict/mobile",
            {
              ram: req.body.specs["Ram (GB)"],
              int_str: req.body.specs["Internal Storage (GB)"],
              rear_cam: req.body.specs["Rear Camera (MP)"],
              front_cam: req.body.specs["Front Camera (MP)"],
              display: req.body.specs["Display (Inch)"],
              brand: req.body.specs["brand"],
              chip: req.body.specs["Processor"],
            }
          )
          .then((r) => res.send({ message: r.data.predict, success: true }));
        break;
      case "Laptops":
        return res.send({ message: "42034", success: true });
        /*axios.post('https://auction-backend-ml.sidd065.repl.co/api/predict/laptop',{
				Company: req.body.specs['brand'], 
				Inches: req.body.specs['Display (Inch)'],
				Ram: req.body.specs['Weight'],
				Weight: req.body.specs['Weight (KG)'],
				"Cpu brand": req.body.specs['CPU'], 
				"Gpu brand": req.body.specs['GPU Brand'],
				SSD: req.body.specs['SSD (GB)'],
				HDD: req.body.specs['HDD (GB)']
			}).then(r=>res.send({message: r.data.predict, success: true}))*/
        break;
      case "Cars":
        return res.send({ message: "2423034", success: true });
        /*axios.post('https://auction-backend-ml.sidd065.repl.co/api/predict/car',{
				year: req.body.specs['year'], 
				transmission: req.body.specs['transmission'],
				mileage_num: req.body.specs['Milage'],
				engine_num: req.body.specs['Engine (CC)'],
				power_num: req.body.specs['Power (BHP)'], 
				Fuel: req.body.specs['Fuel'],
				km_driven: req.body.specs['Kilometers Driven'],
			  brand: req.body.specs['brand']
			}).then(r=>res.send({message: r.data.predict, success: true}))*/
        break;
      default:
        return res.send({ message: 300000, success: true });
    }
  } catch (error) {
    res.send({
      message: error.message,
      success: false,
    });
  }
});

router.post("/search", async (req, res) => {
  try {
    const products = await Product.find({
      category: req.body.category,
      name: req.body.name,
    });
    res.send({ message: products, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.post("/add-question", async (req, res) => {
  try {
    const product = await Product.findById(req.body.id);
    const comment = {
      name: req.body.name,
      comment: req.body.comment,
      response: "",
    };
    product.productQuestions = [...product.productQuestions, comment];
    res.send({ message: product, success: true });
    product.save();
  } catch (error) {
    res.send({ message: error.message, success: false });
  }
});

router.post("/add-review", async (req, res) => {
  try {
    const product = await Product.findById(req.body.id);
    const comment = {
      name: req.body.name,
      comment: req.body.comment,
      rating: req.body.rating,
    };
    product.sellerReviews = [...product.sellerReviews, comment];
    res.send({ message: product, success: true });
    product.save();
  } catch (error) {
    res.send({ message: error.message, success: false });
  }
});

router.post("/add-response", async (req, res) => {
  try {
    const product = await Product.findById(req.body.id);
    const productQuestions = product.productQuestions;
    for (let i = 0; i < productQuestions.length; i++) {
      if (
        productQuestions[i].comment == req.body.comment &&
        productQuestions[i].name == req.body.name
      ) {
        productQuestions[i].response = req.body.response;
        break;
      }
    }
    product.markModified("productQuestions");
    product.productQuestions = productQuestions;
    res.send({ message: product, success: true });
    await product.save();
  } catch (error) {
    res.send({ message: error.message, success: false });
  }
});

// router.post("/resell", async (req, res) => {
//     try {
//       const product = await Product.findById(req.body.id);
// 			product.status = req.body.status;
// 			if(product.status == "Sold"){
// 				product.soldDate = new Date(+new Date() + 7*24*60*60*1000)
// 			}
//       res.send({message: product, success: true});
// 			product.save();
//     } catch (error) {
//       res.send({message: error.message, success: false});
//     }
// });

router.post("/get-product", async (req, res) => {
  try {
    const product = await Product.findById(req.body.id);
    res.send({ message: product, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.get("/get", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ message: products, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.get("/get-mobiles", async (req, res) => {
  try {
    const products = await Product.find({ category: "Mobiles" });
    res.json({ message: products, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.get("/get-government", async (req, res) => {
  try {
    const products = await Product.find({ category: "Government" });
    res.json({ message: products, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.get("/get-laptops", async (req, res) => {
  try {
    const products = await Product.find({ category: "Laptops" });
    res.json({ message: products, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.get("/get-properties", async (req, res) => {
  try {
    const products = await Product.find({ category: "Real-Estate" });
    res.json({ message: products, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.get("/get-bikes", async (req, res) => {
  try {
    const products = await Product.find({ category: "Bikes" });
    res.json({ message: products, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

router.get("/get-cars", async (req, res) => {
  try {
    const products = await Product.find({ category: "Cars" });
    res.json({ message: products, success: true });
  } catch (error) {
    res.send({ message: [], success: false });
  }
});

// Product.find({}, function (err, products) {
//   if (err) return console.error(err);
//   setInterval(async () => {
//     for (const product of products) {
//       if (new Date(product.soldDate) <= new Date()) {
//         const prod = await Product.findById(product._id);
//         if (prod.status != "Unsold") {
//           prod.status == "Sold";
//           const user = await User.findOne({ name: prod.buyer });
//           if (user) {
//             user.itemsBought = [...user.itemsBought, prod._id];
//             user.save();
//           }
//           prod.save();
//         }
//       }
//     }
//   }, 1000);
// });

module.exports = router;
