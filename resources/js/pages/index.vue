<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import { Head } from '@inertiajs/vue3';
import { motion } from 'motion-v';
import { useAppearance } from '@/composables/useAppearance';

defineOptions({
    layout: DefaultLayout,
});

const { appearance } = useAppearance();
</script>

<template>
    <Head title="Welcome" />
    
    <div class="container mx-auto py-16 px-4 flex flex-col items-center justify-center min-h-[70vh]">
        <!-- Welcome content with animation -->
        <motion.div
            class="text-center mb-12"
            :initial="{ opacity: 0, y: 50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.6 }"
        >
            <h1 class="text-5xl font-bold mb-4 text-primary-800 dark:text-primary-200">
                {{ $t('site_name') }}
            </h1>
            <p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {{ $t('description') }}
            </p>
        </motion.div>

        <!-- Feature cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mt-12">
            <motion.div 
                v-for="(i, index) in 3" 
                :key="index"
                class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
                :initial="{ opacity: 0, y: 20 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ delay: 0.2 * index, duration: 0.5 }"
            >
                <div class="h-12 w-12 rounded-lg bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-4">
                    <div class="text-primary-600 dark:text-primary-400 text-xl font-bold">{{ index + 1 }}</div>
                </div>
                <h3 class="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
                    {{ $t(`feature${index+1}_title`, `Feature ${index+1}`) }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                    {{ $t(`feature${index+1}_description`, `This is a sample feature description for feature ${index+1}.`) }}
                </p>
            </motion.div>
        </div>
    </div>
</template>
