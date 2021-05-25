const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>myhh</title><head>");
  res.write("<body><h1>hel</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(8180);
// demo
// hello 
