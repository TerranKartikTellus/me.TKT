module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
                wiggle: {
                    '0%': {
                        transform: "scale(0.9)",
                        opacity: "1"
                    },
                    '25%': {
                        transform: 'scale(1) ',
                        opacity: "0.9"
                    },
                    '50%': {
                        transform: 'scale(0.9) ',
                        opacity: "1"
                    },
                    '75%': {
                        transform: 'scale(1) ',
                        opacity: "0.9"
                    },
                    '100%': {
                        transform: 'scale(0.9)',
                        opacity: "1"
                    },
                }
            },
            animation: {
                wiggle: 'wiggle 5s ease-in  infinite',
            },


      fontSize: ['hover', 'focus'],
      fontFamily: {
        OpenSans : ['Open Sans', "sans-serif"],
      },
      
    },
  },
  variants: {
    animation: ['responsive', 'motion-safe', 'motion-reduce'],
    extend: {
      visibility: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

