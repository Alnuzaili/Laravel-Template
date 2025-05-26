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
            if (mainContentRef.value?.scrollTop > 80) {
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
    <div class="relative h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <!-- Header with animation -->
        <motion.div
            class="absolute left-0 right-0 top-0 z-10 flex flex-col"
            :initial="{ opacity: 0, y: -50 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ delay: 0.3, duration: 0.5 }"
        >
            <Header 
                :links="pages?.data || {}" 
                :class="{ 'nav-bg': isHeaderActive }" 
            />
        </motion.div>

        <!-- Back to top button with fade transition -->
        <transition name="fade">
            <div v-if="isTopButtonVisible" class="to-top-btn fixed bottom-8 end-12 z-10">
                <Button
                    variant="ghost"
                    size="2xl"
                    icon="i-heroicons-arrow-small-up-solid"
                    class="rounded-full border border-primary-600 dark:border-primary-400 hover:bg-primary-100 dark:hover:bg-primary-800 dark:text-primary-200 p-0 aspect-square"
                    @click="scrollToTop"
                    aria-label="Scroll to top"
                />
            </div>
        </transition>
        
        <!-- Main content area -->
        <main 
            ref="mainContentRef"
            class="h-full w-full overflow-y-auto overflow-x-hidden bg-white dark:bg-black transition-colors duration-300"
        >
            <div class="min-h-[calc(100vh-120px)]">
                <slot />
            </div>
            <Footer />
        </main>
    </div>
</template>

<style scoped>
.nav-bg {
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
