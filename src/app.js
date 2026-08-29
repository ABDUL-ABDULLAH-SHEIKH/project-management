import express from "express";
import cors from "cors";

const app = express();

app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit: "50mb", extended: true}));
app.use(express.static("public"));

app.use(
    cors({
        origin: process.env.CORS_ORIGIN.split(",") || "http://localhost:5173",
        credentials: true,
        allowedHeader: ["Content-Type", "Authorization"],
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],

}));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

export default app;