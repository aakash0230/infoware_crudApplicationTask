const express = require("express")
const bodyParser = require("body-parser")
const router = require("./routers/routes")

var app = express();

app.use(bodyParser.json());

// using router
app.use(router);

app.listen(3000, () => {
    console.log("Express server is running on port 3000")
})