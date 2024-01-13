import '@/assets/css/global.css';
import '@fontsource/fuzzy-bubbles/latin.css';

import App from './App.svelte';

const app = new App({
	target: document.getElementById('app')!,
});

export default app;
