let express = require('express')
let app = express()
let PersonRoutes = require('./routes/person')
app.use(PersonRoutes)
app.use(express.static('public'))
// const PORT = process.env.PORT || 3000
// app.listen(PORT, () => console.info('server has started on '${PORT}))
app.listen(4000);