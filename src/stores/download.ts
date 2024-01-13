import { writable } from 'svelte/store';

export const DownloadStore = writable<{ open: boolean; canvas: HTMLCanvasElement | null }>({
	open: false,
	canvas: null,
});
