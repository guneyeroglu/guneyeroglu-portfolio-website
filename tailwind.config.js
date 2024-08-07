import { nextui } from '@nextui-org/react';

const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xxs: '376px',
        xs: '481px',
        sm: '641px',
        md: '769px',
        lg: '1025px',
        xl: '1281px',
        '2xl': '1537px',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: '#171717',
            foreground: '#e5e5e5',
            default: {
              DEFAULT: '#262626',
              foreground: '#e5e5e5',
            },
            primary: {
              50: '#fafafa',
              100: '#f5f5f5',
              200: '#e5e5e5',
              300: '#d4d4d4',
              400: '#a3a3a3',
              500: '#737373',
              600: '#525252',
              700: '#404040',
              800: '#262626',
              900: '#171717',
              DEFAULT: '#e5e5e5',
              foreground: '#262626',
            },
            secondary: {
              50: '#f9fafb',
              100: '#f3f4f6',
              200: '#e5e7eb',
              300: '#d1d5db',
              400: '#9ca3af',
              500: '#6b7280',
              600: '#4b5563',
              700: '#374151',
              800: '#1f2937',
              900: '#111827',
              DEFAULT: '#1f2937',
              foreground: '#e5e7eb',
            },
            success: {
              50: '#ecfdf4',
              100: '#d1fae2',
              200: '#a6f4cb',
              300: '#6de8ae',
              400: '#2acb85',
              500: '#0ebb76',
              600: '#039860',
              700: '#037950',
              800: '#056040',
              900: '#054f36',
              DEFAULT: '#039860',
              foreground: '#d1fae2',
            },
            danger: {
              50: '#fff1f1',
              100: '#ffe1e1',
              200: '#ffc7c8',
              300: '#ffa0a1',
              400: '#ff6a6c',
              500: '#f83b3d',
              600: '#e51d1f',
              700: '#c31416',
              800: '#a01416',
              900: '#841819',
              DEFAULT: '#e51d1f',
              foreground: '#ffe1e1',
            },
            warning: {
              50: '#fef9ec',
              100: '#fbeeca',
              200: '#f7dd90',
              300: '#f2c657',
              400: '#efb030',
              500: '#e89018',
              600: '#cd6c12',
              700: '#ba5314',
              800: '#8b3c15',
              900: '#723215',
              DEFAULT: '#ba5314',
              foreground: '#f7dd90',
            },
            info: {
              50: '#ecf3ff',
              100: '#dde8ff',
              200: '#c1d5ff',
              300: '#9cb8ff',
              400: '#7590ff',
              500: '#5569ff',
              600: '#363ef5',
              700: '#2428c9',
              800: '#2429af',
              900: '#262d89',
              DEFAULT: '#2428c9',
              foreground: '#c1d5ff',
            },
            overlay: '#000000CC',
            divider: '#fafafa',
          },
        },
      },
    }),
  ],
};
export default config;
