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
      primary: '#42b883',
      secondary: '#F0DB4F',
    },
  },
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-transparent text-white cursor-pointer disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
})
