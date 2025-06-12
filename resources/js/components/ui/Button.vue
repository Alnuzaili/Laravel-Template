<script setup lang="ts">
import { computed, useSlots } from 'vue';
import { Link } from '@inertiajs/vue3';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'accent' | 'danger' | 'success' | 'warning' | 'info' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    outlined?: boolean;
    rounded?: boolean;
    link?: boolean;
    icon?: string;
    iconPosition?: 'left' | 'right' | 'center';
    disabled?: boolean;
    loading?: boolean;
    href?: string;
    type?: 'button' | 'submit' | 'reset';
    block?: boolean;
    class?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
    variant: 'primary',
    size: 'md',
    outlined: false,
    rounded: false,
    link: false,
    iconPosition: 'left',
    disabled: false,
    loading: false,
    href: '',
    type: 'button',
    block: false,
    class: ''
});

const emit = defineEmits(['click']);

// Handle click event
const handleClick = (event: MouseEvent) => {
    if (!props.disabled && !props.loading) {
        emit('click', event);
    }
};

// Construct appropriate CSS classes based on props
const buttonClasses = computed(() => {
    const classes = [
        // Base button styles
        'inline-flex items-center justify-center transition-all duration-300 font-semibold',

        // Size variants
        {
            'text-sm px-2.5 py-1.5 h-8': props.size === 'sm',
            'px-4 py-2 h-10': props.size === 'md',
            'text-lg px-5 py-2.5 h-12': props.size === 'lg',
            'text-xl px-6 py-3 h-14': props.size === 'xl',
            'text-2xl py-6 px-12 h-18': props.size === '2xl'
        },

        // Border radius
        {
            'rounded-full': props.rounded,
            'rounded-xl': !props.rounded
        },

        // Width
        {
            'w-full': props.block
        },

        // Disabled state
        {
            'opacity-50 cursor-not-allowed': props.disabled,
            'cursor-pointer': !props.disabled && !props.loading,
            'cursor-wait': props.loading
        },

        // Custom class
        props.class
    ];

    // Style variant classes
    if (props.link) {
        classes.push('bg-transparent hover:bg-transparent text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary');
    } else if (props.outlined) {
        switch (props.variant) {
            case 'primary':
                classes.push('border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground');
                break;
            case 'secondary':
                classes.push('border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground dark:border-secondary dark:text-secondary dark:hover:bg-secondary dark:hover:text-secondary-foreground');
                break;
            case 'accent':
                classes.push('border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground dark:border-accent dark:text-accent dark:hover:bg-accent dark:hover:text-accent-foreground');
                break;
            case 'danger':
                classes.push('border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white dark:border-red-400 dark:text-red-400 dark:hover:bg-red-500 dark:hover:text-white');
                break;
            case 'success':
                classes.push('border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-500 dark:hover:text-white');
                break;
            case 'warning':
                classes.push('border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-500 dark:hover:text-white');
                break;
            case 'info':
                classes.push('border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-500 dark:hover:text-white');
                break;
            case 'ghost':
                classes.push('border border-transparent text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800');
                break;
        }
    } else {
        switch (props.variant) {
            case 'primary':
                classes.push('bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-md dark:bg-primary dark:text-primary-foreground dark:hover:bg-primary/90');
                break;
            case 'secondary':
                classes.push('bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-md dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/90');
                break;
            case 'accent':
                classes.push('bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-md dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90');
                break;
            case 'danger':
                classes.push('bg-red-500 text-white hover:bg-red-600 hover:shadow-md dark:bg-red-600 dark:hover:bg-red-700');
                break;
            case 'success':
                classes.push('bg-green-500 text-white hover:bg-green-600 hover:shadow-md dark:bg-green-600 dark:hover:bg-green-700');
                break;
            case 'warning':
                classes.push('bg-yellow-500 text-white hover:bg-yellow-600 hover:shadow-md dark:bg-yellow-600 dark:hover:bg-yellow-700');
                break;
            case 'info':
                classes.push('bg-blue-500 text-white hover:bg-blue-600 hover:shadow-md dark:bg-blue-600 dark:hover:bg-blue-700');
                break;
            case 'ghost':
                classes.push('bg-transparent hover:bg-gray-100 text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800');
                break;
        }
    }

    return classes;
});

// Determine if we need to render an anchor tag
const isAnchor = computed(() => !!props.href);

// Icon spacing class
const slots = useSlots();
const iconSpacingClass = computed(() => {
    if (!props.icon || !slots.default) return '';
    return props.iconPosition === 'left' ? 'mr-2' : 'ml-2';
});
</script>

<template>
    <component
        :is="isAnchor ? Link : 'button'"
        :href="isAnchor ? href : undefined"
        :type="!isAnchor ? type : undefined"
        :disabled="disabled || loading"
        :class="buttonClasses"
        @click="handleClick"
    >
        <!-- Loading spinner -->
        <div v-if="loading" class="i-svg-spinners-270-ring-with-bg w-4 h-4 mr-2"></div>

        <!-- Left icon -->
        <i v-else-if="icon && iconPosition === 'left'" :class="[icon, iconSpacingClass]"></i>

        <!-- Content -->
        <slot v-if="iconPosition !== 'center' || !icon"></slot>

        <!-- Center icon -->
        <i v-if="icon && iconPosition === 'center'" :class="[icon]"></i>

        <!-- Right icon -->
        <i v-if="icon && iconPosition === 'right'" :class="[icon, iconSpacingClass]"></i>
    </component>
</template>
