<template>
    <div class="bg-surface-0 dark:bg-surface-950 px-6 py-8 md:px-12 lg:px-20">
        <div class="flex items-start flex-col lg:flex-row lg:justify-between">
            <div class="flex items-start flex-col md:flex-row">
                <img src="https://fqjltiegiezfetthbags.supabase.co/storage/v1/render/image/public/block.images/blocks/avatars/circle/avatar-f-1@2x.png" class="mr-8 mb-4 lg:mb-0 w-[90px] h-[90px]" />
                <div>
                    <span class="text-surface-900 dark:text-surface-0 font-medium text-3xl">Kathryn Murphy</span>
                    <i class="pi pi-star text-2xl ml-6 text-yellow-500" />
                    <div class="flex items-center flex-wrap text-sm">
                        <div class="mr-8 mt-4">
                            <span class="font-medium text-surface-500 dark:text-surface-300">FOLLOWERS</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-2">333</div>
                        </div>
                        <div class="mr-8 mt-4">
                            <span class="font-medium text-surface-500 dark:text-surface-300">PROJECTS</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-2">26</div>
                        </div>
                        <div class="mr-8 mt-4">
                            <span class="font-medium text-surface-500 dark:text-surface-300">COLLECTIONS</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-2">17</div>
                        </div>
                        <div class="mt-4">
                            <span class="font-medium text-surface-500 dark:text-surface-300">SHOTS</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-2">130</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 lg:mt-0">
                <Button icon="pi pi-bookmark" class="mr-2" rounded />
                <Button icon="pi pi-heart" class="mr-2" rounded severity="success" />
                <Button icon="pi pi-list" rounded severity="help" />
            </div>
        </div>
    </div>
</template>
<script setup>
import Button from 'primevue/button';
</script>
