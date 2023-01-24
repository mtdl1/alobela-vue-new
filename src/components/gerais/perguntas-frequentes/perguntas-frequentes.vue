<template>
    <div class="container">
        <div class="row my-3">
            <a href="#KitProduto" class="btn btn-primary btn-act mx-auto text-center">Eu quero</a>
        </div>
        <div class="row justify-content-center">
            <div class="accordion w-75" id="faq">
                <div class="card">
                    <div class="card-header" id="faqhead1">
                        <a href="#" class="btn btn-header-link" data-toggle="collapse" data-target="#faq1" aria-expanded="true" aria-controls="faq1">Tem alguma contraindicação ou efeito colateral?</a>
                    </div>

                    <div id="faq1" class="collapse show" aria-labelledby="faqhead1" data-parent="#faq">
                        <div class="card-body">
                            <p>O Viva Beauty é totalmente natural, sem açúcar e ainda não engorda! NÃO é recomendado para gestantes, lactantes e crianças!</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="faqhead2">
                        <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq2" aria-expanded="true" aria-controls="faq2">Em quanto tempo os resultados são visíveis?</a>
                    </div>

                    <div id="faq2" class="collapse" aria-labelledby="faqhead2" data-parent="#faq">
                        <div class="card-body">
                            <p>Os resultados são visíveis a partir de 8 semanas de uso do Viva Beauty, mas começam a ser notados a partir de 4 semanas. Disponibilizamos estudos do Verisol que comprovam os resultados (no rodapé do site)!</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="faqhead3">
                        <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq3" aria-expanded="true" aria-controls="faq3">Os ingredientes são naturais?</a>
                    </div>

                    <div id="faq3" class="collapse" aria-labelledby="faqhead3" data-parent="#faq">
                        <div class="card-body">
                            <p>Sim, como diferencial priorizamos sempre a qualidade e principalmente pensamos na sua saúde em longo prazo. Por isso não utilizamos corantes artificiais, malto e nem conservantes!</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="faqhead4">
                        <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq4" aria-expanded="true" aria-controls="faq4">Qual prazo de entrega?</a>
                    </div>

                    <div id="faq4" class="collapse" aria-labelledby="faqhead4" data-parent="#faq">
                        <div class="card-body">
                            <p>O Viva Beauty é despachado em média de 24h úteis após aprovação do pagamento.</p>
                            <p><strong>Segue prazo médio para entrega:</strong></p>
                            <ul>
                                <li>Região Sudeste - de 1 a 8 dias úteis</li>
                                <li>Região Sul - de 1 a 9 dias úteis</li>
                                <li>Região Centro-Oeste - de 1 a 10 dias úteis</li>
                                <li>Região Nordeste - de 2 a 14 dias úteis</li>
                                <li>Região Norte - de 3 a 15 dias úteis</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-header" id="faqhead5">
                        <a href="#" class="btn btn-header-link collapsed" data-toggle="collapse" data-target="#faq5" aria-expanded="true" aria-controls="faq5">Como devo consumir?</a>
                    </div>

                    <div id="faq5" class="collapse" aria-labelledby="faqhead5" data-parent="#faq">
                        <div class="card-body">
                            <p>Em um copo ou coqueteleira misturar 10g (1 scoop) em 200 ml de água com auxílio de uma colher.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PerguntasFrequentes',
    }
</script>

<style scoped>
    .btn-act {
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

    .btn-act:hover {
        opacity: .8;
    }

    .accordion#faq .card {
        margin-bottom: 10px;
        border: 0;
    }

    .accordion#faq .card .card-header {
        border: 0;
        border-radius: 2px;
        padding: 0;
    }

    .accordion#faq .card .card-header .btn-header-link {
        width: 100%;
        color: #fff;
        display: block;
        text-align: left;
        color: #222;
        padding: 15px;
        box-shadow: none;
        font-size: 18px;
        font-family: Poppins, sans-serif;
        background: #fff;
        border-top: 1px solid #aaa;
    }

    .card-body p{
        font-size: 14px;
        font-family: Poppins, sans-serif;        
    }

    .accordion#faq .card .card-header .btn-header-link:after {
        content: "\f106";
        font: normal normal normal 17px/1 FontAwesome;
        font-weight: 900;
        float: right;
    }

    .accordion#faq .card .card-header .btn-header-link.collapsed {
        color: rgb(0, 0, 0);
        background: #fff !important;
    }

    .accordion#faq .card .card-header .btn-header-link.collapsed:after {
        content: "\f107";
    }

    .accordion#faq .card .collapsing {
        line-height: 30px;
    }

    .accordion#faq .card .collapse {
        border: 0;
    }

    .accordion#faq .card .collapse.show {
        line-height: 30px;
        color: #222;
    }

    @media(max-width: 768px) {
        .w-75 {
            width: 100% !important;
        }
    }
</style>