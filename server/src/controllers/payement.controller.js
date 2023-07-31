import { razorpay } from "../razorpay.config.js";
import crypto from "crypto";

export const initiatePayment = async (req, res) => {
  try {
    // Create a Razorpay payment order
    const options = {
      amount: req.body.amount * 100,
      currency: "INR",
      receipt: crypto.randomBytes(10).toString("hex"),
    };

    razorpay.orders.create(options, (error, order) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Something Went Wrong!" });
      }
      return res.status(201).json(order);
    });
  } catch (error) {
    // Handle any errors that occur during the payment process
    return res.status(500).json(error.message);
  }
};

export const verifyPayment = (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      req.body;
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET_KEY)
      .update(sign.toString())
      .digest("hex");

    if (razorpay_signature === expectedSign)
      return res.status(200).json({ message: "Payment verified successfully" });
    return res.status(400).json({ message: "Invalid signature sent!" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
    console.log(error);
  }
};
