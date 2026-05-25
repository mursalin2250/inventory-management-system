import express from "express";
import connectDB from "./src/config/db.js";
import { PORT } from "./src/config/envConfig.js";
import generateResponse from "./src/utils/generateResponse.js"
import appRoutes from "./app.js";
import cors from "cors";


const app = express();
app.use(express.json());
app.use(cors({"origin": "http://localhost:5173"}));

connectDB();

app.get("/", (req, res) => {
    res.status(200).json(generateResponse(true, 200, "Server running successfully", null));
});

app.use("/api", appRoutes);


app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json(generateResponse(false, 500, err.message, err));
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});