const games = [];

function createGame(gameName) {
    const game = {
        id: games.length + 1,
        name: gameName,
        players: [],
        isStarted: false,
    };
    games.push(game);
    return game;
}

function getGames() {
    return games;
}

function joinGame(gameId, playerName) {
    const game = games.find((g) => g.id === gameId);
    if (game && !game.isStarted) {
        game.players.push(playerName);
        return game;
    }
    return null;
}

module.exports = { createGame, getGames, joinGame };
