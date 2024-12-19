import express from 'express'
import cors from 'cors'
import { createServer } from 'http'
import jwt from 'jsonwebtoken'

const app = express()
const port = process.env.PORT
const secret = process.env.SECRET

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.post('/api/login', (req, res) => {
    const {identification, password} = req.body
    console.log(`ID: ${identification}, Contraseña: ${password}`)
})

const server = createServer(app)
server.listen(port, () => {
    console.log(`Su servidor esta activo en el puerto ${port}`)
})