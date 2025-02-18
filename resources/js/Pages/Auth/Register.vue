<script setup>
import GuestLayout from '@/Layouts/GuestLayout.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

import Finput from '@/Components/Primevue/Form/Flnput.vue';
import FPassword from '@/Components/Primevue/Form/FPassword.vue';
import SelectedButton from '@/Components/Primevue/Form/SelectedButton.vue';

const options = [
    'Gardien(ne)',
    'Enseignant(e)',
    'Parent'
]

const form = useForm({
    name: '',
    email: '',
    password: '',
    role: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <GuestLayout>
        <Head title="Register" />

        <form @submit.prevent="submit">
            <div class="mt-1 block w-full">
                <Finput v-model="form.name" id="name" label="name"  :message="form.errors.name"/>
            </div>

            <div class="mt-4">
                <Finput v-model="form.email" id="email" label="email"  :message="form.errors.email"/>

            </div>

            <div class="mt-4">
                <FPassword v-model="form.password" id="password" label="Password"  :message="form.errors.password"/>
            </div>

            <div class="mt-4">
                <FPassword v-model="form.password_confirmation" id="password_confirmation" label="password confirmation"  :message="form.errors.password_confirmation"/>
            </div>

            <div class="mt-4">
                <SelectedButton v-model="form.role" :message="form.errors.role"  :options="options"/>
            </div>
            <div class="mt-4 flex items-center justify-center">
                <Link
                    :href="route('login')"
                    class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Already registered?
                </Link>

                <PrimaryButton
                    class="ms-4"
                    :class="{ 'opacity-25': form.processing }"
                    :disabled="form.processing"
                >
                    Register
                </PrimaryButton>
            </div>
        </form>
    </GuestLayout>
</template>
