import { loggerService } from './services/logger.service.js'

import express from 'express'
import cors from 'cors'
import path from 'path'
import cookieParser from 'cookie-parser'


const app = express()

const corsOptions = {
    origin: ['http://127.0.0.1:5173', 'http://localhost:5173'],
    credentials: true
}

// App configuration
app.use(cors(corsOptions))
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())


// Routes
import { postRoutes } from './api/post/post.routes.js'
import { userRoutes } from './api/user/user.routes.js'
import { authRoutes } from './api/auth/auth.routes.js'

app.use('/api/post', postRoutes)
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

// fallback route
// app.get('/**', (req, res) => {
//     console.log('fallback route')
//     res.sendFile(path.resolve('public/index.html'))
// })

const PORT = process.env.PORT || 3030
console.log(process.env.PORT)

app.listen(PORT, () => {
    loggerService.info('Up and running on port ' + PORT)
})