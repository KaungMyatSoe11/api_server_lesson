const express = require("express");
const PublicRoutes = require("./routes/publicRoutes");
const app = express();
const port = 5001;

app.get("/hello", (req, res) => {
  res.json({ msg: "Hello My First API." });
});

app.use("/public", PublicRoutes);

app.listen(port, () => {
  console.log("This site is listen in http://localhost:" + port);
});
