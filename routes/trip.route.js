import express from 'express'
import { createTrip, getTrips } from '../controllers/trip.controller'


const tripRouter = express.Router()
tripRouter.route('/trip')
.post(createTrip)
.get(getTrips);

export default tripRouter;
