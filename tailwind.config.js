/* *@type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            gridTemplateRows: {
                // Simple 8 row grid
                '8': 'repeat(3, 600px)',

                // Complex site-specific row configuration
                '250': '250px 250px',
            }
        }
    },
    plugins: [],
}
