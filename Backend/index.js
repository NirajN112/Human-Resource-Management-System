const express = require("express");
const path = require("path");
const app = express();
const cookieParser = require("cookie-parser");
// 💡 FIX: This middleware parses incoming JSON requests and populates req.body
app.use(express.json());
const cors = require('cors');
app.use(cors());
// Allow requests from your Next.js frontend
app.use(cors({
    origin: "http://localhost:3000", // Next.js URL
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.urlencoded({ extended: true }));
const port = 8000;
const router = require("./routes");
const {connectdb} = require("./connection/connectdb");
app.use("/api", router);
app.get("/",(req,res)=>{
    res.send("Backend")
})







connectdb().then(() => {
  app.listen(port, () => {
    console.log("connected...");
  });
});