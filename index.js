const express = require('express')
const app = express()
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.port;
const router = require("./users")


app.listen(PORT, () =>
    console.log(`running app-listening on port ${PORT}!`));

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//app.use("/api/v1", router)
app.use("/", router)
