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
            return 'Light Mode';
        case 'dark':
            return 'Dark Mode';
        default:
            return 'System Theme';
    }
});
</script>

<template>
    <div class="theme-toggle">
        <Button
            class="flex! aspect-square! bg-primary-50/80! hover:bg-primary-100! text-primary-800! hover:text-primary-700! p-0!"
            variant="accent"
            size="xl"
            :icon="themeIcon"
            icon-position="center"
            rounded
            @click="toggleTheme"
            :title="themeLabel"
        >
            <span class="sr-only">{{ themeLabel }}</span>
        </Button>
    </div>
</template>
