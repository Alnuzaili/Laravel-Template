<script setup lang="ts">
import { computed } from 'vue';
import { Link } from '@inertiajs/vue3';
import Button from '@/components/ui/Button.vue';

const currentYear = computed(() => new Date().getFullYear());

const socialLinks = [
    { name: 'GitHub', icon: 'i-simple-icons-github', href: '#' },
    { name: 'Twitter', icon: 'i-simple-icons-twitter', href: '#' },
    { name: 'LinkedIn', icon: 'i-simple-icons-linkedin', href: '#' },
    { name: 'Discord', icon: 'i-simple-icons-discord', href: '#' }
];

const quickLinks = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'services', href: '/services' },
    { name: 'contact', href: '/contact' }
];

const legalLinks = [
    { name: 'privacy_policy', href: '/privacy' },
    { name: 'terms', href: '/terms' },
    { name: 'cookies', href: '/cookies' }
];
</script>

<template>
    <footer class="w-full bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 px-6 pb-8 pt-20 md:pb-12 md:pt-24 transition-colors duration-300 border-t border-gray-200/50 dark:border-gray-700/50">
        <div class="container mx-auto">
            <!-- Main Footer Content -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <!-- Enhanced Company Info -->
                <div class="lg:col-span-2">
                    <div class="flex items-center mb-6">
                        <div class="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 flex items-center justify-center text-white dark:from-primary-400 dark:via-primary-500 dark:to-primary-600 shadow-xl">
                            <span class="text-2xl font-bold">T</span>
                        </div>
                        <span class="ms-4 text-2xl font-bold text-gray-800 dark:text-gray-200">
                            {{ $t('site_name') }}
                        </span>
                    </div>
                    <p class="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8 leading-relaxed">
                        {{ $t('description', 'Building the future with modern web technologies and exceptional user experiences.') }}
                    </p>
                    
                    <!-- Social Links -->
                    <div class="flex gap-4">
                        <a 
                            v-for="social in socialLinks" 
                            :key="social.name"
                            :href="social.href"
                            class="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg"
                            :title="social.name"
                        >
                            <i :class="[social.icon, 'text-xl']"></i>
                        </a>
                    </div>
                </div>
                
                <!-- Enhanced Quick Links -->
                <div>
                    <h3 class="font-bold text-xl text-gray-800 dark:text-white mb-6 flex items-center">
                        <i class="i-heroicons-link mr-2 text-primary-600 dark:text-primary-400"></i>
                        {{ $t('quick_links', 'Quick Links') }}
                    </h3>
                    <ul class="space-y-3">
                        <li v-for="link in quickLinks" :key="link.name">
                            <Link 
                                :href="link.href"
                                class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300 flex items-center group text-lg"
                            >
                                <i class="i-heroicons-chevron-right w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></i>
                                {{ $t(link.name, link.name.charAt(0).toUpperCase() + link.name.slice(1)) }}
                            </Link>
                        </li>
                    </ul>
                </div>
                
                <!-- Enhanced Legal Links -->
                <div>
                    <h3 class="font-bold text-xl text-gray-800 dark:text-white mb-6 flex items-center">
                        <i class="i-heroicons-shield-check mr-2 text-primary-600 dark:text-primary-400"></i>
                        {{ $t('legal', 'Legal') }}
                    </h3>
                    <ul class="space-y-3">
                        <li v-for="link in legalLinks" :key="link.name">
                            <Link 
                                :href="link.href"
                                class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors duration-300 flex items-center group text-lg"
                            >
                                <i class="i-heroicons-chevron-right w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0"></i>
                                {{ $t(link.name, link.name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')) }}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Newsletter Subscription -->
            <div class="bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 mb-12 border border-primary-200/50 dark:border-primary-700/50">
                <div class="text-center">
                    <h4 class="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                        {{ $t('newsletter_title', 'Stay Updated') }}
                    </h4>
                    <p class="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                        {{ $t('newsletter_description', 'Get the latest updates and exclusive content delivered to your inbox.') }}
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input 
                            type="email" 
                            placeholder="Enter your email"
                            class="flex-1 px-6 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        >
                        <Button
                            variant="primary"
                            size="lg"
                            rounded
                            class="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 px-8"
                        >
                            {{ $t('subscribe', 'Subscribe') }}
                        </Button>
                    </div>
                </div>
            </div>
            
            <!-- Enhanced Copyright -->
            <div class="pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
                <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p class="text-gray-600 dark:text-gray-400 text-lg">
                        © {{ currentYear }} {{ $t('site_name') }}. {{ $t('footer_rights', 'All rights reserved.') }}
                    </p>
                    <div class="flex items-center space-x-2 text-gray-500 dark:text-gray-500">
                        <span>{{ $t('made_with', 'Made with') }}</span>
                        <i class="i-heroicons-heart text-red-500 animate-pulse"></i>
                        <span>{{ $t('by_team', 'by our team') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
