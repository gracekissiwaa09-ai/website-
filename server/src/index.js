import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number(process.env.PORT || 4000);
const clientOrigin = process.env.CLIENT_ORIGIN || "http://localhost:5173";

app.use(
  cors({
    origin: clientOrigin
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Website API is running.");
});

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "website-server",
    time: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
