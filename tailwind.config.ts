import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,js}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      oswald: ['oswald'],
    },
    extend: {
      colors: {
        danger: '#DE3B40',
        info: '#379AE6',
        primary: '#4CBB17',
        accent: '#7F55E0',
        disabled: '#565E6C',
        pink: '#E8618C',
        grayBorder: '#BCC1CA',
      },
    },
  },
};
export default config;
