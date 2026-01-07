import express from "express";
import cors from "cors";
import { PORT } from "./src/config/envConfig.js";
import connectDB from "./src/config/db.js";
import appRoutes from "./app.js";
import morgan from "morgan";

const app = express();
app.use(express.json());
app.use(morgan("dev"));

app.use(cors({oirign: ["http://localhost:5173/"]}));
connectDB();

app.post("/", (req,res) => {
    const data = req.body;
    console.log(data);

    res.status(200).json({success: true, code: 200, message: "message recieved successfully", data});
});

app.use("/api", appRoutes);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({message: err.message});
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});