const http = require("http");

const hostname = "0.0.0.0";
const port = 80;

process.on("SIGINT", () => process.exit());

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Server", "Node/v17.1");
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello world</title>
</head>
<body>
    This is just a hello world content!
</body>
</html>
`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
