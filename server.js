const app = require("./backend-src/app");
const http = require("http");

const port = 3000;

app.set("port", port);

const onListening = () => {
  console.log("Listening on port " + port);
};

const server = http.createServer(app);
server.on("listening", onListening);
server.listen(port);
