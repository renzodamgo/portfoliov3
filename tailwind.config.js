
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			gray: "#F5F3EC",
			black: "#001427",
			green: "#3E5641",
			slate: "#7A93AC",
		},
		extend: {
			fontFamily: {
				'sans': ['var(--font-inter)'],
				'serif': ['var(--font-lora)'],
			},
			animation: {
				wiggle: 'wiggle .4s 1.9s 2 ease-in-out both ',
				appear: 'appear 1.2s .7s ease-in both '
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' },
				},
				appear: {
					'0%': { opacity: '0%' },
					'100%': { opacity: '100%' },
				}
			}
		},
	},
	plugins: [
		plugin(function ({ addVariant }) {
			addVariant('ch', '&>*');
		})
	],
};
