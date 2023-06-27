import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";
import { Box, InputLabel, Button } from "@mui/material";
import StyledInput from "./Input";
import { ReactComponent as PayformEmail } from "../../../icons/payform_email.svg";
import { ReactComponent as PayformCard } from "../../../icons/payform_card.svg";
import { ReactComponent as PayformDate } from "../../../icons/payform_date.svg";
import { ReactComponent as PayformCvv } from "../../../icons/payform_cvv.svg";
import { ReactComponent as PayformUser } from "../../../icons/payform_user.svg";
import { validate } from "./validate";

const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 405px;
  box-sizing: border-box;
  border: 1px solid #c0d4f3;
  border-radius: 4px;
  padding: 18px;
  background: #fff;
  text-alight: left;
`;

const StyledLabel = styled(InputLabel)`
  text-align: left;
  margin: 12px 0;
`;

function PaymentForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      card: "",
      date: "",
      cvv: "",
      name: "",
    },
    validate,
    onSubmit: (values) => {
      console.log("Form submited", formik.values);
    },
  });
  const { values, errors } = formik;

  return (
    <FormContainer>
      <form onSubmit={formik.handleSubmit} noValidate="novalidate">
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          required
          id="email"
          type="email"
          name="email"
          error={!!errors.email}
          helperText={errors.email}
          value={values.email}
          onChange={formik.handleChange}
          Icon={PayformEmail}
          placeholder="examplemail@mail.com"
          stylesOverride={{}}
        />
        <StyledLabel>Card Information</StyledLabel>
        <Box>
          <StyledInput
            required
            id="card"
            name="card"
            value={values.card}
            error={!!errors.card}
            helperText={errors.card}
            onChange={formik.handleChange}
            type="tel"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            maxLength="19"
            placeholder="xxxx xxxx xxxx xxxx"
            Icon={PayformCard}
            stylesOverride={{
              "& .MuiInputBase-root.MuiOutlinedInput-root": {
                borderBottomRightRadius: "0px",
                borderBottomLeftRadius: "0px",
              },
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StyledInput
              required
              type="date"
              name="date"
              id="date"
              value={values.date}
              error={!!errors.date}
              onChange={formik.handleChange}
              inputMode="numeric"
              placeholder="MM/YYYY"
              Icon={PayformDate}
              stylesOverride={{
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  borderBottomRightRadius: "0px",
                  borderTopRightRadius: "0px",
                  borderTopLeftRadius: "0px",
                  minWidth: '183px',
                },
              }}
            />
            <StyledInput
              required
              type="tel"
              name="cvv"
              id="cvv"
              value={values.cvv}
              error={!!errors.cvv}
              onChange={formik.handleChange}
              inputMode="numeric"
              placeholder="CVV"
              Icon={PayformCvv}
              stylesOverride={{
                "& .MuiInputBase-root.MuiOutlinedInput-root": {
                  borderBottomLeftRadius: "0px",
                  borderTopRightRadius: "0px",
                  borderTopLeftRadius: "0px",
                  minWidth: '184px',
                },
              }}
            />
          </Box>
          <StyledLabel>Name on card</StyledLabel>
          <StyledInput
            required
            name="name"
            id="name"
            value={values.name}
            error={!!errors.name}
            helperText={errors.name}
            onChange={formik.handleChange}
            type="text"
            Icon={PayformUser}
            placeholder="Enter cardholder name"
            stylesOverride={{}}
          />
          <Button
            type="submit"
            variant="text"
            size="large"
            sx={{
              "&.MuiButton-text": {
                color: "#fff",
              },
              "&.MuiButton-root": {
                width: "100%",
                margin: "12px 0",
                background: "#2F80ED",
                textTransform: "none",
              },
              "&.MuiButton-root:hover": {
                background: "#1968D2",
              },
              "&.MuiButton-root.Mui-disabled": {
                background: "#2F80ED",
                opacity: "0.5",
              },
            }}
          >
            Submit Order
          </Button>
        </Box>
      </form>
    </FormContainer>
  );
}

export default PaymentForm;
