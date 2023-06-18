import type { Record } from "pocketbase";

export interface ClimateRecord extends Record {
  temperature: number;
  humidity: number;
}
