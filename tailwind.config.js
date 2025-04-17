// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          'fade-in-up': 'fadeInUp 0.4s ease-out',
          'slide-up-fade': 'slideUpFade 0.4s ease-out',
        },
        keyframes: {
          fadeInUp: {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          slideUpFade: {
            '0%': { opacity: 0, transform: 'translateY(30px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        },
      },
    },
    plugins: [],
  };
  