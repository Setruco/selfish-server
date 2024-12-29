const { Server } = require("socket.io");

function setupSocket(server) {
    const io = new Server(server, { cors: { origin: "*" } });

    io.on("connection", (socket) => {
        console.log("A user connected");

        socket.on("newGame", (game) => {
            io.emit("gameListUpdate", game);
        });

        socket.on("disconnect", () => {
            console.log("A user disconnected");
        });
    });
}

module.exports = setupSocket;
