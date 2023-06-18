import { pb } from "$lib/pocketbase";
import type { ClimateRecord } from "$lib/types";

export function load() {
  return {
    weather: perHour(),
  }
}

async function perHour() {
  const list = await pb.collection('climate').getList<ClimateRecord>(1, 50, { sort: '-created' })
  const total: Record<string, number[]> = {};

  const limit = new Date(Date.now() - (5 * 60 * 60 * 1000));
  limit.setMinutes(0);
  limit.setSeconds(0);
  limit.setMilliseconds(0);

  list.items.forEach(item => {
    const d = new Date(item.created);
    d.setMinutes(0);
    d.setSeconds(0);
    d.setMilliseconds(0);

    if (d.getTime() <= limit.getTime()) {
      return;
    }

    if (!total[d.getTime()]) {
      total[d.getTime()] = [];
    }
    total[d.getTime()].push(item.temperature);
  });

  const out: Record<string, number> = {};
  for (const i in total) {
    out[i] = Number((total[i].reduce((a, b) => a + b) / total[i].length).toFixed(1));
  }

  return {
    perHour: out,
    latest: list.items[0]
  }
}
