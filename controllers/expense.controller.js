import Expense from '../models/expense.model'


export const createExpense = async (req, res) => {
    try{
        const result = await Expense.create(
            {
              trip: req.body.trip,
              date: req.body.date,
              amount: req.body.amount,
              category: req.body.category,
              description: req.body.description,
            })

        res.status(200).json({ ok: true, result })

    }catch(err) {
        res.status(500).json({ err })
    }
}

export const getExpenses = async (req, res) => {
    try{

        const items = await  Expense.find({ trip: req.body.trip })
        res.status(200).json({ ok: true, result: items })
 
     }catch(err) {
         res.status(500).json({ err })
     }
}