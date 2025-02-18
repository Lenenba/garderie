
<template>
    <div class="card flex justify-center">
        <SelectButton v-model="model" :options="options" />
        <Message v-if="message" severity="error" size="small" variant="simple" class="mt-4">{{ message }}</Message>
    </div>
</template>

<script setup>
import SelectButton from 'primevue/selectbutton';
import Message from 'primevue/message';


const model = defineModel({
    type: String,
    required: true,
});
const props = defineProps({
    message: {
        type: String,
    },
    options : Array,
});
</script>
