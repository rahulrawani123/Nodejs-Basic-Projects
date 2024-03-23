const express = require("express");
const path = require("path");
const router = require("./routes/home");

const app = express();

app.use(express.urlencoded({extended:false}));

app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use("/home",router);

const PORT=8001;
app.listen(PORT,() => console.log(`server started at :${PORT}`));


