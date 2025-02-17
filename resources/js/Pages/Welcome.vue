<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout2.vue';
import CardAction from '@/Components/CardAction.vue';
</script>

<template>
    <Head title="Welcome" />
    <GuestLayout>
        <CardAction />
    </GuestLayout>
</template>
