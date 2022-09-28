// establishes a connection with the game server4
const net = require('net');
const { IP, PORT, ENCODING, NAME } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding(ENCODING);

  conn.on("connect", () => {
    conn.write(`Name: ${NAME}`);
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = connect;