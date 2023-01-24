<template>
    <div class="container-fluid bg-light">
        <div class="title text-center py-4">
            <h2>Quem usa Viva Beauty</h2>
        </div>
        <carousel :autoplay="true" :nav="false" :dots="false" :loop="true" :responsive="{0:{items:1, dots:true}, 600:{items:4}}">
            <div class="influencer text-center mx-auto" v-for="influencer in influencers" :key="influencer.id">
                <img :src="require(`@/assets/img/influencers/${influencer.imagem}`)" class="img-fluid" alt="First slide">
                <h3 class="pt-4 pb-2">{{ influencer.nome }}</h3>
                <p> {{ influencer.social }} </p>
            </div>
        </carousel>
        <div class="container py-5">
            <div class="title text-center pb-4">
                <h2 class="pb-2">Newsletter</h2>
                <p>Receba informações e descontos exclusivos:</p>
            </div>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <form class="formNewsViva" action="https://mbiz.mailclick.me/subscribe.php" method="post" accept-charset="UTF-8" target="blank" autocomplete="off" align="center;">
                            <div class="d-flex justify-content-center">
                                <input type="email" id="newsletterEmail" class="mr-2" placeholder="Digite seu e-mail" name="FormValue_Fields[EmailAddress]" control-id="ControlID-4">
                                <input type="submit" class="btn btn-primary" name="FormButton_Subscribe" value="SE INSCREVER" id="FormButton_Subscribe" control-id="ControlID-5">
                            </div>
                            <input type="hidden" name="FormValue_ListID" value="3552" control-id="ControlID-6">
                            <input type="hidden" name="FormValue_Command" value="Subscriber.Add" id="FormValue_Command">
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
                        nome: 'Juju Norremose',
                        imagem: 'juju-norremose.webp',
                        social: '@jujunorremose'
                    },
                    {
                        id: 2,
                        nome: 'Bella Falconi',
                        imagem: 'bella-falconi.webp',
                        social: '@bellafalconi'
                    },
                    {
                        id: 3,
                        nome: 'Carol Borba',
                        imagem: 'carol-borba.webp',
                        social: '@carolborba1'
                    },
                    {
                        id: 4,
                        nome: 'Izabella Lima',
                        imagem: 'izabella-lima.webp',
                        social: '@izabellabebel'
                    },
                ],
            }
        },
    }
</script>

<style scoped>
    .bg-light {
        background-color: #fff !important;
    }

    .influencer {
        width: 400px;
    }

    h2 {
        font-size: 22px;
        font-family: Poppins, sans-serif;
        font-weight: normal;
        color: #000;
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

    .btn-primary {
        background-color: #951837 !important;
        border: none !important;
        color: #fff;
    }

    .form-group input, .form-group button {
        height: 50px;
    }

    @media(max-width: 768px) {
        .container {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }

        .row.w-50 {
            width: 100% !important;
        }

        .col {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }

        .row {
            justify-content: space-around !important;
        }

        .col-6, .col-4 {
            padding: 0 !important;
        }

        .btn-primary {
            font-size: 15px !important;
            margin-left: 5px;
        }

        .influencer {
            width: 85% !important;
            margin: 0 auto;
        }

        .title p {
            font-size: 15px !important;
        }
    }
</style>