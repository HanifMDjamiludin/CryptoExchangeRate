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

const router = express.Router();

router.get("/BTCETH", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/BTCETH/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/ETHBTC", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/ETHBTC/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/BTCLTC", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/BTCLTC/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/LTCBTC", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/LTCBTC/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});


router.get("/ETHLTC", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/ETHLTC/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/LTCETH", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/LTCETH/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/SOLETH", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/SOLETH/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/ETHSOL", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/ETHSOL/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/SOLBTC", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/SOLBTC/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/BTCSOL", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/BTCSOL/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/SOLLTC", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/SOLLTC/latest/");
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

router.get("/LTCSOL", async (req, res) => {
  try {
    const response = await axios.get("https://api.n.exchange/en/api/v1/price/LTCSOL/latest/");
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