const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
    container: false,
  },
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{jsx,tsx,html,md}",
  ],
  safelist:[
    'text-dark-blue-2',
    'font-medium',
    'text-base',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#003685',
      'black': '#000000',
      'white': '#FFFFFF',
      'light-blue': '#C6DDFF',
      'lighter-blue': '#E7F0FF',
      'royal-blue': '#0062F2',
      'royal-blue-2': '#0050C5',
      'royal-blue-3': '#2563EB',
      'lightest-gray': '#F9FAFB',
      'gray': '#F3F4F6',
      'lighter-gray': '#E5E7EB',
      'medium-gray': '#6B7280',
      'deep-blue': '#00409D',
      'true-blue': '#005ADE',
      'azure': '#3A89FD',
      'dark-blue': '#142641',
      'dark-blue-2': '#2F4361',
      'dark-blue-3': '#111827',
      'lime': '#DFFF00',
      'cobalt-100': '#DCEAFF',
      'cobalt-50': '#E7F0FF',
      'cobalt-400': '#6FA9FF',
      'cobalt-200': '#C6DDFF',
      'ivory': '#FCFFEA',
      'dark-gray': '#374151',
      'milk': '#FEFFF4',
      'primary-300': '#9EC5FF',
      'primary-700': '#0050C5',
      'gray-800': '#1F2937',
      'gray-600': '#4B5563',
      'gray-400': '#9CA3AF',
      'bright-yellow': '#F1FBCE',
      'beige': '#d7e5ee',
      'red-error': '#F43F5E',
      'dark-gray': '#666666',
      'cobalt-25': '#F2F7FF'
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      'card': '0px 1.19px 2.38px 0px rgba(31, 41, 55, 0.06)',
      'cardHover': '0px 2px 4px 0px rgba(31, 41, 55, 0.08)',
      none: 'none',
      'large': '0px 23px 35px #1F29371A',
      'xlarge': '0px 0px 14px 0px rgba(31, 41, 55, 0.05), 0px 23px 35px 0px rgba(31, 41, 55, 0.10)',
      'phone': '0px 4.6950459480285645px 24.753524780273438px 0px rgba(18, 97, 209, 0.1)'

    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
      }
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
      18: '18',
    },
    fontFamily: {
      'display': ['Satoshi', 'sans-serif'],
    },
    extend: {
      listStyleType: {
        'disclosure-closed': 'disclosure-closed',
      },
      backgroundColor: {
        'white-transparent': 'rgba(255, 255, 255, 0.7)'
      },
      rotate: {
        '270' : '270deg'
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem"
      },
      blur: {
        '100': '100px'
      },
      gridColumn: {
        'span-1/2': '1 / span 2',
      },
      screens: {
        'desktop': '1216px',
        'mobile-mid': '480px'
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      spacing: {
        '15': '3.75rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '1/3': '33.333333%',
        '2/3': '66.66%',
        '4/7': '57.15%',
        'unset': 'unset'
      },
      lineHeight: {
        'tighter': '1.15',
        '7.5': '1.875rem',
      },
      fontSize: {
        '5xl': ['48px', '56px'],
        '4xl': ['36px', '44px'],
        '3xl': ['30px', '40px'],
        '2xl': ['24px', '32px'],
        'xl': ['20px', '32px'],
        'link': ['16px', '24px'],
      },
      maxWidth: {
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '6.5xl': '77rem',
        'md2': '800px',
        'mdwide': '33rem'
      },
      maxHeight: {
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        'fill-available': '-webkit-fill-available'
      },
      minHeight: {
        'mid': '566px',
        'big': '760px'
      },
      height: {
        'fit': 'fit-content',
        'fill-available': '-webkit-fill-available'
      },
      gap: {
        '240': '15rem',
      },
      keyframes: {
        '0%': {
          width: '0%'
        },
        '100%': {
          width: '100%'
        }
      },
      backgroundImage: {
        'email': "url('/assets/images/email.svg')",
        'shape': "url('/assets/images/shape.webp')",
        'phone': "url('/assets/images/phone.webp')",
        'gradient-180': 'linear-gradient(180deg, var(--tw-gradient-stops))',
        'gradient-316': 'linear-gradient(316deg, var(--tw-gradient-from) 57%, var(--tw-gradient-to) 100%)',
        'gradient-329': 'linear-gradient(329deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
        'gradient-yellow-blue': 'linear-gradient(281.23deg, #0062F2 -32.28%, #C6DDFF 31.6%, #F1FBCE 115.24%)',
        'gradient-royal-blue': 'linear-gradient(270deg, #0062F2 -33.4%, #003685 61.96%)',
        'gradient-dark-blue': 'linear-gradient(-180deg, #142742 22%, #0060f0)',
        'gradient-blue-to-dark': 'linear-gradient(90deg,#142742 22%,#0060f0)',
        'gradient-royal-to-dark': 'linear-gradient(90deg,#003685,#0062f2)',
        'gradient-blue-yellow': 'linear-gradient(90deg,#0060f0,#df0 90%)',
        "gradient-yellow-to-royal": "linear-gradient(140deg,#fdffed,#dceaff 50%)",
        'gradient-blue-to-blue': 'linear-gradient(to right, #003685, #0052ca)',
        'gradient-modules': 'linear-gradient(180deg, rgba(0, 54, 133, 0.00) 0%, rgba(0, 54, 133, 0.54) 57.81%, rgba(0, 54, 133, 0.60) 100%)',
        'progress': 'radial-gradient(135.94% 103.01% at 14.25% 25.11%, #0062F2 0%, rgba(0, 98, 242, 0.00) 93.23%), radial-gradient(68.2% 45.63% at 100% 99.93%, #DFFF00 0%, rgba(223, 255, 0, 0.00) 100%), linear-gradient(129deg, rgba(111, 169, 255, 0.33) 18.43%, #7CB1FF 49.72%, rgba(111, 169, 255, 0.28) 75.18%)',
      },
      animation: {
        'draw': 'draw 4s linear',
        marquee: 'scrollX 25s linear infinite',
        marqueeRtl: 'scrollXRtl 25s linear infinite',
        blob: "blob 7s infinite",
        left: "left 10s infinite",
        right: "right 10s infinite",
        rotateCircle: "rotateCircle 1s cubic-bezier(0.22, 1, 0.36, 1) infinite",
        rightToLeft: "rightToLeft 0.5s linear"
      },
      width: {
        'fit': 'fit-content',
        'fill': 'stretch'
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 32px))' },
        },
        'scrollXRtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100% + 32px))' },
        },
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        left: {
          "0%, 100%": {
            left: "-10vw",
          },
          "70%": {
            left: "60vw",
          },
        },
        right: {
          "0%, 100%": {
            right: "-10vw",
          },
          "70%": {
            right: "60vw",
          },
        },
        rotateCircle: {
          "0%": {
            transform: "rotate(0deg)"
          },
          "50%": {
            transform: "rotate(180deg)"
          },
          "100%": {
            transform: "rotate(360deg)"
          }
        },
        rightToLeft: {
          "0%" : { transform: "translateX(16px)" },
          "100%" : { transform: "translateX(0px)" }
        }
      },

      scale: {
        '80': '0.8',
        '85': '0.85',
        '115': '1.15',
        '130': '1.3',
        '160': '1.6',
        '200': '2',
      },
    },
  },
  plugins: [],
};