const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const HOST = "0.0.0.0";

const layouts = require("express-ejs-layouts");

app.use(layouts);
app.set("views", path.join(__dirname, "app/views"));
app.set("layout", "layouts/application");
app.set("view engine", "ejs");

app.use(express.static(__dirname + "/public"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./config/routes"));

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
