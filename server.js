const express = require("express");
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/index.html");
});
 cc

app.get("/api/animals", (req, res) => {
    const animals = [];
    animals[0] = {
        name: "lion",
        color: "yellow",
        state: "fierce"
    }
    animals[1] = {
        name: "dog",
        color: "black",
        state: "happy"
    }
    animals[2] = {
        name: "bear",
        color: "brown",
        state: "big"
    }
    animals[3] = {
        name: "penguin",
        color: "black",
        state: "sleep"
    }
    animals[4] = {
        name: "cat",
        color: "yellow",
        state: "cati"
    }
    res.json(animals);
});

app.listen(3000, () => {
    console.log("listening");
});

