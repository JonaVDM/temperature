import { pb } from "$lib/pocketbase";
import type { ClimateRecord } from "$lib/types";

export function load() {
  return {
    weather: loadData()
  }
}

async function loadData() {
  const list = await pb.collection('climate').getList<ClimateRecord>(1, 100, { sort: '-created' })
  const total: Record<string, number[]> = {};

  list.items.forEach(item => {
    const d = new Date(item.created);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    if (!total[d.getTime()]) {
      total[d.getTime()] = [];
    }
    total[d.getTime()].push(item.temperature);
  });

  const out: Record<string, number> = {};
  for (const i in total) {
    out[i] = Number((total[i].reduce((a, b) => a + b) / total[i].length).toFixed(1));
  }

  return out;
}
