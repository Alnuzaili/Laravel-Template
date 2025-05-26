<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<template>
    <footer class="w-full bg-gray-100 px-4 pb-8 pt-16 dark:bg-black md:pb-16 md:pt-20 transition-colors duration-300">
        <div class="container mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <!-- Company Info -->
                <div class="md:col-span-2">
                    <div class="flex items-center mb-4">
                        <div class="h-10 w-10 rounded-md bg-primary-600 flex items-center justify-center text-white dark:bg-primary-400 dark:text-primary-950">
                            <span class="text-xl font-bold">T</span>
                        </div>
                        <span class="ms-3 text-lg font-semibold text-gray-800 dark:text-gray-200">
                            {{ $t('site_name') }}
                        </span>
                    </div>
                    <p class="text-gray-600 dark:text-gray-400 max-w-md">
                        {{ $t('description') }}
                    </p>
                </div>
                
                <!-- Links Column 1 -->
                <div>
                    <h3 class="font-semibold text-gray-800 dark:text-white mb-4">{{ $t('quick_links') }}</h3>
                    <ul class="space-y-2">
                        <li v-for="(link, index) in ['home', 'about', 'services', 'contact']" :key="index">
                            <a href="#" class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                                {{ $t(link, link.charAt(0).toUpperCase() + link.slice(1)) }}
                            </a>
                        </li>
                    </ul>
                </div>
                
                <!-- Links Column 2 -->
                <div>
                    <h3 class="font-semibold text-gray-800 dark:text-white mb-4">{{ $t('legal') }}</h3>
                    <ul class="space-y-2">
                        <li v-for="(link, index) in ['privacy_policy', 'terms', 'cookies']" :key="index">
                            <a href="#" class="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors">
                                {{ $t(link, link.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')) }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Copyright -->
            <div class="pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
                <p class="text-gray-600 dark:text-gray-400">
                    {{ $t('footer') }}
                </p>
            </div>
        </div>
    </footer>
</template>
