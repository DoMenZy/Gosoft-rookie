const express = require('express');
const app = express();
app.use(express.json());

app.get('/dodo', (req, res) => {
    console.log(req.query);
    res.status(400).send("hi");
})

app.post('/dodo1', (req, res) => {
    console.log(req.body);
    console.log(req.body.n1 + req.body.n2);
    let sum = req.body.n1 + req.body.n2
    res.send('' + sum);
})

app.put('/dodo2', (req, res) => {
    console.log(req.body);
    console.log(req.body.n1 + req.body.n2);
    let sum = req.body.n1 + req.body.n2
    res.send('' + sum);
})

app.delete('/dodo3', (req, res) => {
    console.log(req.body);
    console.log(req.body.n1 + req.body.n2);
    let sum = req.body.n1 + req.body.n2
    res.send('' + sum);
})

app.listen(3000, () => {
    console.log('Listening on port: 3000');
});