import type { Config } from 'tailwindcss';

function palette(varName: string) {
  return {
    DEFAULT: `var(${varName}-500)`,
    100: `var(${varName}-100)`,
    200: `var(${varName}-200)`,
    300: `var(${varName}-300)`,
    400: `var(${varName}-400)`,
    500: `var(${varName}-500)`,
    600: `var(${varName}-600)`,
    700: `var(${varName}-700)`,
    800: `var(${varName}-800)`,
    900: `var(${varName}-900)`,
  }
}

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Ubuntu', 'sans-serif'],
      'mono': ['ui-monospace', 'Consolas', 'Monaco'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // USE https://tailcolor.com/ to generate primary color or use alias primary: colors.fushia
        primary: palette('--color-primary'),
      },
    },
  },
  plugins: [],
}
export default config
