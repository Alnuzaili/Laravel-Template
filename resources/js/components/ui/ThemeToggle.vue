<script setup lang="ts">
import { computed } from 'vue';
import { useAppearance } from '@/composables/useAppearance';
import Button from '@/components/ui/Button.vue';

const { appearance, updateAppearance } = useAppearance();

const toggleTheme = () => {
    // Cycle through themes: light -> dark -> system -> light
    if (appearance.value === 'light') {
        updateAppearance('dark');
    } else if (appearance.value === 'dark') {
        updateAppearance('system');
    } else {
        updateAppearance('light');
    }
};

const themeIcon = computed(() => {
    switch (appearance.value) {
        case 'light':
            return 'i-heroicons-sun-20-solid';
        case 'dark':
            return 'i-heroicons-moon-20-solid';
        default:
            return 'i-heroicons-computer-desktop-20-solid';
    }
});

const themeLabel = computed(() => {
    switch (appearance.value) {
        case 'light':
            return 'Switch to Dark Mode';
        case 'dark':
            return 'Switch to System Theme';
        default:
            return 'Switch to Light Mode';
    }
});
</script>

<template>
    <div class="theme-toggle">
        <Button
            class="relative overflow-hidden bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-800 dark:to-primary-900 hover:from-primary-200 hover:to-primary-300 dark:hover:from-primary-700 dark:hover:to-primary-800 text-primary-700 dark:text-primary-300 border border-primary-300 dark:border-primary-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            variant="ghost"
            size="lg"
            :icon="themeIcon"
            icon-position="center"
            rounded
            @click="toggleTheme"
            :title="themeLabel"
        >
            <span class="sr-only">{{ themeLabel }}</span>
            
            <!-- Animated background effect -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary-400/20 to-primary-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
    </div>
</template>
