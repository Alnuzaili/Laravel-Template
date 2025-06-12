<script setup lang="ts">
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Button from '@/components/ui/Button.vue';
import { setI18nLanguage } from '@/utils/functions';
import { onBeforeMount, ref, onMounted, onBeforeUnmount } from 'vue';
import { motion } from "motion-v";

// Refs for UI state
const isHeaderActive = ref(false);
const isTopButtonVisible = ref(false);
const mainContentRef = ref<HTMLElement | null>(null);

// Set the default language on mount
onBeforeMount(async () => {
    await setI18nLanguage(localStorage.getItem('lang') ?? 'ar');
});

// Optimized scroll handler with throttling
let ticking = false;
function handleScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            if (mainContentRef.value?.scrollTop > 100) {
                isHeaderActive.value = true;
                isTopButtonVisible.value = true;
            } else {
                isHeaderActive.value = false;
                isTopButtonVisible.value = false;
            }
            ticking = false;
        });
        ticking = true;
    }
}

// Scroll to top with smooth behavior
function scrollToTop() {
    mainContentRef.value?.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

// Cleanup event listeners on component unmount
onMounted(() => {
    mainContentRef.value?.addEventListener('scroll', handleScroll, { passive: true });
});

onBeforeUnmount(() => {
    mainContentRef.value?.removeEventListener('scroll', handleScroll);
});

// Define props with a default empty object for pages if not provided
defineProps({
    pages: {
        type: Object,
        default: () => ({ data: {} })
    }
});
</script>

<template>
    <div class="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 transition-all duration-500">
        <!-- Enhanced Header with animation -->
        <motion.div
            class="absolute left-0 right-0 top-0 z-20 flex flex-col"
            :initial="{ opacity: 0, y: -100 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.2, duration: 0.6, ease: 'easeOut' }"
        >
            <Header 
                :links="pages?.data || {}" 
                :class="{ 'nav-bg shadow-2xl': isHeaderActive }" 
            />
        </motion.div>

        <!-- Enhanced Back to top button -->
        <transition 
            enter-active-class="transition duration-300 ease-out"
            enter-from-class="transform scale-0 opacity-0 rotate-180"
            enter-to-class="transform scale-100 opacity-100 rotate-0"
            leave-active-class="transition duration-200 ease-in"
            leave-from-class="transform scale-100 opacity-100 rotate-0"  
            leave-to-class="transform scale-0 opacity-0 rotate-180"
        >
            <div v-if="isTopButtonVisible" class="fixed bottom-8 right-8 z-30">
                <Button
                    variant="primary"
                    size="xl"
                    icon="i-heroicons-arrow-up"
                    icon-position="center"
                    rounded
                    class="bg-gradient-to-br from-primary-600 to-primary-800 hover:from-primary-700 hover:to-primary-900 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 w-14 h-14 backdrop-blur-sm border border-primary-400/50"
                    @click="scrollToTop"
                    :title="$t('scroll_to_top', 'Scroll to top')"
                >
                    <span class="sr-only">{{ $t('scroll_to_top', 'Scroll to top') }}</span>
                </Button>
            </div>
        </transition>
        
        <!-- Enhanced Main content area -->
        <main 
            ref="mainContentRef"
            class="h-full w-full overflow-y-auto overflow-x-hidden bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-black dark:via-gray-900/50 dark:to-black transition-all duration-500 scroll-smooth"
            style="scrollbar-width: thin; scrollbar-color: rgb(var(--primary-600)) transparent;"
        >
            <div class="min-h-[calc(100vh-120px)] pt-20">
                <motion.div
                    :initial="{ opacity: 0, y: 20 }"
                    :animate="{ opacity: 1, y: 0 }"
                    :transition="{ delay: 0.4, duration: 0.8 }"
                >
                    <slot />
                </motion.div>
            </div>
            <Footer />
        </main>
    </div>
</template>

<style scoped>
.nav-bg {
    backdrop-filter: blur(16px);
    background: rgba(255, 255, 255, 0.85);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.dark .nav-bg {
    background: rgba(15, 23, 42, 0.85);
}

/* Enhanced scrollbar styling */
main::-webkit-scrollbar {
    width: 8px;
}

main::-webkit-scrollbar-track {
    background: transparent;
}

main::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, rgb(var(--primary-600)), rgb(var(--primary-800)));
    border-radius: 10px;
}

main::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, rgb(var(--primary-700)), rgb(var(--primary-900)));
}
</style>
