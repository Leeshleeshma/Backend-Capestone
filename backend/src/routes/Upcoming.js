import express from "express";
import fetch from "node-fetch"; // if using Node 18+, fetch is built-in
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// Watchmode Upcoming releases API
const apiKey = process.env.apiKey;
const url = `https://api.watchmode.com/v1/releases/?apiKey=${apiKey}`;

router.get("/", async (req, res) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        //Authorization: TMDB_TOKEN
      }
    });

    if (!response.ok) throw new Error(`Watchmode API error: ${response.status}`);
    const data = await response.json();
    res.status(200).json(data); // send TMDB results to frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Upcoming releases" });
  }
});

export default router;