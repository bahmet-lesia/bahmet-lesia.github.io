import React from "react";
import styled from "styled-components";
import { Box, InputLabel, Button } from "@mui/material";
import StyledInput from "./Input";
import { ReactComponent as PayformEmail } from "../../../icons/payform_email.svg";
import { ReactComponent as PayformCard } from "../../../icons/payform_card.svg";
import { ReactComponent as PayformDate } from "../../../icons/payform_date.svg";
import { ReactComponent as PayformCvv } from "../../../icons/payform_cvv.svg";
import { ReactComponent as PayformUser } from "../../../icons/payform_user.svg";

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
  return (
    <FormContainer>
      <StyledLabel>Email</StyledLabel>
      <StyledInput
        required
        type="email"
        name="email"
        Icon={PayformEmail}
        placeholder="examplemail@mail.com"
        stylesOverride={{}}
      />
      <StyledLabel>Card Information</StyledLabel>
      <Box>
        <StyledInput
          required
          type="tel"
          inputmode="numeric"
          pattern="[0-9\s]{13,19}"
          autocomplete="cc-number"
          maxlength="19"
          placeholder="xxxx xxxx xxxx xxxx"
          Icon={PayformCard}
          stylesOverride={{
            borderBottomRightRadius: "0px",
            borderBottomLeftRadius: "0px",
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
            inputmode="numeric"
            placeholder="MM/YYYY"
            Icon={PayformDate}
            stylesOverride={{
              borderBottomRightRadius: "0px",
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
            }}
          />
          <StyledInput
            required
            type="tel"
            inputmode="numeric"
            placeholder="CVV"
            Icon={PayformCvv}
            stylesOverride={{
              borderBottomLeftRadius: "0px",
              borderTopRightRadius: "0px",
              borderTopLeftRadius: "0px",
            }}
          />
        </Box>
        <StyledLabel>Name on card</StyledLabel>
        <StyledInput
          required
          type="text"
          name="email"
          Icon={PayformUser}
          placeholder="Enter cardholder name"
          stylesOverride={{}}
        />
        <Button
          disabled
          type="submit"
          variant="text"
          size="large"
          onClick={() => {
            console.log("handle submit action");
          }}
          sx={{
            '&.MuiButton-text': {
                color: '#fff',
            },
            '&.MuiButton-root': {
                width: '100%',
                margin: '12px 0',
                background: '#2F80ED',
                textTransform: 'none',
            },
            '&.MuiButton-root:hover': {
                background: '#1968D2',
            },
            '&.MuiButton-root.Mui-disabled': {
                background: '#2F80ED',
                opacity: '0.5',
            },
          }}
        >
          Submit Order
        </Button>
      </Box>
    </FormContainer>
  );
}

export default PaymentForm;
