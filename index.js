const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

let api_endpoint = "https://api.n.exchange/en/api/v1/price/BTCLTC/latest/";

const router = express.Router();

router.get("/one", async (req, res) => {
  try {
    const response = await axios.get(api_endpoint);
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
