import express from 'express'

const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_req, res) => {
  res.send({ message: 'Yo World' })
})

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
