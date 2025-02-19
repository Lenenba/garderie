<template>
    <div class="min-h-screen flex relative lg:static bg-surface-50 dark:bg-surface-950">
        <div id="app-sidebar-1" class="bg-surface-0 dark:bg-surface-950 min-h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-10 border-r border-surface select-none w-[280px]">
            <div class="flex flex-col h-full">
                <div class="flex items-center px-8 flex-shrink-0 h-[60px]">
                    <ApplicationLogo class="w-32 h-32 mt-4" />
                </div>
                <div class="overflow-y-auto">
                    <ul class="list-none p-4 m-0">
                        <li>
                            <a class="flex items-center cursor-pointer p-4 rounded-border text-surface-700 dark:text-surface-100 hover:bg-surface-100 dark:hover:bg-surface-700 duration-150 transition-colors">
                                <i class="pi pi-home mr-2 !text-xl !leading-none" />
                                <span class="font-medium">Dashboard</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="min-h-screen flex flex-col relative flex-auto">
            <div class="flex justify-between items-center px-8 bg-surface-0 dark:bg-surface-900 border-b border-surface relative lg:static h-[60px]">
                <div class="flex">
                    <a
                        v-styleclass="{
                            selector: '#app-sidebar-1',
                            enterFromClass: 'hidden',
                            enterActiveClass: 'animate-fadeinleft',
                            leaveToClass: 'hidden',
                            leaveActiveClass: 'animate-fadeoutleft',
                            hideOnOutsideClick: true
                        }"
                        class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100 mr-4 mt-1"
                    >
                        <i class="pi pi-bars text-4xl" />
                    </a>
                    <IconField icon-position="left">
                        <InputIcon class="pi pi-search text-surface-700 dark:text-surface-100" />
                        <InputText type="text" class="border-0 w-40 sm:w-80" placeholder="Search" />
                    </IconField>
                </div>
                <a
                    v-styleclass="{
                        selector: '@next',
                        enterFromClass: 'hidden',
                        enterActiveClass: 'animate-fadein',
                        leaveToClass: 'hidden',
                        leaveActiveClass: 'animate-fadeout',
                        hideOnOutsideClick: true
                    }"
                    class="cursor-pointer block lg:hidden text-surface-700 dark:text-surface-100"
                >
                    <i class="pi pi-ellipsis-v text-2xl" />
                </a>
                <ul
                    class="list-none p-0 m-0 hidden lg:flex lg:items-center select-none lg:flex-row border lg:border-0 border-surface right-0 top-full z-10 shadow lg:shadow-none absolute lg:static bg-surface-0 dark:bg-surface-900"
                >
                    <li>
                        <a
                            class="flex p-4 lg:px-4 lg:py-2 items-center text-surface-600 dark:text-surface-200 hover:text-surface-900 dark:hover:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-700 font-medium rounded-border cursor-pointer duration-150 transition-colors"
                        >
                            <i class="pi pi-inbox text-base lg:!text-2xl leading-none mr-2 lg:mr-0" />
                            <span class="block lg:hidden font-medium">Inbox</span>
                        </a>
                    </li>
                    <li>
                        <a
                            class="flex p-4 lg:px-4 lg:py-2 items-center text-surface-600 dark:text-surface-200 hover:text-surface-900 dark:hover:text-surface-0 hover:bg-surface-100 dark:hover:bg-surface-700 font-medium rounded-border cursor-pointer duration-150 transition-colors"
                        >
                            <OverlayBadge severity="danger" class="mr-2 lg:mr-0">
                                <i class="pi pi-bell text-base lg:!text-2xl leading-none" />
                            </OverlayBadge>
                            <span class="block lg:hidden font-medium">Notifications</span>
                        </a>
                    </li>
                    <li class="border-t border-surface lg:border-t-0">
                        <a class="flex p-4 lg:px-4 lg:py-2 items-center hover:bg-surface-100 dark:hover:bg-surface-700 font-medium rounded-border cursor-pointer duration-150 transition-colors">
                            <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1.png" class="mr-4 lg:mr-0 w-8 h-8" />
                            <div class="block lg:hidden">
                                <div class="text-surface-900 dark:text-surface-0 font-medium">Josephine Lillard</div>
                                <span class="text-surface-600 dark:text-surface-200 font-medium text-sm">Marketing Specialist</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="p-8 flex flex-col flex-auto">
                <div class="flex-auto" >
                    <slot />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import InputText from 'primevue/inputtext';
import OverlayBadge from 'primevue/overlaybadge';
</script>
