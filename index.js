const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hi All, if you liked the content and has helped to achieve what you are looking for, please do like and and subscribe. Thank you!'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))