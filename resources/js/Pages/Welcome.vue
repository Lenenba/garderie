<script setup>
import GuestLayout from '@/Layouts/GuestLayout2.vue';
import CardAction from '@/Components/CardAction.vue';
import Prize from '@/Components/Primevue/Prize.vue';
import Footer from '@/Components/Primevue/footer.vue';
import RightAlignedImage from '@/Components/Primevue/RightAlignedImage.vue';
</script>

<template>
    <InertiaHead title="Welcome" />
    <GuestLayout>
        <RightAlignedImage />
        <Prize />
        <Footer />
    </GuestLayout>
</template>
