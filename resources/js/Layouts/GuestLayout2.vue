<template>
    <div class="bg-surface-50 dark:bg-surface-950 min-h-[70rem]">
        <div class="bg-surface-950 px-4 sm:px-12 py-4 flex items-stretch justify-center sm:justify-end border-b border-surface text-sm">
            <a class="text-white font-medium inline-flex items-center cursor-pointer px-4 hover:text-gray-200">
                <i class="pi pi-sign-in mr-2 sm:mr-4 !text-sm !leading-none" />
                <span>Sign In</span>
            </a>
            <div class="text-white mx-1 sm:mx-2">|</div>
            <a class="text-white font-medium inline-flex items-center cursor-pointer px-4 hover:text-gray-200">
                <i class="pi pi-user mr-2 sm:mr-4 !text-sm !leading-none" />
                <span>Create Account</span>
            </a>
        </div>
        <div class="bg-surface-0 dark:bg-surface-900 px-4 sm:px-12 flex items-stretch relative min-h-[80px]">
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
            <div class="flex items-center justify-center">
                <svg class="lg:mr-12 h-8 sm:h-12 fill-surface-600 dark:fill-surface-300" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M20.7207 6.18211L14.9944 3.11148L3.46855 9.28678L0.579749 7.73444L14.9944 0L23.6242 4.62977L20.7207 6.18211ZM14.9996 12.3574L26.5182 6.1821L29.4216 7.73443L14.9996 15.4621L6.37724 10.8391L9.27337 9.28677L14.9996 12.3574ZM2.89613 16.572L0 15.0196V24.2656L14.4147 32V28.8953L2.89613 22.7132V16.572ZM11.5185 18.09L0 11.9147V8.81001L14.4147 16.5376V25.7904L11.5185 24.2312V18.09ZM24.2086 15.0194V11.9147L15.5788 16.5377V31.9998L18.475 30.4474V18.09L24.2086 15.0194ZM27.0969 22.7129V10.3623L30.0004 8.81V24.2653L21.3706 28.895V25.7904L27.0969 22.7129Z"
                    />
                </svg>
            </div>
            <div id="nav-1" class="bg-surface-0 dark:bg-surface-900 hidden lg:flex absolute lg:static left-0 top-full z-10 shadow lg:shadow-none w-full lg:w-auto py-4 lg:py-0">
                <ul class="list-none p-0 m-0 flex flex-col lg:flex-row">
                    <li class="flex flex-col lg:flex-row">
                        <a
                            v-styleclass="{
                                selector: '@next',
                                enterFromClass: 'hidden',
                                leaveToClass: 'hidden',
                                hideOnOutsideClick: true
                            }"
                            class="inline-flex items-center cursor-pointer border-r-2 lg:border-r-0 lg:border-b-2 border-transparent hover:border-primary py-4 lg:py-0 px-12 lg:px-4 text-surface-700 dark:text-surface-100 select-none text-xl lg:text-base font-medium lg:font-base w-full lg:w-auto"
                        >
                            <span>Gardienne</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="flex ml-auto">
                <ul class="list-none p-0 m-0 flex">
                    <li class="flex">
                        <a class="text-surface-900 dark:text-surface-0 font-medium inline-flex items-center cursor-pointer px-2 sm:px-4 hover:text-primary">
                            <i class="pi pi-shopping-cart lg:mr-4 !text-xl sm:!text-base !leading-none" />
                            <span class="hidden lg:inline">Cart</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <slot />
    </div>
</template>
<script setup></script>
