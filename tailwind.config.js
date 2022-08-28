module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '960px',
      xl: '1296px',
    },
    container: {
      center: true,
      padding: '0.75rem',
    },
    extend: {
      fontSize: {
        'xs': '12px',
        '3xl': '28px'
      },
      colors:{
        primary:{
          blue:'#09ACF5',
          green:'#62DB54'
        },
        secondary:{
          DEFAULT:'#FFFFFF',
          dark:'#1C1C1C',
          light:'#202020'
        },
        darkGary:{
          DEFAULT:'#2D2D2D',
          light:'#909090',
          dark:'#1A1A1A'
        }
      },
      backgroundImage: {
        'half-green-blue': "linear-gradient(to right, #62DB54 50% , #09ACF5 50%);",
        'mix-green-blue': "linear-gradient(to right, #62DB54 , #09ACF5);",
        'mix-vertical-green-blue': "linear-gradient(to bottom, #62DB54 , #09ACF5);",
      },
      padding: {
        '13': '52px',
        '21': '84px'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}