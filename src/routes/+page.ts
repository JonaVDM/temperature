import { pb } from "$lib/pocketbase";

export function load() {
  return {
    current: pb.collection('climate').getList(1, 1, { sort: '-created' })
  }
}
