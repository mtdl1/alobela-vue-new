<template>
    <div class="container-fluid bg-light py-5 text-center">
        <div class="row px-5">
            <div class="col-4 col-md-4">
                <img src="@/assets/img/beneficios-serum/Selo_Dermato.webp" alt="" class="img-fluid">
            </div>
            <div class="col-4 col-md-4">
                <img src="@/assets/img/beneficios-serum/Design_sem_nome_71.webp" alt="" class="img-fluid">
            </div>
            <div class="col-4 col-md-4">
                <img src="@/assets/img/beneficios-serum/Selo_5x_2284c342-2568-4a5f-8cda-444bc0a273f3.webp" alt="" class="img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MaisQueColagenoSkinComplex',
    }
</script>

<style scoped>
    .bg-light {
        background: #e4c9bf !important;
    }

    img {
        width: 128px;
    }

    @media(max-width: 768px) {
        .col-4 {
            padding: 0 5px !important;
        }
    }
</style>