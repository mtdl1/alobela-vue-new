<template>
    <div class="container my-5">
        <h2 class="text-center mb-5">O SKINCARE PREFERIDO DAS CELEBRIDADES</h2>
        <carousel :autoplay="true" :nav="false" :dots="false" :loop="true"  :responsive="{0:{items:1, dots:true}, 600:{items:4}}">
            <div class="influencer mx-auto" v-for="influencer in influencers" :key="influencer.id">
                <img :src="require(`@/assets/img/influencers/${influencer.imagem}`)" class="img-fluid" alt="First slide">
                <h3 class="pt-4 pb-2 text-center">{{ influencer.nome }}</h3>
            </div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: 'InfluencersViva',
        components: { 
            carousel 
        },

        data() {
            return {
                influencers: [
                    {
                        id: 1,
                        nome: 'Biah',
                        imagem: 'Alobela-Biah.png'
                    },
                    {
                        id: 2,
                        nome: 'Ivy',
                        imagem: 'Alobela-Ivy.png'
                    },
                    {
                        id: 3,
                        nome: 'Juju',
                        imagem: 'Alobela-Juju.png'
                    },
                    {
                        id: 4,
                        nome: 'Biah',
                        imagem: 'Alobela-Karina.png'
                    },
                    {
                        id: 5,
                        nome: 'Leydi',
                        imagem: 'Alobela-Leydi.png'
                    },
                    {
                        id: 6,
                        nome: 'Loris',
                        imagem: 'Alobela-Loris.png'
                    },
                    {
                        id: 7,
                        nome: 'Mayra',
                        imagem: 'Alobela-Mayra.png'
                    },
                    {
                        id: 8,
                        nome: 'Milla',
                        imagem: 'Alobela-Milla.png'
                    },
                    {
                        id: 9,
                        nome: 'Paula',
                        imagem: 'Alobela-Paula.png'
                    },
                    {
                        id: 10,
                        nome: 'Tamiris',
                        imagem: 'Alobela-Tamiris.png'
                    },
                    {
                        id: 11,
                        nome: 'Thays',
                        imagem: 'Alobela-Thays.png'
                    },
                    {
                        id: 12,
                        nome: 'Vivi',
                        imagem: 'Alobela-Vivi.png'
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .influencer {
        width: 230px;
    }

    h2{
        font: normal normal 800 36px/40px Lato;
        letter-spacing: 1.44px;
        color: #1A1A28;
    }

    h3 {
        font-size: 19px;
        font-weight: bold;
        font-family: Poppins, sans-serif;
    }

    p {
        font-size: 13px;
        font-family: Poppins, sans-serif;
    }

    .btn {
        width: 180px;
        cursor: pointer;
        padding: 10px 20px;
        margin: 30px auto;
        text-align: center;
        color: #ffffff;
        background: #12AC53;
        border: none;
        font-size: 18px;
    }

    .btn:hover {
        opacity: .8;
    }
</style>