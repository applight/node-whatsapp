const prims    = require('../prims.js')
const process  = require('process')
const http     = require('http')
const express  = require('express')
const app      = express()

var myArgs     = process.argv.slice(2);
const port     = myArgs.includes('-p') ? myArgs[myArgs.indexOf('-p')+1] : 8888
//const hostname = 'node-whatsapp.thenshow.me'

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.post('/messageIn', (req, res) => {
    const body = req.body;
    console.log(" To " + body.To + " ** From " + body.From + " ** Body " + body.Body)
    const input = { to: body.To, from: body.From, body: body.Body };
    prims.asyncInsertMessage( input, prims.pool );
    res.send('Hello World!')
})

app.post('/statusCallback', (req, res) => {
    res.send('No appropriate response forthcoming :/')
})

app.listen(port, () => {
    console.log(`Example app listening at http://hereye:${port}`)
});


