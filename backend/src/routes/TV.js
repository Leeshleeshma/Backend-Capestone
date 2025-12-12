import express from "express";
import fetch from "node-fetch"; // if using Node 18+, fetch is built-in
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

// TMDB Rated TV API
const TMDB_URL = process.env.TMDB_URL;
const TMDB_TOKEN = process.env.TMDB_TOKEN;

router.get("/", async (req, res) => {
  try {
    const response = await fetch(TMDB_URL, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: TMDB_TOKEN
      }
    });

    if (!response.ok) throw new Error(`TMDB API error: ${response.status}`);
    const data = await response.json();
    res.status(200).json(data); // send TMDB results to frontend
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch Rated TV shows" });
  }
});

export default router;


