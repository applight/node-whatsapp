const express = require('express')
const app     = express()
const port    = 8888

app.get('/messageIn', (req, res) => {
    console.log(`uh, cant remember: body first? ${req.body.To} or nah? ${req.To}`)
    console.log(`uh, cant remember: body first? ${req.body.From} or nah? ${req.From}`)
    console.log(`uh, cant remember: body first? ${req.body.Body} or nah? ${req.Body}`)
    res.send('Hello World!')
})

app.get('/statusCallback', (req, res) => {
    res.send('No appropriate response forthcoming :/')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
