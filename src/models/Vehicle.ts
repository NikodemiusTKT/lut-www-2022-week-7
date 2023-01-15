import { genericVehicle, mixedVehicleType } from './types';

export let vehiclesArray: mixedVehicleType[] = [];

export class Vehicle implements genericVehicle {
  // model (string), color (string), year (number) and power (number)
  model: string;
  color: string;
  year: number;
  power: number;

  constructor(model: string, color: string, year: number, power: number) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.power = power;
  }

  save = () => {
    if (this.vehicle) {
      vehiclesArray.push(this.vehicle);
    }
    return this.vehicle;
  };

  static findOne = (model: string): mixedVehicleType | undefined => {
    return vehiclesArray.find(
      (vehicle: mixedVehicleType) => vehicle.model === model
    );
  };

  get vehicle(): genericVehicle {
    const vehicle = {
      model: this.model,
      color: this.color,
      year: this.year,
      power: this.power,
    };
    return vehicle;
  }

  static get vehicles(): mixedVehicleType[] {
    return vehiclesArray;
  }
}
