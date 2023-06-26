import React from "react";
import styled from "styled-components";
import { Box, Stack, Typography } from "@mui/material";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  alight-items: center;
`;

function OrderDescription() {
  return (
    <Stack sx={{width: '100%', maxWidth: '453px', marginBottom: '24px'}}>
      <StyledBox>
        <Typography>Plan</Typography>
        <Typography>Full Pack</Typography>
      </StyledBox>
      <StyledBox>
        <Typography>Subscription Period</Typography>
        <Typography>3 months</Typography>
      </StyledBox>
      <StyledBox>
        <Typography>1 month price</Typography>
        <Typography>$ 29.99</Typography>
      </StyledBox>
    </Stack>
  );
}

export default OrderDescription;
