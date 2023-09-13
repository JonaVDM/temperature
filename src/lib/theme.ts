import { browser } from '$app/environment';
import { writable } from 'svelte/store';

export const theme = writable(browser ? localStorage.getItem('theme') ?? 'dark' : 'dark');

theme.subscribe((e) => {
  if (!browser) {
    return;
  }

  console.log(e);

  localStorage.setItem('theme', e);

  if (e == 'dark') {
    document.querySelector('body')?.classList.add('dark')
  } else {
    document.querySelector('body')?.classList.remove('dark')
  }
});
