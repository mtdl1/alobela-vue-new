<template>
  <div class="bg-alt">
    <div class="container d-flex py-5">
      <div class="col-md-3">
        <p>EFICÁCIA <br> COMPROVADA</p>
      </div>
      <div class="col-md-3">
        <p>SEM <br> PARABENOS</p>
      </div>
      <div class="col-md-3">
        <p>100% <br> NATURAL</p>
      </div>
      <div class="col-md-3">
        <p>NÃO TESTADO <br> EM ANIMAIS</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FaixaBeneficios',
}
</script>

<style scoped>
.bg-alt {
  background-color: #1A1A28;
}

p{
  font: normal normal 800 18px/18px 'Lato';
  letter-spacing: 0px;
  color: #FFFFFF;
  text-align: center;
}

.col-md-3 {
  border-right-width: 2px;
  border-right-style: solid;
  border-image: linear-gradient( to bottom, #FFFFFF00 0%, #FFFFFF 49%, #FFFFFF00 100%) 1 100%;
  padding: 20px 0;
}

.col-md-3:last-child {
  border-right-width: 0px;
}

@media (max-width: 768px) {

  .container {
    flex-wrap: wrap;
  }
  .col-md-3 {
    border-right-width: 0px;
    border-image: unset;
    border-bottom: 2px solid white;
  }

  .col-md-3:last-child {
    border-bottom: 0px;
  }
}

</style>