<template>
    <div class="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
        <div class="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-6xl sm:rounded-lg">
            <InertiaHead title="Log in" />
            <div class="flex w-full bg-surface-0 dark:bg-surface-950">
                <div class="bg-surface-0 dark:bg-surface-950 w-full md:w-6/12 p-12 md:p-20">
                    <div class="mb-8">
                        <Link href="/">
                            <ApplicationLogo class="h-20 w-20 fill-current text-gray-500" />
                        </Link>
                        <span class="text-surface-600 dark:text-surface-200 font-medium mr-2">Don't have an  account?</span>
                        <Link class="font-medium no-underline text-primary cursor-pointer" :href="route('register')">Create today!</Link>
                    </div>
                    <div>
                        <form @submit.prevent="submit">
                            <Finput v-model="form.email" id="email" label="Email"  :message="form.errors.email"/>
                            <FPassword v-model="form.password" id="password" label="Password"  :message="form.errors.password"/>
                            <div class="mt-4 block">
                                <label class="flex items-center">
                                    <Checkbox v-model="form.remember" binary />
                                    <span class="ms-2 text-sm text-gray-600"
                                        >Remember me</span
                                    >
                                </label>
                            </div>
                            <div class="mt-4 flex flex-col items-center justify-end">
                                <Link
                                    v-if="canResetPassword"
                                    :href="route('password.request')"
                                    class="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    Forgot your password?
                                </Link>
                                <Button label="Sign In" icon="pi pi-user !text-xl !leading-none" class="w-full p-4 mt-4" type="submit"/>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    class="hidden md:block w-6/12 bg-no-repeat bg-cover  " :style="{ backgroundImage: `url('${storageUrl}')` }"/>
            </div>
        </div>
    </div>

</template>
<script setup>
import Button from 'primevue/button';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import { useForm } from '@inertiajs/vue3';
import Finput from '@/Components/Primevue/Form/Flnput.vue';
import FPassword from '@/Components/Primevue/Form/FPassword.vue';

import Checkbox from 'primevue/checkbox';

import { ref, computed } from 'vue';

const checked2 = ref(true);

defineProps({
    canResetPassword: {
        type: Boolean,
    },
    status: {
        type: String,
    },
});

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const storageUrl = computed(() => {
  return `/storage/login2.png`; // Accessible via storage symlink
});

const submit = () => {
    form.post(route('login'), {
        onFinish: () => form.reset('password'),
    });
};
</script>
