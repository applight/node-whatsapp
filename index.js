const http     = require('http')
const https    = require('https')
const express  = require('express')
const app      = express()
const port     = 8888
const hostname = 'node-whatsapp.thenshow.me'

app.get('/messageIn', (req, res) => {
    console.log(`uh, cant remember: body first? ${req.body.To} or nah? ${req.To}`)
    console.log(`uh, cant remember: body first? ${req.body.From} or nah? ${req.From}`)
    console.log(`uh, cant remember: body first? ${req.body.Body} or nah? ${req.Body}`)
    res.send('Hello World!')
})

app.get('/statusCallback', (req, res) => {
    res.send('No appropriate response forthcoming :/')
})

http.createServer(app).listen(port, hostname, 511, () => {
    console.log(`Example app listening at http://${hostname}:${port}`)
});


