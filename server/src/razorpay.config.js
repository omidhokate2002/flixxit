import Razorpay from "razorpay";

const razorpayKey = process.env.RAZORPAY_KEY_ID;
const razorpaySecret = process.env.RAZORPAY_SECRET_KEY;

export const razorpay = new Razorpay({
  key_id: razorpayKey,
  key_secret: razorpaySecret,
});
