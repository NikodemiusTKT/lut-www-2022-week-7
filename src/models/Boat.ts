import { Vehicle } from './Vehicle';
import { boatType } from './types';

export class Boat extends Vehicle implements boatType {
  draft: number;
  constructor(
    model: string,
    color: string,
    year: number,
    power: number,
    draft: number
  ) {
    super(model, color, year, power);
    this.draft = draft;
  }

  get vehicle(): boatType {
    const vehicleObject = {
      ...super.vehicle,
      draft: this.draft,
    };
    return vehicleObject;
  }
}
