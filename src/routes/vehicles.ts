import express from 'express';
import { getVehicle, addVehicle } from '../controllers/vehicleController';

export const router = express.Router();

router.post('/add', addVehicle);
router.get('/search/:model', getVehicle);
