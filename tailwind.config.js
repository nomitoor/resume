/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'kanit': ["'Kanit'", 'sans-serif'],
                'work-sans': ["'Work Sans'", 'sans-serif']
            },
        },
    },
    plugins: [],
}