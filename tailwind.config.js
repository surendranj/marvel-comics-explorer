const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            primary: '#ED1D24',
            secondary: 'white',
        }),
        extend: {
            backgroundImage: {
                groot: "url('/images/groot.jpg')",
            },
            boxShadow: {
                customBottom: '0px 3px 3px -1px #a61419',
            },
            fontFamily: { mouseMemoirs: ['Mouse Memoirs'] },
            flexGrow: {
                0.9: 0.9,
                0.8: 0.8,
            },
            textColor: {
                primary: '#ED1D24',
                secondary: 'white',
            },
        },
        screens: {
            xs: '360px',
            ...defaultTheme.screens,
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
