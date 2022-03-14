module.exports = {
  content: [
    './public/**/*',
    './src/**/*.{html, js}',
  ],
  theme: {
    screen: {
      'xl': '1440px',
    },

    extend: {
      colors: {
        //PRYMARI TEXT
        'Very-dark-desaturated-blue': 'hsl(238, 29%, 16%)',
        'Soft-red': 'hsl(14, 88%, 65%)',
        // BG-GRADIENTS
        'Soft-violet': 'hsl(273, 75%, 66%)',
        'Soft-blue': 'hsl(240, 73%, 65%)',
        // TEXT
        'Very-dark-grayish-blue': 'hsl(237, 12%, 33%)',
        'Dark-grayish-blue': 'hsl(240, 6%, 50%)',
        // DIVIDERS
        'Light-grayish-blue': 'hsl(240, 5%, 91%)',
      },

      fontFamily: {
        'Kumbh': ['Kumbh Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
