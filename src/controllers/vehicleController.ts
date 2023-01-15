import { Request, Response } from 'express';
import { Vehicle, Car, Boat, Plane } from '../models';

export const addVehicle = (req: Request, res: Response) => {
  const { model, color, year, power, bodyType, wheelCount, draft, wingspan } =
    req.body;
  let newVehicle = new Vehicle(model, color, year, power);
  if (bodyType !== undefined) {
    newVehicle = new Car(model, color, year, power, bodyType, wheelCount);
  } else if (draft !== undefined) {
    newVehicle = new Boat(model, color, year, power, draft);
  } else if (wingspan !== undefined) {
    newVehicle = new Plane(model, color, year, power, wingspan);
  }
  const newVehicleArray = newVehicle.save();
  if (newVehicleArray) {
    res.status(201).send('Vehicle added');
  }
};
export const getVehicle = (req: Request, res: Response) => {
  const { model } = req.params;
  const vehicle = Vehicle.findOne(model);
  if (vehicle) {
    res.json(vehicle);
  } else {
    res.sendStatus(404);
  }
};
