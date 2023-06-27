import React from "react";
import {
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Box,
  Typography,
} from "@mui/material";

import { featuresConfig } from "./config";

function FeaturesList() {
  return (
    <>
      <Box>
        <img src="/images/box.png" width="116" height="163" alt="logo" />
      </Box>
      <Typography color="#8A98A9" variant="h6" textAlign="left">
        You get all these features:
      </Typography>
      <List>
        {featuresConfig.map(({ Icon, text, NestedComponent }) => (
          <React.Fragment key={text}>
            <ListItem sx={{paddingLeft: 0}}>
              <ListItemIcon>
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
            {NestedComponent && (
              <ListItem sx={{paddingLeft: 0}}>
                <NestedComponent />
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
    </>
  );
}

export default FeaturesList;
