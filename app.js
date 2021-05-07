var express = require("express");
var masters = require("./characters/masters");
var app = express();

app.listen(3001, () => {
    console.log("Server running on port 3001");
});

app.get("/masters", (req, res, next) => {
    res.json(masters);
});