// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetUno(),
        presetIcons({
            extraProperties: {
                display: 'inline-block',
                width: '1.2em',
                height: '1.2em'
            }
        }),
    ],
    safelist: [
        ...Array.from({ length: 8 }, (_, i) => `col-span-${i + 1}`),
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: "#FFFFFF",
                50: "#fafafa",
                100: "#f5f5f5",
                200: "#e5e5e5",
                300: "#d4d4d4",
                400: "#a3a3a3",
                500: "#737373",
                600: "#525252",
                700: "#404040",
                800: "#2E2E2E",
                900: "#1E1E1E",
                950: "#0F0F0F",
            },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                '2xl': '8rem',
            },
        },

    },

})
