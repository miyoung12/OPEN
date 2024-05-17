/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        md: '925px',
        lg: '1210px',
        xl: '1490px',
      },
      fontFamily: {
        LINESeed: ['LINE'],
        DungGeunMo: ['DungGeunMo'],
      },
      keyframes: {
        'flip-vertical-fwd': {
          '0%, 100%': {
            transform: 'translateZ(0) rotateY(0)',
          },
          '50%': {
            transform: 'translateZ(160px) rotateY(180deg)',
          },
        },
      },
      animation: {
        bounce: 'bounce 1.2s infinite',
        'flip-vertical-fwd': 'flip-vertical-fwd 5s cubic-bezier(0.455, 0.030, 0.515, 0.955) infinite',
      },
    },
  },

  plugins: [],
};
