import mongoose from 'mongoose'


export default  mongoose.model('expenses', { 
    trip: { type: mongoose.Schema.Types.ObjectId, ref: 'trips' },
    date: Date,
    amount: Number,
    category: String,
    description: String,
});
