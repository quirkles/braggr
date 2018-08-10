const express = require('express')
const app = express()

const getBrag = require('./getBrag')

app.use(express.static(__dirname + '/dist'));

app.get('/brag', (req, res) => {
    return res.send(getBrag())
});

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on port ${port}`))