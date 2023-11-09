module.exports = {
  purge: [],
  darkMode: false,
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        md: '2rem',
        lg: '12rem',
        xl: '12rem',
        '2xl': '12rem'
      },
    },
    extend: {
      height: {
        192: '48rem',
        176: '44rem',
        160: '40rem',
        144: '36rem',
        100: '25rem',
        120: '30rem',
        128: '32rem',
        96: '24rem',
        76: '19rem',
      },
      width: {
        128: '32rem',
        176: '44rem',
        '31/100': '31%',
      },
      colors: {
        primary: {
          500: '#FB741E',
          700: '#409EFF',
          900: '#FF7E21',
        },
        darkgray: {
          500: '#FAFAFB',
          900: '#001025'
        },
        global: {
          900: '#FFFFFF'
        },
        while10: '#ffffff1a',
        yellow250: '#FFDE00'
      },
      boxShadow: {
        default: '0 0 20px 10px rgba(255, 255, 255, .2)',
        comment: '0 0 20px 10px rgba(255, 255, 255, .2)'
      },
    },
    inset: (theme, { negative }) => ({
      '1/5': '20%',
      '3/10': '30%',
      ...theme('spacing'),
      ...negative(theme('spacing')),
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
