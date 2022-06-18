import express from 'express'
import { createExpense, getExpenses } from '../controllers/expense.controller';


const expenseRouter = express.Router()
expenseRouter.route('/expense')
.post(createExpense)
.get(getExpenses);

export default expenseRouter;
