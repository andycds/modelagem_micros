const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

lembretes = {}
contador = 0

app.get('/oi', (req, res) => {
    res.send("funcionou!")
})

app.post('/lembretes', async (req, res) => {
    const { texto } = req.body
    contador++
    lembretes[contador] = {
        contador, texto
    }
    await axios.post("http://localhost:10000/eventos", {
        tipo: "LembreteCriado",
        dados: {
            contador,
            texto
        }
    })
    res.status(201).send(lembretes[contador])
})

app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

app.post('/eventos', (req, res) => {
    console.log(req.body)
    res.send({ msg: 'ok' })
})

app.listen(4000, () => console.log("Lembretes. Porta 4000."))