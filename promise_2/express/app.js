const express = require("express");
const app = express();
const port = 3000

app.get('/', (req, res) => {
    res.get("hello word");
})

app.post('/', (req, res) => {
    res.send('Hello World!')
})

app.put('/', (req, res) => {
    res.send('Hello World!')
})

app.delete('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

//abrir http://localhost:3000/