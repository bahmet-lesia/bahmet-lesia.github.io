import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

const customStyles = {
  width: "100%",
  outline: "none",
  boxShadow: "none",
  borderRadius: "4px",
  "& .Mui-required": {
    position: "absolute",
    top: "-23px",
    right: "-11px",
  },
};

export default function StyledInput(props) {
  const { Icon, stylesOverride, ...restProps } = props;
  return (
    <div>
      <TextField
        {...restProps}
        sx={{ ...customStyles, ...stylesOverride }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
