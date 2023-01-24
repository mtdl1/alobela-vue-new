<template>
    <section class="container-fluid px-0">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="d-flex justify-content-center">
                        <a href="#KitProduto">
                            <img src="@/assets/img/banners/skin-complex/Viva-Beauty-Home-Desktop-Banner-Skin-Complex.jpg" alt="Banner Viva Beauty" class="desk img-fluid" >
                            <img src="@/assets/img/banners/skin-complex/Viva-Beauty-Home-Mobile-Banner-Skin-Complex.jpg" alt="Banner Viva Beauty" class="img-fluid mob">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'BannerSkinComplex',
        data() {
            return {
                //
            }
        },
    }
</script>

<style scoped>
    @keyframes slide-in {
        from { transform: translateY(40px);}
        to { transform: translateX(0); }
    }
    
    .fade-enter-active {  
        transition: opacity 2s;
    }

    a {
        cursor: pointer;
    }
</style>