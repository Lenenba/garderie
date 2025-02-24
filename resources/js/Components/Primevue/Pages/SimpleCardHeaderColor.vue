
<template>
    <Card style=" overflow: hidden" >
        <template #title>Advanced Card</template>
        <template #subtitle>Card subtitle</template>
        <template #content>
            <slot />
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Button label="Cancel" severity="secondary" outlined class="w-full" />
                <Button label="Save" class="w-full" />
            </div>
        </template>
    </Card>
</template>

<script setup>

import Card from 'primevue/card';
import Button from 'primevue/button';
</script>
