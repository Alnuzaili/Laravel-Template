<!-- filepath: /media/abdullah-barakat/New Volume/git/MO-Cafe/resources/js/components/Header.vue -->
<script setup lang="ts">
import { changeLanguage } from '@/utils/functions';
import { Link } from '@inertiajs/vue3';
import Navigations from '@/components/Navigations.vue';
import Button from '@/components/ui/Button.vue';
import ThemeToggle from '@/components/ui/ThemeToggle.vue';
import { ref } from 'vue';

defineProps<{ links: Object }>();

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

function closeMobileMenu() {
    isMobileMenuOpen.value = false;
}
</script>

<template>
    <div class="topbar w-full transition-all duration-300 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200/50 dark:border-gray-700/50">
        <header class="container mx-auto px-6 py-5">
            <div class="flex items-center justify-between">
                <!-- Enhanced Logo and Brand -->
                <div class="flex items-center" :class="{ 'space-x-4': $i18n.locale === 'en', 'space-x-reverse space-x-4': $i18n.locale === 'ar' }">
                    <Link href="/" class="flex items-center group" @click="closeMobileMenu">
                        <div class="h-12 w-12 rounded-xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center text-white dark:from-primary-400 dark:via-primary-500 dark:to-primary-600 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                            <span class="text-2xl font-bold">T</span>
                        </div>
                        <span class="ms-4 text-xl font-bold hidden sm:inline-block text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {{ $t('site_name') }}
                        </span>
                    </Link>
                </div>

                <!-- Navigation - Desktop -->
                <div class="hidden md:block">
                    <Navigations 
                        nav-link-label-classes="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-semibold text-lg px-4 py-2 rounded-lg transition-all duration-300"
                        :links="links" 
                    />
                </div>

                <!-- Enhanced Controls -->
                <div class="flex items-center space-x-3">
                    <!-- Admin Panel Quick Access -->
                    <a href="/admin" class="hidden lg:inline-block">
                        <Button
                            variant="ghost"
                            size="md"
                            rounded
                            icon="i-heroicons-cog-6-tooth"
                            class="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                            :title="$t('admin_panel', 'Admin Panel')"
                        />
                    </a>

                    <!-- Theme Toggle -->
                    <ThemeToggle />
                    
                    <!-- Enhanced Language Switch -->
                    <Button
                        variant="ghost"
                        rounded
                        size="md"
                        class="border border-primary-300 dark:border-primary-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300"
                        @click="changeLanguage($i18n.locale === 'en' ? 'ar' : 'en')"
                        aria-label="Change language"
                    >
                        <span class="font-semibold text-primary-600 dark:text-primary-400">
                            {{ $i18n.locale === 'en' ? 'عربي' : 'English' }}
                        </span>
                    </Button>
                    
                    <!-- Enhanced Mobile Menu Button -->
                    <Button
                        variant="ghost"
                        class="md:hidden border border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500"
                        icon="i-heroicons-bars-3"
                        size="md"
                        rounded
                        @click="toggleMobileMenu"
                        aria-label="Toggle mobile menu"
                        :aria-expanded="isMobileMenuOpen"
                    />
                </div>
            </div>

            <!-- Enhanced Mobile Navigation -->
            <transition 
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="transform scale-95 opacity-0 -translate-y-2"
                enter-to-class="transform scale-100 opacity-100 translate-y-0"
                leave-active-class="transition duration-200 ease-in"
                leave-from-class="transform scale-100 opacity-100 translate-y-0"
                leave-to-class="transform scale-95 opacity-0 -translate-y-2"
            >
                <div v-if="isMobileMenuOpen" class="md:hidden mt-6 p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50">
                    <Navigations 
                        nav-link-label-classes="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-lg transition-all duration-300 font-medium"
                        :links="links" 
                        @click="closeMobileMenu"
                    />
                    
                    <!-- Mobile Admin Panel Link -->
                    <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                        <a href="/admin" @click="closeMobileMenu">
                            <Button
                                variant="primary"
                                size="lg"
                                rounded
                                block
                                icon="i-heroicons-cog-6-tooth"
                                class="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"
                            >
                                {{ $t('admin_panel', 'Admin Panel') }}
                            </Button>
                        </a>
                    </div>
                </div>
            </transition>
        </header>
    </div>
</template>

<style scoped>
.topbar {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.nav-bg {
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
</style>
