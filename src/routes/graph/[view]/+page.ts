import { pb } from "$lib/pocketbase";
import type { Record } from "pocketbase";
import type { PageLoad } from "./$types";

interface ViewRecord extends Record {
  row: string;
  day: string;
  min: number;
  avg: number;
  max: number;
}

export const load: PageLoad = ({ params }) => {
  const data = pb.collection(params.view).getList<ViewRecord>(1, 500);

  return {
    data
  }
}
