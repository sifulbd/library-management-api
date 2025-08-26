const mongoose = require("mongoose");
require("dotenv").config();

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.vp2mu5v.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log("✅ Connected to MongoDB!"))
    .catch((err) => console.error("❌ Connection failed:", err.message));
