import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetMini,
  presetUno,
  presetWebFonts,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-pm text-white cursor-pointer hover:bg-pm disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),

    presetMini({
      theme: {
        colors: {
          veryCool: '#008000', // class="text-very-cool"
          pm: '#181818)',
        },
      },
    }),
    presetWebFonts({
      fonts: {
        title: 'Zeyada',
        roboto: 'Roboto',
        Poppins: 'Poppins',
      },
    }),
  ],
})
