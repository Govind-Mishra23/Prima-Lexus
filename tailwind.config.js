/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Premium olive green - main brand color
                olive: {
                    50: '#f6f7f4',
                    100: '#e8eae3',
                    200: '#d2d6c8',
                    300: '#b4baa3',
                    400: '#929983',
                    500: '#767d66',
                    600: '#5d6451',
                    700: '#4a4f41',
                    800: '#3d4238',
                    900: '#343830',
                    950: '#1a1d18',
                },
                // Rich gold accent color
                gold: {
                    50: '#fdfbf3',
                    100: '#faf5e0',
                    200: '#f4e9bd',
                    300: '#ecd88f',
                    400: '#e2c35e',
                    500: '#d4a853',
                    600: '#c49038',
                    700: '#a3712e',
                    800: '#855a2b',
                    900: '#6d4a26',
                    950: '#3d2712',
                },
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
