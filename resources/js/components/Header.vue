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
    <div class="topbar w-full transition-all duration-300">
        <header class="container mx-auto px-4 py-4">
            <div class="flex items-center justify-between">
                <!-- Logo and Brand -->
                <div class="flex items-center" :class="{ 'space-x-4': $i18n.locale === 'en', 'space-x-reverse space-x-4': $i18n.locale === 'ar' }">
                    <Link href="/" class="flex items-center" @click="closeMobileMenu">
                        <div class="h-10 w-10 rounded-md bg-primary-600 flex items-center justify-center text-white dark:bg-primary-400 dark:text-primary-950">
                            <span class="text-xl font-bold">T</span>
                        </div>
                        <span class="ms-3 text-lg font-semibold hidden sm:inline-block text-gray-800 dark:text-gray-200">
                            {{ $t('site_name') }}
                        </span>
                    </Link>
                </div>

                <!-- Navigation - Desktop -->
                <div class="hidden md:block">
                    <Navigations 
                        nav-link-label-classes="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                        :links="links" 
                    />
                </div>

                <!-- Controls -->
                <div class="flex items-center space-x-4">
                    <!-- Theme Toggle -->
                    <ThemeToggle />
                    
                    <!-- Language Switch -->
                    <Button
                        variant="outline"
                        rounded
                        size="sm"
                        class="border-primary-600 dark:border-primary-400"
                        @click="changeLanguage($i18n.locale === 'en' ? 'ar' : 'en')"
                        aria-label="Change language"
                    >
                        <span class="font-medium dark:text-primary-400 text-primary-600">
                            {{ $i18n.locale === 'en' ? 'عربي' : 'English' }}
                        </span>
                    </Button>
                    
                    <!-- Mobile Menu Button -->
                    <Button
                        variant="ghost"
                        class="md:hidden"
                        icon="i-heroicons-bars-3"
                        @click="toggleMobileMenu"
                        aria-label="Toggle mobile menu"
                        :aria-expanded="isMobileMenuOpen"
                    />
                </div>
            </div>

            <!-- Mobile Navigation with animation -->
            <transition 
                enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-150 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
            >
                <div v-if="isMobileMenuOpen" class="md:hidden mt-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <Navigations 
                        nav-link-label-classes="block py-2 text-gray-700 dark:text-gray-200"
                        :links="links" 
                        @click="closeMobileMenu"
                    />
                </div>
            </transition>
        </header>
    </div>
</template>

<style scoped>
.topbar {
    transition: all 0.3s;
    background-color: rgba(255, 255, 255, 0.9);
}

.dark .topbar {
    background-color: rgba(15, 23, 42, 0.9);
}

.nav-bg {
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
</style>
