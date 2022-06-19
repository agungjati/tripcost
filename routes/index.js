import express from 'express'
import tripRouter from './trip.route.js'
import expenseRouter from './expense.route'
import { checkAuth } from './middleware.js'


const router = express.Router()
router.use( '/api/v1', checkAuth, tripRouter)
router.use( '/api/v1', expenseRouter)

export default router