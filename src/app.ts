import express, { Application, Request, Response } from "express";
import cors from "cors";
import bookRoutes from "./app/routes/bookRoutes";
import borrowRoutes from "./app/routes/borrowRoutes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use(
    cors({
        origin: ["https://library-management-api-xjyd.vercel.app/api", "http://localhost:5173"],
    })
);

app.use("/api/books", bookRoutes);
app.use("/api/borrow", borrowRoutes);

app.get("/", (_req: Request, res: Response) => {
    res.send("Ola, Library management API is running");
});

export default app;
