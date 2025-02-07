import typography from '@tailwindcss/typography';
import containerQuries from '@tailwindcss/container-queries';

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
			      csu: {
			        // Primary Colors
			        'aggie-orange': '#D9782D',
			        'gold': '#C8C372',
			        'green': '#1E4D2B',
			        
			        // Secondary Colors
			        'oval-green': '#006144',
			        'lovers-lane': '#82C503',
			        'energy-green': '#CFFC00',
			        'flower-trial-red': '#E56A54',
			        'powered-purple': '#7E5475',
			        'horsetooth-blue': '#008FB3',
			        'stalward-slate': '#105456',
			        'sunshine': '#FFC038'
			      },
			      gray: {
					50: '#f9f9f9',
					100: '#ececec',
					200: '#e3e3e3',
					300: '#cdcdcd',
					400: '#b4b4b4',
					500: '#9b9b9b',
					600: '#676767',
					700: '#4e4e4e',
					800: 'var(--color-gray-800, #333)',
					850: 'var(--color-gray-850, #262626)',
					900: 'var(--color-gray-900, #171717)',
					950: 'var(--color-gray-950, #0d0d0d)'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						pre: false,
						code: false,
						'pre code': false,
						'code::before': false,
						'code::after': false
					}
				}
			},
			padding: {
				'safe-bottom': 'env(safe-area-inset-bottom)'
			}
		}
	},
	plugins: [typography, containerQuries]
};
