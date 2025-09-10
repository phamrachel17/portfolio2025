module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Open Sans', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
      colors: {
        // Custom buttercream and mauve theme
        buttercream: {
          50: '#fefdf8',
          100: '#fdf9e8',
          200: '#fbf2d1',
          300: '#f8e8b3',
          400: '#f4dc8a',
          500: '#f0d066',
          600: '#e6c04a',
          700: '#d4a83a',
          800: '#b8902f',
          900: '#9a7526',
        },
        mauve: {
          50: '#faf7f9',
          100: '#f5eef3',
          200: '#eadde6',
          300: '#dcc4d4',
          400: '#cba5be',
          500: '#b885a6',
          600: '#a66b8f',
          700: '#8f5a7a',
          800: '#764a66',
          900: '#5f3d55',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
