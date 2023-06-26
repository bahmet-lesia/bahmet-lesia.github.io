import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector from "@mui/material/StepConnector";

import CustomStepperIcon from "./CustomStepperIcon";

const stylesOverride = {
  "& .MuiStepConnector-line": {
    borderColor: "#ABC7EC",
  },
};

const steps = ["1", "2", "3", "4"];

function Steps() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        activeStep={3}
        alternativeLabel
        connector={<StepConnector sx={stylesOverride} />}
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepperIcon} />
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}

export default Steps;
