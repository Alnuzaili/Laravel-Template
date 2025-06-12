// uno.config.ts
import { defineConfig, presetUno, presetIcons } from 'unocss'

export default defineConfig({
    // ...UnoCSS options
    presets: [
        presetUno(),
        presetIcons({
            collections: {
                'simple-icons': () => import('@iconify-json/simple-icons/icons.json').then(i => i.default),
            },
            extraProperties: {
                display: 'inline-block',
                width: '1.2em',
                height: '1.2em'
            }
        }),
    ],
    safelist: [
        ...Array.from({ length: 8 }, (_, i) => `col-span-${i + 1}`),
        // Add social icons to safelist
        'i-simple-icons-github',
        'i-simple-icons-twitter', 
        'i-simple-icons-linkedin',
        'i-simple-icons-discord',
        'i-simple-icons-x',
        'i-simple-icons-facebook',
        'i-simple-icons-instagram',
    ],
    theme: {
        colors: {
            primary: {
                DEFAULT: "#3B82F6",
                50: "#EFF6FF",
                100: "#DBEAFE",
                200: "#BFDBFE",
                300: "#93C5FD",
                400: "#60A5FA",
                500: "#3B82F6",
                600: "#2563EB",
                700: "#1D4ED8",
                800: "#1E40AF",
                900: "#1E3A8A",
                950: "#172554",
            },
            secondary: {
                DEFAULT: "#64748B",
                50: "#F8FAFC",
                100: "#F1F5F9",
                200: "#E2E8F0",
                300: "#CBD5E1",
                400: "#94A3B8",
                500: "#64748B",
                600: "#475569",
                700: "#334155",
                800: "#1E293B",
                900: "#0F172A",
                950: "#020617",
            },
            accent: {
                DEFAULT: "#8B5CF6",
                50: "#F5F3FF",
                100: "#EDE9FE",
                200: "#DDD6FE",
                300: "#C4B5FD",
                400: "#A78BFA",
                500: "#8B5CF6",
                600: "#7C3AED",
                700: "#6D28D9",
                800: "#5B21B6",
                900: "#4C1D95",
                950: "#2E1065",
            },
            gray: {
                50: "#F9FAFB",
                100: "#F3F4F6",
                200: "#E5E7EB",
                300: "#D1D5DB",
                400: "#9CA3AF",
                500: "#6B7280",
                600: "#4B5563",
                700: "#374151",
                800: "#1F2937",
                900: "#111827",
                950: "#030712",
            }
        }
    }
})
