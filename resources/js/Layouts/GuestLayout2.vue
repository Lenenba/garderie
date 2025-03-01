<template>
    <div class="bg-surface-50 dark:bg-surface-950 min-h-[70rem]">
        <div v-if="$page.props.auth.user" class="bg-surface-950 px-4 sm:px-12 py-4 flex items-stretch justify-center sm:justify-end border-b border-surface text-sm">
            <Link  v-if="$page.props.auth.user"
            :href="route('dashboard')">
                <a class="text-white font-medium inline-flex items-center cursor-pointer px-4 hover:text-gray-200">
                    <i class="pi pi-home mr-1 sm:mr-2 !text-sm !leading-none" />
                    <span>Dashboard</span>
                </a>
            </Link>
        </div>
        <div v-else class="bg-surface-950 px-4 sm:px-12 py-4 flex items-stretch justify-center sm:justify-end border-b border-surface text-sm">
            <Link :href="route('login')">
                <a class="text-white font-medium inline-flex items-center cursor-pointer px-4 hover:text-gray-200">
                    <i class="pi pi-sign-in mr-2 sm:mr-4 !text-sm !leading-none" />
                    <span>Sign In</span>
                </a>
            </Link>
            <div class="text-white mx-1 sm:mx-2">|</div>
            <Link  v-if="canRegister" class="text-white font-medium inline-flex items-center cursor-pointer px-4 hover:text-gray-200" :href="route('register')">
                <i class="pi pi-user mr-2 sm:mr-4 !text-sm !leading-none" />
                <span>Create Account</span>
            </Link>
        </div>
        <div class="bg-surface-0 dark:bg-surface-900 px-4 sm:px-12 flex items-stretch relative min-h-[30px]">
            <a
                v-styleclass="{
                    selector: '#nav-1',
                    enterFromClass: 'hidden',
                    leaveToClass: 'hidden',
                    hideOnOutsideClick: true
                }"
                class="cursor-pointer flex items-center lg:hidden text-surface-700 dark:text-surface-100 mr-4 sm:mr-8"
            >
                <i class="pi pi-bars !text-4xl !leading-none" />
            </a>
            <div class="flex items-center justify-center ">
                <ApplicationLogo class="h-20 w-20 fill-current text-gray-500" />

            </div>
        </div>
        <slot />
    </div>
</template>
<script setup>
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
defineProps({
    canLogin: {
        type: Boolean,
    },
    canRegister: {
        type: Boolean,
    },
});
</script>
