const express = require('express')
const db=require('./config/db/index')


const app = express()
const port = 3000
db.connect();


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})