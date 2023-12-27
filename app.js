
require('dotenv').config();
const express = require("express");
const cors = require('cors');
const { request } = require("https");
const noteRouter = require("./note-router")

const PORT =process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.urlencoded())
app.use(express.json());

//routes
app.use("/note", noteRouter);


//not found
app.use((req, res) => {
    res.send("oh 404 not found");
});


//הרמת שרת
app.listen(PORT, () => {
    console.log(`connected to port: ${PORT}`);
});