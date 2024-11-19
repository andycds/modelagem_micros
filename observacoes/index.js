const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())

const observacoesPorLembreteId = {}

app.post('/lembretes/:id/observacoes', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body;
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
    observacoesDoLembrete.push({ id: idObs, texto })
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
    res.status(201).send(observacoesDoLembrete)
})

app.get('/lembretes/:id/observacoes', (req, res) => {
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || []
    res.send(observacoesDoLembrete)
})

app.listen(5000, () => console.log("Observacoes. Porta 5000."))