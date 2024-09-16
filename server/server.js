const express = require('express')

const app = express()


app.get('/api/hello', //name of endpoint for your server to get reponse
    function (req, res) //req - request  (what comes to me), res (response - what I send)
    {
        res.send('Hello World from Express server.js')
    }
)

app.listen(3000)