import express from 'express'
import dotenv from 'dotenv'
import products from './data/products.js'
import connectToDB from './config/db.js'
import colors from 'colors'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import morgan from 'morgan'

dotenv.config()
connectToDB()
const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
  
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Api is running... ???????')
})

app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode port  ${PORT}`.yellow.bold))