export default {
  content: [
    './index.html',
    './src/*/.{js,jsx,ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xs: '475px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
    extend: {
    
      keyframes: {
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(80px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideRight: 'slideRight 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}