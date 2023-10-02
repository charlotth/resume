import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      // USE https://tailcolor.com/ to generate primary color or use alias primary: colors.fushia
      primary: {
          "50": "#e6f2e6",
          "100": "#cce5cc",
          "200": "#99cc99",
          "300": "#66b266",
          "400": "#339933",
          "500": "#007f00",
          "600": "#006600",
          "700": "#004c00",
          "800": "#003300",
          "900": "#001900"
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    },
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
    },
  },
  plugins: [],
}
export default config
