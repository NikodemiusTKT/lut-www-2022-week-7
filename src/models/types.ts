export interface genericVehicle {
  model: string;
  color: string;
  year: number;
  power: number;
}
export interface carType extends genericVehicle {
  bodyType: string;
  wheelCount: number;
}
export interface boatType extends genericVehicle {
  draft: number;
}
export interface planeType extends genericVehicle {
  wingspan: number;
}
export type mixedVehicleType = genericVehicle | carType | boatType | planeType;
