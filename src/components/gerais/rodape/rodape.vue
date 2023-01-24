<template>
<div class="container-fluid bg-light mt-0 p-5">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <img src="@/assets/img/logo/logo-colorido.png" alt="">
                <h5 class="pt-2">Link Úteis</h5>
                <a href="#">
                    <p class="py-2">Temos e Condições</p>
                </a>
                <a href="#">
                    <p>Política de Privacidade</p>
                </a>
            </div>
            <div class="col-md-3">
                <h5>Atendimento</h5>
                <p class="pt-2"><strong>Horário de atendimento:</strong></p>
                <p>De segunda a sexta:</p>
                <p class="pb-3">09:00 às 18:48</p>

                <p>sac@alobela.com.br</p>
            </div>
            <div class="col-md-3">
                <h5>Segurança</h5>
                <div class="py-2"><img src="@/assets/img/certificados/Icone-Site-Protegido-Desktop.png" alt=""></div>
                <div><img  src="@/assets/img/certificados/Icone-Nao-Testado-Em-Animais-Desktop.png" alt=""></div>
            </div>
            <div class="col-md-3">
                <h5>Nossas Redes</h5>
                <div class="row justify-content-between pt-2">
                    <img src="@/assets/img/icones/Icone-Facebook.svg" alt="">
                    <img src="@/assets/img/icones/Icone-Instagram.svg" alt="">
                    <img src="@/assets/img/icones/Icone-Youtube.svg" alt="">
                    <img src="@/assets/img/icones/Icone-WhatsApp.svg" alt="">
                </div>
            </div>
        </div>

        <div class="text-center txt-direitos mt-5">
            <p>Copyright © 2022 Alobela. Todos os direitos reservados. Todo o conteúdo do site, todas as fotos, imagens, logotipos, marcas, layout, aqui veículados são de propriedade exclusiva da Alobela Produtos de Beleza LTDA.</p>

            <p>Kit Revolution - Processo ANVISA: 25351.660806/2017-97</p>

            <p>É vedada qualquer reprodução, total ou parcial, de qualquer elemento de identidade, sem expressa autorização.</p>

            <p>A violação de qualquer direito mencionado implicará na responsabilização cível e criminal nos termos da Lei.</p>

            <p>Av. Gen. Ataliba Leonel, 2671 - Parada Inglesa, São Paulo - SP. CNPJ: 05.200.440.0001-06</p>

            <p>Informamos que KIT REVOLUTION é um tratamento. Seu resultado pode variar de pessoa para pessoa. Os preços dos produtos estão sujeitos a alteração sem aviso prévio.</p>
        </div>
        <div class="text-center pt-1 logoWebArt">
            <a href="https://wapstore.com.br/?utm_source=vitabe&utm_medium=site&utm_content=footesite&utm_campaign=referencia_cliente"
                target="_blank">
                <img src="@/assets/img/logo-webart.svg" width="70" alt="">
            </a>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name: 'Rodape',
    }
</script>

<style scoped>
.bg-light {
    background-color: #F5F5F5 !important;
}

h5{
    font: normal normal bold 20px/30px Open Sans;
    letter-spacing: 0px;
    color: #1A1A1A;
}

p{
    font: normal normal normal 14px/18px Open Sans;
    letter-spacing: 0px;
    color: #555555;
}

.txt-direitos p{
    padding: .5rem 0;
}

</style>