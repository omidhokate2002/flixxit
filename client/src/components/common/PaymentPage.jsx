import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Logo from "./Logo";

const PaymentPage = () => {
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
          <Button fullWidth variant="contained" color="primary" sx={{ mt: 1 }}>
            Pay Now
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default PaymentPage;
