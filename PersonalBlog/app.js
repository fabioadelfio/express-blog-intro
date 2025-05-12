const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.static(`img`));

app.get("/", (req, res) => {
    res.send(`Server Personal Blog`);
});

app.listen(port, () => {
    console.log(`Il server è in ascolto sulla porta ` + port);
})