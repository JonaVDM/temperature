import { pb } from "$lib/pocketbase";
import type { ClimateRecord } from "$lib/types";

export function load() {
  return {
    current: pb.collection('climate')
      .getList<ClimateRecord>(1, 1, { sort: '-created' })
  }
}
