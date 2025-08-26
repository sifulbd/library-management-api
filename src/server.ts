import { Server } from "http";
import mongoose from "mongoose";
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
import app from "./app";

let server: Server;
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

if (!process.env.MONGODB_URI) {
    const user = process.env.DB_USER || "";
    const pass = encodeURIComponent(process.env.DB_PASSWORD || "");
    const db = process.env.DB_NAME || "test";
    process.env.MONGODB_URI = `mongodb+srv://${user}:${pass}@cluster0.vp2mu5v.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`;
}

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log("Connected to MongoDB");
        server = app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error("Error starting the server:", error);
        process.exit(1);
    }
}

main();
