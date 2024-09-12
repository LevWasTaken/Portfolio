import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetForms } from '@julr/unocss-preset-forms'

export default defineConfig({
  shortcuts: [
    [
      'btn',
      'px-4 py-1 rounded inline-block bg-red-700 text-white cursor-pointer hover:bg-red-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
    ],
    [
      'icon-btn',
      'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-red-600',
    ],
    ['flex-center', 'flex items-center justify-center'],
  ],

  rules: [
    // Allow to use `w-h-` to set both width and height at the same time
    [/^w-h-(.+)$/, ([, value]) => ({ width: `${value}rem`, height: `${value}rem` })],
  ],
  theme : {
    fontSize: {
      xxs : ['8px', '12px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    }
  },
  presets: [
    presetForms(),
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Poppins',
        serif: 'Playfair Display',
        mono: 'Roboto Mono',
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
