/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
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
	plugins: [],
};
