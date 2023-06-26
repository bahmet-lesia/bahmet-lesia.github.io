import React from "react";
import Input from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";

const customStyles = {
  width: '100%',
  outline: 'none',
  boxShadow: 'none',
  borderRadius: '4px',
};

export default function StyledInput(props) {
  const { Icon, stylesOverride, ...restProps } = props;
  return (
    <div>
      <Input
        {...restProps}
        sx={{ ...customStyles, ...stylesOverride}}
        startAdornment={
          <InputAdornment position="start">
            <Icon />
          </InputAdornment>
        }
      />
    </div>
  );
}
