/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'navbar': '4rem', // ナビゲーションバーの高さ
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        'flip-diagonal-2-tl': 'flipDiagonal2Tl 0.7s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        flipDiagonal2Tl: {
          '0%': {
            transform: 'rotate3d(1, 1, 0, -360deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'rotate3d(1, 1, 0, 0deg)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
