import { Vehicle } from './Vehicle';
import { planeType } from './types';

export class Plane extends Vehicle implements planeType {
  constructor(
    public model: string,
    public color: string,
    public year: number,
    public power: number,
    public wingspan: number
  ) {
    super(model, color, year, power);
  }

  get vehicle(): planeType {
    const vehicleObject = {
      ...super.vehicle,
      wingspan: this.wingspan,
    };
    return vehicleObject;
  }
}
