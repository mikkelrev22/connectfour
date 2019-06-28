const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
const path = require('path')

app.use(cors())
app.use(express.static(path.join(__dirname, '/../client/dist')))
app.listen(port, ()=>{
  console.log(`Server is listening on port: ${port}`)
})