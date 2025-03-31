/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f6f3',
          100: '#e8e2d9',
          200: '#d8cebf',
          300: '#c8baa5',
          400: '#b8a68b',
          500: '#a89271',
          600: '#987e57',
          700: '#886a3d',
          800: '#785623',
          900: '#684209',
        },
        secondary: {
          50: '#f3f5f7',
          100: '#d9e3e8',
          200: '#bfd1d9',
          300: '#a5bfca',
          400: '#8badbb',
          500: '#719bac',
          600: '#57899d',
          700: '#3d678e',
          800: '#23457f',
          900: '#092370',
        },
        accent: {
          50: '#f7f3f3',
          100: '#e8d9d9',
          200: '#d9bfbf',
          300: '#caa5a5',
          400: '#bb8b8b',
          500: '#ac7171',
          600: '#9d5757',
          700: '#8e3d3d',
          800: '#7f2323',
          900: '#700909',
        },
        success: {
          50: '#f0f7f4',
          100: '#dcefe6',
          200: '#c8e7d8',
          300: '#b4dfca',
          400: '#a0d7bc',
          500: '#8ccfae',
          600: '#78c7a0',
          700: '#64bf92',
          800: '#50b784',
          900: '#3caf76',
        },
        warning: {
          50: '#f7f6f2',
          100: '#e8e2d9',
          200: '#d9cec0',
          300: '#cabaa7',
          400: '#bba68e',
          500: '#ac9275',
          600: '#9d7e5c',
          700: '#8e6a43',
          800: '#7f562a',
          900: '#704211',
        },
        error: {
          50: '#f7f3f3',
          100: '#e8d9d9',
          200: '#d9bfbf',
          300: '#caa5a5',
          400: '#bb8b8b',
          500: '#ac7171',
          600: '#9d5757',
          700: '#8e3d3d',
          800: '#7f2323',
          900: '#700909',
        },
        info: {
          50: '#f3f5f7',
          100: '#d9e3e8',
          200: '#bfd1d9',
          300: '#a5bfca',
          400: '#8badbb',
          500: '#719bac',
          600: '#57899d',
          700: '#3d678e',
          800: '#23457f',
          900: '#092370',
        },
        gold: {
          50: '#f7f6f2',
          100: '#e8e2d9',
          200: '#d9cec0',
          300: '#cabaa7',
          400: '#bba68e',
          500: '#ac9275',
          600: '#9d7e5c',
          700: '#8e6a43',
          800: '#7f562a',
          900: '#704211',
        },
        purple: {
          50: '#f5f3f7',
          100: '#e3d9e8',
          200: '#d1bfd9',
          300: '#bfa5ca',
          400: '#ad8bbb',
          500: '#9b71ac',
          600: '#89579d',
          700: '#773d8e',
          800: '#65237f',
          900: '#530970',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} 