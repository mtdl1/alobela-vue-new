<template>
    <div class="container-fluid">
        <h2 class="text-center pt-5 pb-4">Produtos Recomendados</h2>
        <div class="d-flex">
            <!-- <Serum v-if="$route.path != '/products/serum-anti-idade-multibeneficios-viva-beauty-by-renner-souza-2'" /> -->
            <Detox360 v-if="$route.path == '/products/serum-anti-idade-multibeneficios-viva-beauty-by-renner-souza-2'" />
        </div>
    </div>
</template>

<script>
    import Detox360 from './components/detox-360.vue'
    // import Serum from './components/serum.vue'

    export default {
        name: 'Recomendados',
        components: { 
            // Serum,
            Detox360 
        },
    }
</script>

<style scoped>
    h2 {
        font-size: 20px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
    }
</style>