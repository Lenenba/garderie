
<template>
    <IftaLabel>
        <InputText :id="id" v-model="model" class="w-full"/>
        <label :for="id">{{ label }}</label>
    </IftaLabel>
    <Message v-if="message" severity="error" size="small" variant="simple">{{ message }}</Message>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import IftaLabel from 'primevue/iftalabel';

defineProps({
    message: {
        type: String,
    },
    id: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
});

const model = defineModel({
    type: String,
    required: true,
});

const input = ref(null);
</script>
