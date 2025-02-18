
<template>
    <IftaLabel>
        <Password  :id="id" v-model="model" class="w-full mt-4" :feedback="false" fluid />
        <label :for="id">{{ label }}</label>
    </IftaLabel>
    <Message v-if="message" severity="error" size="small" variant="simple" class="mt-4">{{ message }}</Message>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Password from 'primevue/password';
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
