import { pb } from "$lib/pocketbase";
import type { Record } from "pocketbase";
import type { PageLoad } from "./$types";

interface DailyRecord extends Record {
  row: string;
  day: string;
  min: number;
  avg: number;
  max: number;
}

export const load: PageLoad = () => {
  const data = pb.collection('daily').getList<DailyRecord>(1, 500);

  return {
    data
  }
}
