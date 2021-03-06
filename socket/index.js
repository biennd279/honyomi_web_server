const Server = require("socket.io");
const MessageNsp = require("./message");
const { socketAuth } = require("../config/auth");

let io;
exports.listen = (httpServer) => {
  io = new Server(httpServer);
  const messageNsp = io.of("/message");

  io.on("connection", (socket) => {
    socket.send("socket.io setup success");
  });

  messageNsp.use(socketAuth);

  messageNsp.on("connection", (socket) => {
    MessageNsp.handleEvents(socket, messageNsp);
  });
};

/**
 * TESTING PURPOSE ONLY
 */
exports.get = () => {
  return io;
}