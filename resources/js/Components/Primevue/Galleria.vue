
<template>
    <SimpleCard title="Galleria" description="A responsive photo gallery component with thumbnails.">
        <Galleria :value="images" :responsiveOptions="responsiveOptions" :numVisible="5" :circular="true" containerStyle="max-width: 640px"
            :showItemNavigators="true">
            <template #item="slotProps">
                <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block;" />
            </template>
            <template #thumbnail="slotProps">
                <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block;" />
            </template>
        </Galleria>
    </SimpleCard>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { PhotoService } from '@/Service/PhotoService';
import Galleria from 'primevue/galleria';
import SimpleCard from '@/Components/Primevue/Pages/SimpleCard.vue';


onMounted(() => {
    PhotoService.getImages().then((data) => (images.value = data));
});

const images = ref();
const responsiveOptions = ref([
    {
        breakpoint: '1300px',
        numVisible: 4
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
]);
</script>
