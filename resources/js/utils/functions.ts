import { i18n } from '@/app'
import { type Locale } from 'vue-i18n'
import { useSettingsStore } from '@/stores/settings'
import { router } from '@inertiajs/vue3'





export async function setI18nLanguage(lang: Locale) {
    const settingsStore = useSettingsStore()

    i18n.global.locale.value = lang as any
    if (typeof document !== 'undefined') {
        document.querySelector('html')?.setAttribute('lang', lang)
        if (lang.includes('ar'))
            document.querySelector('html')?.setAttribute('dir', 'rtl')
        if (lang.includes('en'))
            document.querySelector('html')?.setAttribute('dir', 'ltr')
    }

    settingsStore.settings.lang = lang
    await localStorage.setItem('lang', lang)
}



export async function changeLanguage(lang: string) {
    setI18nLanguage(lang)
    await router.post('/set-locale', { locale: lang },{
        preserveState: true,
        onSuccess: () => location.reload()
    })

}
