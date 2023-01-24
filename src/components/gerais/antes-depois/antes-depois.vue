<template>
    <div>
        <div class="container-fluid bg-fundo py-5 mt-4 desk">
            <div class="container">
                <div class="row px-5">
                    <div class="col-md-4 text-center">
                        <img src="@/assets/img/antes-depois/antes-depois-1.webp" alt="Mulher mostrando o rosto de perfil antes e após o uso do tratamento anti-idade Skin Complex Plus" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso!" class="img-fluid">
                    </div>
                    <div class="col-md-4 text-center">
                        <img src="@/assets/img/antes-depois/antes-depois-2.webp" alt="Mulher mostrando o rosto de perfil antes e após o uso do tratamento anti-idade Skin Complex Plus" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso!" class="img-fluid">
                    </div>
                    <div class="col-md-4 text-center">
                        <img src="@/assets/img/antes-depois/antes-depois-3.webp" alt="Close do rosto de uma mulher antes e após o uso do tratamento anti-idade Skin Complex Plus;" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso!" class="img-fluid">
                    </div>
                </div>
            </div>
        </div>
        <carousel class="mob" :autoplay="true" :nav="false" :dots="false" :loop="true" :responsive="{0:{items:1, dots:true}, 600:{items:3}}">
            <img src="@/assets/img/antes-depois/antes-depois-1.webp" alt="Mulher mostrando o rosto de perfil antes e após o uso do tratamento anti-idade Skin Complex Plus" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso!" class="img-fluid">
            <img src="@/assets/img/antes-depois/antes-depois-2.webp" alt="Mulher mostrando o rosto de perfil antes e após o uso do tratamento anti-idade Skin Complex Plus" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso!" class="img-fluid">
            <img src="@/assets/img/antes-depois/antes-depois-3.webp" alt=" Close do rosto de uma mulher antes e após o uso do tratamento anti-idade Skin Complex Plus" title="Tratamento anti-idade Skin Complex Plus, muito mais que um simples colágeno! Resultados visíveis já no primeiro mês de uso!" class="img-fluid">
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: 'AntesDepois',

        components: { 
            carousel 
        },
    }
</script>

<style scoped>
    .bg-fundo {
        background-color: #FBF3F1 !important;
    }
</style>