import React from "react";
import { Stack, Typography } from "@mui/material";
import OrderDescription from "./OrderDescription";
import PaymentForm from "./PaymentForm";

function Payment() {
  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "start",
      }}
    >
      <Typography
        variant="h3"
        sx={{ width: '100%', mb: '18px', fontSize: "30px", textAlign: "center" }}
      >
        Finish your order
      </Typography>
      <OrderDescription />
      <PaymentForm />
    </Stack>
  );
}

export default Payment;
