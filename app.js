const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("Hello World");
  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  //   res.send("Ini adalah halaman about");
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  //   res.send("Ini adalah halaman Contact");
  res.sendFile("./contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  // res.send("product id:" + req.params.id + '<br></br>'
  // + 'category id : ' + req.params.idCat)
  res.send(`product id : ${req.params.id} <br> category id : ${req.query.category}`);
});

//untuk req apapun
app.use("/", (req, res) => {
  res.status(404);
  res.send("Page Not Found 404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
