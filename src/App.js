import "./App.css";

import Box from "@mui/material/Box";

import Header from "./components/Header";
import Steps from "./components/Steps";

function App() {
  return (
    <div className="App">
      <Header />
      <Box sx={{paddingTop: '20px'}}>
        <Steps />
      </Box>
    </div>
  );
}

export default App;
