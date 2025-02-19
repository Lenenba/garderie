<template>
    <div class="bg-surface-50 dark:bg-surface-950 ">
        <div class="bg-surface-0 dark:bg-surface-900 p-6 shadow rounded-border">
            <div class="text-3xl font-medium text-surface-900 dark:text-surface-0 mb-2">{{ title }}</div>
            <div class="font-medium text-surface-500 dark:text-surface-300 mb-4">{{ description }}</div>
            <div class="min-h-[36rem]" >
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Card Title'
    },
    description: {
        type: String,
        default: 'Vivamus id nisl interdum, blandit augue sit amet, eleifend mi.'
    }
});
</script>
