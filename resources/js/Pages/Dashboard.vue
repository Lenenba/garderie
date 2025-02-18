<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import IconsStat from '@/Components/Primevue/Stats/IconsStat.vue';
import ChartVertical from '@/Components/Primevue/Stats/ChartVertical.vue';
import SimpleCard from '@/Components/Primevue/Pages/SimpleCard.vue';
</script>

<template>
    <InertiaHead title="Dashboard" />

    <AuthenticatedLayout>
        <IconsStat />
        <div class="grid grid-cols-2 gap-6 mt-6">
            <SimpleCard>
                <ChartVertical />
            </SimpleCard>
        </div>
    </AuthenticatedLayout>
</template>
