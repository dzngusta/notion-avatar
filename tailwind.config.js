/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				xs: '480px'
			},
			fontFamily: {
				'fuzzy': '\'Fuzzy Bubbles\', sans-serif',
			},
			colors: {
				svelte: {
					orange: '#FE3F00',
				},
				dzngusta: {
					brand: '#7331FE',
				},
			},
		},
	},
	plugins: [
		require('@savvywombat/tailwindcss-grid-areas'),
	],
};

