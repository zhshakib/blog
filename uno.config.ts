import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.5,
      warn: true,
    }),

    presetWebFonts({
      fonts: {
        mono: 'Ubuntu Mono',
        title: 'Zeyada',
        roboto: 'Roboto',
        Poppins: 'Poppins',
      },
    }),
  ],

  theme: {
    colors: {
      primary: '#0070f3',
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-primary text-white cursor-pointer hover:bg-primary disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
})
