<template>
    <div class="container-fluid bg-pink pt-5 px-0">
        <h2 class="text-center pb-5">Modo de preparo</h2>
        <div class="desk">
            <div class="row justify-content-center px-5 pb-4">
                <div class="col-md-4 text-center">
                    <img src="@/assets/img/preparo/scoop.webp" alt="" class="img-fluid pb-4">
                    <p>Consumir o Viva Beauty é prático e delicioso! </p>
                </div>
                <div class="col-md-4 text-center">
                    <img src="@/assets/img/preparo/scoop.webp" alt="" class="img-fluid pb-4">
                    <p>Em um copo ou coqueteleira misturar 10g (1 scoop) em 200 ml de água.</p>
                </div>
                <div class="col-md-4 text-center">
                    <img src="@/assets/img/preparo/colher.webp" alt="" class="img-fluid pb-4">
                    <p>Misture com o auxílio de uma colher e pronto, é só tomar sua dose diária de Viva Beauty!</p>
                </div>
            </div>
        </div>
        <carousel class="mob mb-4" :autoplay="true" :nav="false" :dots="false" :loop="true" :responsive="{0:{items:1, dots:true}, 600:{items:3}}">
            <div class="text-center">
                <img src="@/assets/img/preparo/scoop.webp" alt="" class="img-fluid pb-4">
                <p class="px-4">Consumir o Viva Beauty é prático e delicioso! </p>
            </div>
            <div class="text-center">
                <img src="@/assets/img/preparo/scoop.webp" alt="" class="img-fluid pb-4">
                <p class="px-4">Em um copo ou coqueteleira misturar 10g (1 scoop) em 200 ml de água.</p>
            </div>
            <div class="text-center">
                <img src="@/assets/img/preparo/colher.webp" alt="" class="img-fluid pb-4">
                <p class="px-4">Misture com o auxílio de uma colher e pronto, é só tomar sua dose diária de Viva Beauty!</p>
            </div>
        </carousel>
        <iframe id="ytplayer" frameborder="0" allowfullscreen="1" title="YouTube video player" width="100%" height="650" src="https://www.youtube.com/embed/BH-p1pwQ-uM?autoplay=1?mute=1"></iframe>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'
    
    export default {
        name: 'ModoPreparo',
        components: { 
            carousel 
        },
    }
</script>

<style scoped>
    .bg-pink {
        background-color: #e5c9bd !important;
    }

    h2 {
        font-size: 20px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
    }

    p {
        font-size: 18px;
        font-family: Poppins, sans-serif;
    }

    @media(max-width: 768px) {
        img {
            width: auto !important;
            margin: 0 auto !important;
        }

        .mob p {
            font-size: 15px !important;
        }

        iframe {
            height: 430px !important;
        }
    }
</style>