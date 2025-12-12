import express from "express";
import cors from "cors";
import Watchlist from "./routes/watchlist.js";
import Movies from "./routes/movie.js";
import TV from "./routes/TV.js";
import Upcoming from "./routes/Upcoming.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/watchlist", Watchlist);
app.use("/movies", Movies);
app.use("/tv", TV);
app.use("/upcoming", Upcoming);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});