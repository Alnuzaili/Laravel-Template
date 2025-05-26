<script setup lang="ts">
import Button from '@/components/ui/Button.vue';
import { Link, usePage } from '@inertiajs/vue3';
import { computed } from 'vue';

const props = defineProps({
    navLinkLabelClasses: String,
    links: Object,
});

const currentRoute = computed(() => usePage().url);

// Default navigation items with translations
const defaultNavItems = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'services', path: '/services' },
    { name: 'contact', path: '/contact' }
];

// Check if route is active
function isActive(path: string) {
    return currentRoute.value === path;
}

const emit = defineEmits(['click']);

function handleClick() {
    emit('click');
}
</script>

<template>
    <nav class="flex w-full flex-wrap items-center gap-4">
        <!-- Default navigation links -->
        <div v-for="item in defaultNavItems" :key="item.name" class="text-center">
            <Link :href="item.path" @click="handleClick">
                <Button link>
                    <span
                        :class="[
                            navLinkLabelClasses ?? '',
                            'font-medium transition-all',
                            isActive(item.path) 
                                ? 'text-primary-600 dark:text-primary-400' 
                                : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                        ]"
                    >
                        {{ $t(item.name, item.name.charAt(0).toUpperCase() + item.name.slice(1)) }}
                    </span>
                </Button>
            </Link>
        </div>
        
        <!-- Dynamic links from props -->
        <div v-if="links" v-for="item in links" :key="item.id" class="text-center">
            <Link :href="'/' + item.slug" @click="handleClick">
                <Button link>
                    <span
                        :class="[
                            navLinkLabelClasses ?? '',
                            'font-medium transition-all',
                            isActive('/' + item.slug)
                                ? 'text-primary-600 dark:text-primary-400'
                                : 'text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400'
                        ]"
                    >
                        {{ item.title }}
                    </span>
                </Button>
            </Link>
        </div>
    </nav>
</template>
