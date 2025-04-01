require("dotenv").config();
const express = require("express");
const app = express();
const cors=require("cors");

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      credentials: true,
    })
  );

app.post("/api/process", (req, res) => {
    const { paragraph } = req.body;
    res.send({ result: `Received: ${paragraph}` });
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
