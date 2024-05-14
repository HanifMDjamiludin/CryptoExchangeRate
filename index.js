const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const api_endpoint = "https://api.n.exchange/en/api/v1/price/BTCLTC/history/";
// const api_key = "1f015e57-8aec-4de6-8ae3-19fe2ed0420f";

// Define a route handler for the GET request
app.get("/one", async (req, res) => {
  try {
    // Make the Axios request inside the route handler
    const response = await axios.get(api_endpoint);
    // Send the response data back to the client
    res.json(response.data);
  } catch (error) {
    // Handle errors
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "Error fetching data" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
