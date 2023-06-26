import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

function Header() {
  return (
    <AppBar sx={{ flexDirection: "row" }} color="transparent" position="relative">
      <Toolbar>
        <Typography variant="h6" color="#00C4C4">
          LOGO
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
