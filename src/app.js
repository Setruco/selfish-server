const express = require("express");
const cors = require("cors");
const { createGame, getGames, joinGame } = require("./gameManager");
const setupSocket = require("./socket");

const app = express();
app.use(cors());
app.use(express.json());

// API Endpoints
app.get("/games", (req, res) => {
    res.json(getGames());
});

app.post("/games", (req, res) => {
    const { name } = req.body;
    const game = createGame(name);
    res.status(201).json(game);
});

app.post("/games/:id/join", (req, res) => {
    const { id } = req.params;
    const { playerName } = req.body;
    const game = joinGame(parseInt(id), playerName);
    if (game) {
        res.json(game);
    } else {
        res.status(400).json({ error: "Unable to join game" });
    }
});

// Start the server
const server = app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});

setupSocket(server);
