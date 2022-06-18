import Trip from '../models/trip.model'


export const createTrip = async (req, res) => {
    
    try{
        const name = req.body.name
        const result = await Trip.create({ name })
        res.status(200).json({ ok: true, result })

    }catch(err) {
        res.status(500).json({ err })
    }
    
}

export const getTrips = async (req, res) => {
    try{

       const items = await Trip.find()
       res.status(200).json({ ok: true, result: items })

    }catch(err) {
        console.log(err)
        res.status(500).json({ err })
    }
}