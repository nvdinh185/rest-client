const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello world!"));

app.post("/", (req, res) => {
    if (Object.keys(req.body).length > 0) {
        res.json({
            received: req.body
        })
    } else {
        res.send("Got the post!");
    }
});

app.get("/auth-endpoint", (req, res) => {
    if (req.headers.authorization && req.headers.authorization == "my-api-key-123") {
        res.send("Authorized!");
    } else {
        res.status(401).send();
    }
})

app.listen(9000, () => console.log("server is running in 9000..."));

const app2 = express();
app2.use(bodyParser.json());
app2.get("/", (req, res) => res.send("hello from the other environment!"));
app2.listen(9090, () => console.log("server is running in 9090..."));