import { Critter } from "./critter";

export interface SeaCreature extends Critter {
  shadow: SeaCreatureShadow;
  speed: SeaCreatureSpeed;
}

export enum SeaCreatureShadow {
  VerySmall = 'very-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum SeaCreatureSpeed {
  DoesNotMove = 'does-not-move',
  Slow = 'slow',
  Normal = 'normal',
  Fast = 'fast',
}
