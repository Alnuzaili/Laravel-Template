import { defineStore } from 'pinia'




export const useSettingsStore = defineStore('Settings', {
    state: () => {
        return {
            settings: {
                lang: localStorage.getItem('lang') ?? 'ar',
                drawer: false,
            },
        }
    },
    actions: {
        toggleDrawer() {
            this.settings.drawer = !this.settings.drawer
        },
        setLang(lang: string) {
            this.settings.lang = lang
            localStorage.setItem('lang', lang)
        },
    }
})




