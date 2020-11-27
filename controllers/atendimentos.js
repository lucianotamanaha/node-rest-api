const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está fazendo um get'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        Atendimento.adiciona(atendimento, res)
    })
}