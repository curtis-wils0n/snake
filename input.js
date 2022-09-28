let connection;
const movement = require('./constants').MOVEMENT;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 't') {
    connection.write("Say: I'm a snake!");
  } else {
    connection.write(movement[key]);
  }
};

module.exports = setupInput;