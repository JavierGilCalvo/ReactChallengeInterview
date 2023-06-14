const express = require('express')
const router = require('./src/routes/route.js')

const app = express()

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => {
  res.send('HOME')
})

app.use('/api/v1', router)

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})
