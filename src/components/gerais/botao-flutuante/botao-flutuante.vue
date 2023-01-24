<template>
    <a href="https://api.whatsapp.com/send?phone=551143956323&text=Ol%C3%A1%2C%20poderiam%20me%20ajudar%3F" class="btn-flutuante" target="_blank">
        <i class="fa fa-whatsapp" aria-hidden="true"></i>
    </a>
</template>

<script>
    export default {
        name: 'BotaoFlutuante',
    }
</script>

<style scoped>
    .btn-flutuante {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 9999;
        background-color: #4dc247;
        color: #fff;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        text-align: center;
        cursor: pointer;
        font-size: 35px;
        transition: all .3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        /* teste */
    }
</style>