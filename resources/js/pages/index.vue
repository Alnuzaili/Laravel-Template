<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import Button from '@/components/ui/Button.vue';
import { Head, Link } from '@inertiajs/vue3';
import { motion } from 'motion-v';
import { useAppearance } from '@/composables/useAppearance';

defineOptions({
    layout: DefaultLayout,
});

const { appearance } = useAppearance();

// Enhanced feature data with icons
const features = [
    {
        icon: 'i-heroicons-rocket-launch',
        title: 'feature1_title',
        description: 'feature1_description',
        defaultTitle: 'Fast Performance',
        defaultDescription: 'Built with modern technologies for lightning-fast performance and optimal user experience.'
    },
    {
        icon: 'i-heroicons-shield-check',
        title: 'feature2_title', 
        description: 'feature2_description',
        defaultTitle: 'Secure & Reliable',
        defaultDescription: 'Enterprise-grade security with robust authentication and role-based access control.'
    },
    {
        icon: 'i-heroicons-cog-6-tooth',
        title: 'feature3_title',
        description: 'feature3_description', 
        defaultTitle: 'Easy to Customize',
        defaultDescription: 'Highly customizable with clean code architecture and comprehensive documentation.'
    }
];

// Statistics data
const stats = [
    { value: '10K+', labelKey: 'stats_active_users', defaultLabel: 'Active Users', icon: 'i-heroicons-users' },
    { value: '99.9%', labelKey: 'stats_uptime', defaultLabel: 'Uptime', icon: 'i-heroicons-server' },
    { value: '24/7', labelKey: 'stats_support', defaultLabel: 'Support', icon: 'i-heroicons-chat-bubble-left-right' },
    { value: '50+', labelKey: 'stats_countries', defaultLabel: 'Countries', icon: 'i-heroicons-globe-alt' }
];
</script>

<template>
    <Head title="Welcome" />
    
    <div class="relative overflow-hidden">
        <!-- Enhanced background decoration -->
        <div class="absolute inset-0 -z-10 overflow-hidden">
            <div class="absolute -top-40 -right-32 w-96 h-96 bg-primary-200/30 dark:bg-primary-800/30 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute -bottom-40 -left-32 w-96 h-96 bg-secondary-200/30 dark:bg-secondary-800/30 rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent-200/20 dark:bg-accent-800/20 rounded-full blur-2xl"></div>
        </div>

        <div class="container mx-auto py-20 px-4 flex flex-col items-center justify-center min-h-[80vh]">
            <!-- Welcome content with enhanced animation -->
            <motion.div
                class="text-center mb-20"
                :initial="{ opacity: 0, y: 50 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ duration: 0.8, ease: 'easeOut' }"
            >
                <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-3xl mb-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <span class="text-4xl font-bold text-white">T</span>
                </div>
                
                <h1 class="text-7xl md:text-8xl font-bold mb-8 pt-8 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 dark:from-primary-400 dark:via-primary-300 dark:to-primary-200 bg-clip-text text-transparent leading-tight">
                    {{ $t('site_name') }}
                </h1>
                
                <p class="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
                    {{ $t('description', 'Welcome to our amazing platform built with Laravel and Vue.js') }}
                </p>

                <!-- Action buttons with enhanced styling -->
                <motion.div 
                    class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
                    :initial="{ opacity: 0, y: 20 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :transition="{ delay: 0.3, duration: 0.6 }"
                >
                    <Button
                        variant="primary"
                        size="xl"
                        rounded
                        class="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 hover:from-primary-700 hover:via-primary-800 hover:to-primary-900 text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300 px-12 py-4"
                    >
                        <i class="i-heroicons-rocket-launch mr-3"></i>
                        {{ $t('get_started', 'Get Started') }}
                    </Button>
                    
                    <a href="/admin" class="inline-block">
                        <Button
                            variant="secondary"
                            size="xl"
                            rounded
                            icon="i-heroicons-cog-6-tooth"
                            class="bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 border-2 border-primary-300 dark:border-primary-600 hover:border-primary-400 dark:hover:border-primary-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 px-12 py-4"
                        >
                            {{ $t('admin_panel', 'Admin Panel') }}
                        </Button>
                    </a>
                </motion.div>

                <!-- Statistics section -->
                <motion.div 
                    class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    :initial="{ opacity: 0, y: 30 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :transition="{ delay: 0.6, duration: 0.8 }"
                >
                    <div v-for="(stat, index) in stats" :key="index" class="text-center group">
                        <div class="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 transform hover:-translate-y-1">
                            <i :class="[stat.icon, 'text-3xl text-primary-600 dark:text-primary-400 mb-3 block']"></i>
                            <div class="text-3xl font-bold text-gray-800 dark:text-white mb-2">{{ stat.value }}</div>
                            <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">{{ $t(stat.labelKey, stat.defaultLabel) }}</div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            <!-- Enhanced feature cards -->
            <motion.div 
                class="w-full max-w-7xl"
                :initial="{ opacity: 0, y: 30 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ delay: 0.8, duration: 0.8 }"
            >
                <div class="text-center mb-16">
                    <h2 class="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
                        {{ $t('features_title', 'Key Features') }}
                    </h2>
                    <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {{ $t('features_subtitle', 'Discover what makes our platform special') }}
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <motion.div 
                        v-for="(feature, index) in features" 
                        :key="index"
                        class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-10 rounded-3xl shadow-lg hover:shadow-3xl border border-gray-200/50 dark:border-gray-700/50 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-500 transform hover:-translate-y-4"
                        :initial="{ opacity: 0, y: 20 }"
                        :animate="{ opacity: 1, y: 0 }"
                        :transition="{ delay: 0.2 * index + 1, duration: 0.6 }"
                    >
                        <!-- Enhanced card decoration -->
                        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 rounded-t-3xl"></div>
                        
                        <!-- Enhanced icon -->
                        <div class="relative mb-8">
                            <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-100 via-primary-200 to-primary-300 dark:from-primary-900 dark:via-primary-800 dark:to-primary-700 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-lg">
                                <i :class="[feature.icon, 'text-3xl text-primary-600 dark:text-primary-400']"></i>
                            </div>
                        </div>

                        <!-- Enhanced content -->
                        <h3 class="text-3xl font-bold mb-6 text-gray-800 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {{ $t(feature.title, feature.defaultTitle) }}
                        </h3>
                        
                        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            {{ $t(feature.description, feature.defaultDescription) }}
                        </p>

                        <!-- Enhanced hover effect -->
                        <div class="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-primary-600/5 to-primary-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                </div>
            </motion.div>

            <!-- Enhanced call to action section -->
            <motion.div 
                class="text-center mt-32 max-w-6xl"
                :initial="{ opacity: 0, y: 30 }"
                :animate="{ opacity: 1, y: 0 }"
                :transition="{ delay: 1.4, duration: 0.8 }"
            >
                <div class="bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/30 dark:via-gray-900/50 dark:to-secondary-900/30 backdrop-blur-sm rounded-3xl p-16 border border-primary-200/50 dark:border-primary-700/50 shadow-2xl">
                    <h3 class="text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-8">
                        {{ $t('cta_title', 'Ready to Get Started?') }}
                    </h3>
                    <p class="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                        {{ $t('cta_description', 'Join thousands of users who trust our platform for their business needs.') }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button
                            variant="primary"
                            size="2xl"
                            rounded
                            class="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <i class="i-heroicons-sparkles mr-3"></i>
                            {{ $t('start_now', 'Start Now') }}
                        </Button>
                        <Button
                            variant="ghost"
                            size="2xl"
                            rounded
                            class="text-primary-600 dark:text-primary-400 hover:bg-primary-100/50 dark:hover:bg-primary-900/30 border border-primary-300 dark:border-primary-600 backdrop-blur-sm"
                        >
                            <i class="i-heroicons-book-open mr-3"></i>
                            {{ $t('learn_more', 'Learn More') }}
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
</template>
