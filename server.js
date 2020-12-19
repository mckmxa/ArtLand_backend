/* express module server */

const express = require('express')
const app = express();
const dotenv = require('dotenv')

dotenv.config({ path: './.env' })
const port = process.env.DATABASE_PORT || 3000

// wstepny router
const productsRoute = require('./routes/products')
const orderRoute = require('./routes/orders')
const authRoute = require('./routes/authentication')
const usersRoute = require('./routes/users')

app.use(express.json()) // w new order zeby moc pobierac dane z req.body 

app.use('/api/products', productsRoute)
app.use('/api/orders', orderRoute)
app.use('/api/auth', authRoute)
app.use('/api/users',usersRoute)

app.get('/', (req, res) => {
    res.send('Server is running')
  })

app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})

module.exports = app