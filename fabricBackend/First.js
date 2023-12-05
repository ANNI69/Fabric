const express = require('express')


const app = express()

let dsa = { "name": "John", "age": 30, "city": "New York" };
app.get('/', (req, res) => {
    res.send(dsa)
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})