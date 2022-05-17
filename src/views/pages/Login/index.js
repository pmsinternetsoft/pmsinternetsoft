import React from "react";
import "./login.css";
import {
  TextField,
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  CardMedia,
} from "@material-ui/core";

import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
export default function login() {
  const carddata = [
    // {
    //   text: "Binance smart chain Wallet",
    //   image: "images/binance.jpg",
    // },
    {
      text: "Wallet Connect",
      image: "images/wallet.png",
    },
    {
      text: "Metamask",
      image: "images/metamask.png",
    },
  ];
  return (
    <div>
      <Container>
        <div style={{ marginTop: "40px" }}>
          <div>
            <Typography
              style={{
                fontSize: "30px",
                color: "#0CAFFF",
                marginBottom: "15px",
              }}
            >
              <KeyboardBackspaceIcon /> Go Back
            </Typography>
          </div>
          <div>
            <Typography
              variant="h1"
              //   component="h1"
              style={{
                fontSize: "43px",
                marginBottom: "20px",
              }}
            >
              Connect your Wallet
            </Typography>
          </div>
          <div>
            <Typography
              variant="body1"
              style={{
                fontSize: "15px",
                marginBottom: "40px",
                letterSpacing: "1px",

                wordSpacing: "2px",
              }}
            >
              Connect with one of our available wallet providers,
              <br />
              or create a new one.
            </Typography>
          </div>
          <div>
            {carddata.map(({ text, image }, i) => {
              return (
                <Card
                  key={i}
                  className="cardsize"
                  style={{
                    background: "rgba(23, 12, 65, 0.4)",
                    border: "1px solid #332262",
                    boxSizing: "border-box",
                    align: "center",
                  }}
                >
                  <center>
                    {" "}
                    <img src={image} className="image" />
                    <CardContent>
                      <Typography
                        variant="h1"
                        style={{ fontSize: "37px", color: "#fff" }}
                      >
                        {text}
                      </Typography>
                    </CardContent>
                  </center>
                </Card>
              );
            })}
          </div>
          <div>
            <Typography variant="body1" style={{ fontSize: "17px" }}>
              We do not own your private keys and cannot access your funds
              without your confirmation.
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
}
