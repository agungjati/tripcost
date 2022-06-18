import express from 'express'
import tripRouter from './trip.route.js'
import expenseRouter from './expense.route'


const router = express.Router()
router.use( '/api/v1', tripRouter)
router.use( '/api/v1', expenseRouter)

export default router