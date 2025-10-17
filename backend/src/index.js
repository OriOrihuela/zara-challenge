import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import axios from "axios";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("combined"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/products", async (req, res) => {
  try {
    const response = await axios.get(
      "https://prueba-tecnica-api-tienda-moviles.onrender.com/products",
      {
        headers: {
          "x-api-key": "87909682e6cd74208f41a6ef39fe4191",
        },
      }
    );
    const data = response.data;

    res.status(200).json({
      items: data,
      count: data.length,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.use("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

app.listen(PORT, () =>
  console.log(`🚀 Backend server running on port ${PORT}`)
);
