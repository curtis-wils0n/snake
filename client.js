// establishes a connection with the game server4
const net = require('net');
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on("connect", () => {
    conn.write("Name: CJW");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
}

module.exports = connect;