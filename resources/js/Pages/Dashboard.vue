<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import IconsStat from '@/Components/Primevue/Stats/IconsStat.vue';
import DataTable from '@/Components/Primevue/Pages/DataTable.vue';
import PieStats from '@/Components/Primevue/Stats/PieStats.vue';
import PolarStat from '@/Components/Primevue/Stats/PolarStat.vue';
import Galleria from '@/Components/Primevue/Galleria.vue';
</script>

<template>
    <InertiaHead title="Dashboard" />

    <AuthenticatedLayout>
        <IconsStat />
        <div class="grid grid-cols-3 gap-2 mt-4">
            <div class="col-span-1">
                <Galleria />
            </div>
            <div class="col-span-1">
            </div>
            <div class="col-span-1">
                <PolarStat />
            </div>
        </div>
        <div class="grid grid-cols-4 gap-2 mt-4">
            <div class="col-span-1">
                <pie-stats />
            </div>
            <div class="col-span-3 ">
                <DataTable />
            </div>
        </div>
    </AuthenticatedLayout>
</template>
