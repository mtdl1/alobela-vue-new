<template>
    <div class="container-fluid pt-3">
        <div class="text pb-4 text-center">
            <h1 class="text-center">Sérum Anti-idade Multibenefícios</h1>
            <h3 class="text-center pb-3"><strong>SUPER LANÇAMENTO:</strong> Fórmula exclusiva com a mais alta tecnologia e resultados já na primeira aplicação.</h3>
            <img src="@/assets/img/serum/Serum_VB.webp" alt="" class="img-fluid py-4">
            <h2 class="text-center">4 tipos de Ácido Hialurônico</h2>
            <p class="text-center pt-2">Enquanto a maioria do mercado possui apenas um tipo de ácido hialurônico, o Sérum Viva Beauty possui 4 tipos, atuando em todas as camadas da pele e garantindo muito mais resultado!</p>
        </div>
        <div class="text pb-3 px-5">
            <h2 class="text-center">Niacinamida (Vitamina B3)</h2>
            <p class="text-center pt-2">A nova estrela no mercado de skincare! Hidrata, retarda o envelhecimento, uniformiza o tom da pele, regula a produção de sebo, combate os radicais livres, previne linhas de expressão, além de possuir propriedades anti-inflamatórias.</p>
        </div>
        <div class="text pb-3 px-5">
            <h2 class="text-center">D-Pantenol (Vitamina B5)</h2>
            <p class="text-center pt-2">Auxilia na cicatrização, renovação da pele, previne e reduz marcas de acne, além de ação regeneradora!</p>
        </div>
        <div class="row">
            <a href="#KitProduto" class="btn btn-primary mx-auto text-center">Eu quero</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SkinComplesTextoInfo',
    }
</script>

<style scoped>

     h1 {
        font-size: 30px;
        font-family: Poppins, sans-serif;
        color: #000;
        padding-bottom: 16px;
     }

    h2 {
        font-size: 19px;
        font-family: Poppins, sans-serif;
        color: #000;
    }

    h3 {
        font-size: 19px;
        font-family: Poppins, sans-serif;
        color: #000;
        font-weight: normal;
    }

    p {
        font-size: 16px;
        font-family: Poppins, sans-serif;
        color: #000;
    }

    .btn {
        width: 180px;
        cursor: pointer;
        padding: 10px 20px;
        margin: 30px auto;
        text-align: center;
        color: #ffffff;
        background: #951837;
        border: none;
        font-size: 18px;
    }

    .btn:hover {
        opacity: .8;
    }

    @media(max-width: 768px) {
        
        h1 {
            font-size: 24px;
            font-family: Poppins, sans-serif;
            color: #000;
            padding-bottom: 16px;
     }

        .px-5 {
            padding-left: 0 !important;
            padding-right: 0 !important;
        }
    }
</style>