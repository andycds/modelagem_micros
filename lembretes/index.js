const express = require('express')
const app = express()
app.use(express.json())

lembretes = {}
contador = 0

app.get('/oi', (req, res) => {
    res.send("funcionou!")
})

app.post('/lembretes', (req, res) => {
    const { texto } = req.body
    contador++
    lembretes[contador] = {
        contador, texto
    }
    res.status(201).send(lembretes[contador])
})

app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

app.listen(4000, () => console.log("Lembretes. Porta 4000."))