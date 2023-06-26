import "./App.css";

import { Typography, Box } from "@mui/material";

import Header from "./components/Header";
import Steps from "./components/Steps";
import Payment from './components/Payment';
import FeaturesList from "./components/FeaturesList";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{ paddingTop: "20px" }}>
        <Steps />
      </Box>
      <div className="main-container">
        <div className="left">
          <FeaturesList />
        </div>
        <div className="center">
          <Payment />
        </div>
        <div className="right">
          <Typography variant="subtitle1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna Lorem ipsum dolor sit
            amet.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
