const express = require("express");
const axios = require("axios");

const app = express();
const port = 3001;
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));


// let api_endpoint = "https://api.n.exchange/en/api/v1/price/ETHLTC/latest/";

const router = express.Router();

app.get("/ETHLTC", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/ETHLTC/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

app.use("/", router);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});