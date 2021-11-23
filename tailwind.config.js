const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    // mode: 'jit',
    theme: {
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

            colors: {
                primary: '#ED1D24',
                secondary: 'white',
                tertiary: '#47090B',
            },
            zIndex: {
                '-10': '-10',
                '-20': '-20',
                '-30': '-30',
            },
            variants: {
                borderWidth: ['last'],
            },
            transitionProperty: {
                top: 'top',
            },
            maxWidth: {
                300: '300px',
            },
        },

        screens: {
            xs: '250px',
            ...defaultTheme.screens,
        },
    },
    variants: {
        extend: { borderWidth: ['last'], borderColor: ['last'], cursor: ['hover'] },
    },
    plugins: [],
};
