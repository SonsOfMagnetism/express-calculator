require('dotenv').config()

const express = require('express')
const app = express()

app.get('/calc/:num1/:num2', (req, res) => {
    const sum = Number(req.params.num1) + Number(req.params.num2)
    res.send("The sum is " + sum)
})

app.get('/calcquery/:num1/:num2', (req, res) => {
    const add = Number(req.params.num1) + Number(req.params.num2)
    const sub = Number(req.params.num1) - Number(req.params.num2)
    const multi = Number(req.params.num1) * Number(req.params.num2)
    const div = Number(req.params.num1) / Number(req.params.num2)
    const exp = Number(req.params.num1) ** Number(req.params.num2)

    if(req.query.operation === "add") {
        res.send("The sum is " + add)
    } else if (req.query.operation === "sub") {
        res.send("The sum is " + sub)
    } else if (req.query.operation === "multi") {
        res.send("The sum is " + multi)
    } else if (req.query.operation === "div") {
        res.send("The sum is " + div)
    } else if (req.query.operation === "exp") {
        res.send("The sum is " + exp)
    } 
    else {
        res.send("no operation")
    }
})

app.get('/someroute', (req, res) => {
    console.log('req query: ', req.query)
    res.send('someroute accessed')
})

app.listen(process.env.PORT, () => {
    console.log(`Express is listening on port: ${process.env.PORT}`)
}) 