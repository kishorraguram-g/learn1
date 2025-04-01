require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors");

app.use(express.json());
app.use(
  cors({
      origin: [
          "https://learn1-cllient.vercel.app",  // Main frontend URL
          "https://learn1-cllient-2317w3up2-kishor-ragurams-projects.vercel.app",  // Old URL (if needed)
      ],
      methods: ["GET", "POST", "OPTIONS"],
      allowedHeaders: ["Content-Type", "Authorization"],
      credentials: true,
  })
);


app.post("/api/process", (req, res) => {
    const { paragraph } = req.body;
    res.send({ result: `Received: ${paragraph}` });
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
