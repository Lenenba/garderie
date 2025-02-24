<script setup>
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import UserProfileHeader from '@/Components/Primevue/Profile/UserProfileHeader.vue';
import { Head, useForm } from '@inertiajs/vue3';
import SimpleCardHeaderColor from '@/Components/Primevue/Pages/SimpleCardHeaderColor.vue';
import Finput from '@/Components/Primevue/Form/Flnput.vue';


defineProps({
    mustVerifyEmail: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});


const form = useForm({
    name: '',
    email: '',
    password: '',
    role: '',
    password_confirmation: '',
});

</script>

<template>
    <Head title="Profile" />

    <AuthenticatedLayout>
        <UserProfileHeader />
        <div class="mt-4 grid grid-cols-3 gap-2">
            <SimpleCardHeaderColor>
                <div class="mt-4">
                    <Finput v-model="form.name"  id="name" label="name"  :message="form.errors.name"/>
                </div>
                <div class="mt-4">
                    <Finput v-model="form.email"  id="email" label="Email"  :message="form.errors.email"/>
                </div>
            </SimpleCardHeaderColor>
        </div>
    </AuthenticatedLayout>
</template>
