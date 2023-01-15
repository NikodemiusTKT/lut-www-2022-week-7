import { Vehicle } from './Vehicle';
import { carType } from './types';

export class Car extends Vehicle implements carType {
  bodyType: string;
  wheelCount: number;
  constructor(
    model: string,
    color: string,
    year: number,
    power: number,
    bodyType: string,
    wheelCount: number
  ) {
    super(model, color, year, power);
    this.bodyType = bodyType;
    this.wheelCount = wheelCount;
  }

  get vehicle(): carType {
    const vehicleObject = {
      ...super.vehicle,
      bodyType: this.bodyType,
      wheelCount: this.wheelCount,
    };
    return vehicleObject;
  }
}
