import express from "express"
import cors from "cors"
import fs from "fs"

const app = express()
app.use(cors())
app.use(express())

app.get("/produtos", (req,res) => {
    fs.readFile("./data/produtos.json", "utf-8", (err, data) => {
        if (err) {
            return res.status(500).json({error: "Erro ao ler os produtos"})
        }
        const produtos = JSON.parse(data)
        res.json(produtos)
    })
})

const PORT = 5001
app.listen(PORT, () => console.log(`Servidor rodando em http://localhost:${PORT}`))