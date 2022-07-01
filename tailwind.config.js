const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/entities/**/*.{js,ts,jsx,tsx}',
    './src/widgets/**/*.{js,ts,jsx,tsx}',
    './src/shared/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          DEFAULT: '#4C4560',
          light: '#706492',
        },
        green: {
          DEFAULT: '#5DC563',
          hover: '#66E06D',
          light: '#EDFAEE',
          dark: '#478d4a',
          card: '#EDFAF6',
          bg: '#28D2B0',
        },
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        'radio-border': "url('../../public/img/backgrounds/radio-border.svg')",
        'radio-checked':
          "url('../../public/img/backgrounds/radio-checked.svg')",
        'checkbox-checked':
          "url('../../public/img/backgrounds/checkbox-checked.svg')",
        'top-search-header': "url('../../public/img/header-footer/search.svg')",
        'top-city-header': "url('../../public/img/arrow-city.svg')",
        statistic: "url('../../public/img/backgrounds/statistic.svg')",
        selection: "url('../../public/img/backgrounds/selection.png')",
        'selection-md': "url('../../public/img/backgrounds/selection-md.png')",
        'selection-sm': "url('../../public/img/backgrounds/selection-sm.png')",
        'selection-xs': "url('../../public/img/backgrounds/selection-xs.png')",
        'how-questions-md':
          "url('../../public/img/backgrounds/how-questions-md.png')",
        'how-questions-lg':
          "url('../../public/img/backgrounds/how-questions-lg.png')",
        'how-bunner-sm':
          "url('../../public/img/backgrounds/how-bunner-sm.png')",
        'how-bunner-md':
          "url('../../public/img/backgrounds/how-bunner-md.png')",
        'how-bunner-lg':
          "url('../../public/img/backgrounds/how-bunner-lg.png')",
        'details-req-xs':
          "url('../../public/img/backgrounds/details-req-xs.png')",
        'details-req-md':
          "url('../../public/img/backgrounds/details-req-md.png')",
        'details-req-lg':
          "url('../../public/img/backgrounds/details-req-lg.png')",
        'advantages-like-md':
          "url('../../public/img/backgrounds/advantages-like-md.png')",
        'advantages-like-sm':
          "url('../../public/img/backgrounds/advantages-like-sm.png')",
        'advantages-like-lg':
          "url('../../public/img/backgrounds/advantages-like-lg.png')",
        'return-md': "url('../../public/img/backgrounds/return-md.png')",
        'return-sm': "url('../../public/img/backgrounds/return-sm.png')",
        'return-lg': "url('../../public/img/backgrounds/return-lg.png')",
        payment: "url('../../public/img/backgrounds/payment.png')",
        'payment-sm': "url('../../public/img/backgrounds/payment-sm.png')",
        'payment-lg': "url('../../public/img/backgrounds/payment-lg.png')",
        'pay-bunner': "url('../../public/img/backgrounds/pay-bunner.png')",
        'pay-bunner-sm':
          "url('../../public/img/backgrounds/pay-bunner-sm.png')",
        'pay-bunner-lg':
          "url('../../public/img/backgrounds/pay-bunner-lg.png')",
        faq: "url('../../public/img/backgrounds/faq.png')",
        'faq-sm': "url('../../public/img/backgrounds/faq-sm.png')",
        'faq-lg': "url('../../public/img/backgrounds/faq-lg.png')",
        help: "url('../../public/img/backgrounds/help.png')",
        'help-sm': "url('../../public/img/backgrounds/help-sm.png')",
        'help-lg': "url('../../public/img/backgrounds/help-lg.png')",
      },
      backgroundPosition: {
        'right-5': '97% center',
        'right-30': '130% center',
        'statistic-pos': 'center 50px',
        'sm-statistic-pos': '20px 80px',
        'md-statistic-pos': '20px 130px',
        'lg-statistic-pos': '60px 150px',
        'lg-details-req-pos': '130% center',
      },
      boxShadow: {
        searchInput: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        benefistIcon: '0px 4px 15px rgba(0, 0, 0, 0.1)',
        tooltipCard: '0px 4px 16px rgba(0, 0, 0, 0.15)',
        sortingProducts: '0px 4px 20px rgba(0, 0, 0, 0.1);',
        rating: 'inset 0px 4px 6px rgba(0, 0, 0, 0.15);',
        carouselBtn: '0px 4px 10px rgba(0, 0, 0, 0.1);',
      },
      outline: {
        green: '2px solid #5DC563',
      },
      fontSize: {
        '10px': ['10px', '18px'],
        '40px': ['40px', '36px'],
      },
      keyframes: {
        opacity: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        loader: {
          '0%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
      },
      animation: {
        pullDown: 'opacity 0.3s ease-out',
        pullUp : 'opacity 0.3s ease-out',
        showTooltip : 'opacity 0.5s ease-out',
        showModal: 'opacity 0.2s ease-out',
        loader: 'loader 2.24s ease-out infinite',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
