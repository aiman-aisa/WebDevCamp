import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Home Page</h1>")
});

app.get("/about", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>About Me</h1><p>My Name is Sir ABC</p>")
});

app.get("/contact", (req, res) => {
    // console.log(req.rawHeaders);
    res.send("<h1>Contact Me</h1><p>Hehe cannot la</p>")
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});