import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Logo from "./Logo";
import publicClient from "../../api/client/public.client";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import { toast } from "react-toastify";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState();

  const amount = 149;
  const initiatePayment = (orderDetails) => {
    const options = {
      key: process.env.RAZORPAY_KEY_ID,
      amount: amount, // The amount in paise (10000 paise = Rs. 100)
      currency: "INR",
      name: "Flixxit",
      description: "Flixxit: Your Ultimate Movie Subscription Transition App!",
      order_id: orderDetails.id, // Replace this with the actual order ID from your backend
      handler: async function (response) {
        try {
          // This function will be executed when the payment is successful
          const verifyPayment = await publicClient.post(
            "/payment/verify",
            response,
            toast.success("Sign in success")
          );
          if (verifyPayment !== null) navigate("/");
        } catch (err) {
          console.log(err);
        }
      },
      prefill: {
        name: "John Doe", // Pre-populate customer's name
        email: "john@example.com", // Pre-populate customer's email
        contact: "1234567890", // Pre-populate customer's contact number
      },
      notes: {
        address: "Razorpay Corporate Office", // Add any additional notes
      },
      theme: {
        color: "#F37254", // Customize the theme color
      },
    };

    const paymentWindow = new window.Razorpay(options);
    return paymentWindow.open();
  };

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      const initiatedOrder = await publicClient.post("/payment/order", {
        amount,
      });
      await initiatePayment(initiatedOrder);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "140px",
            }}
          >
            <Logo />
          </CardMedia>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography gutterBottom variant="h5" component="div">
              Flixxit Subscription
            </Typography>
            <Typography variant="body1" color="text.primary">
              Enjoy unlimited streaming of movies and TV shows for just
              ₹149/month.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Subscribe now to access the best entertainment content.
            </Typography>
            <Typography variant="body2" color="text.primary">
              Payment Amount: ₹149
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <LoadingButton
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 1 }}
            loading={isLoading}
            onClick={handlePayment}
          >
            Subscribe for &#8377;{amount}
          </LoadingButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default PaymentPage;
