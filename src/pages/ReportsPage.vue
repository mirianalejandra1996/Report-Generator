<template>
  <div class="reports-page">
    <h1>Generador de reportes TK</h1>
    <Table/>
    <!-- <button class="button">Crear Reporte</button> -->
    <button class="button"><span class="button__text">Crear Reporte</span></button>
  </div>
</template>

<script>
import Table from '@/components/Table/Table';

export default {
  name: "reportsPage",
  components: {
    Table,
  },
};
</script>

<style lang="scss" scoped>
    @import "@/scss/abstracts/variables.scss";

  .reports-page{
        width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  h1 {
    margin-top: 3.438rem;
  }

  .button{
    background: $yellow;
    margin-top: 1.875rem;
    border: none;
    border-radius: 3.125rem;
    height: 2.688rem;
    width: 11.688rem;
    cursor: pointer;
    transition: .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
  }

  .button:hover{
    background: #e6ac0c;
    transition: .2s ease-in-out;
  }

  .button__text{
    font-size: 1rem;
    font-weight: 400;
    color: $black;
    font-family: 'ArgentumSans', sans-serif;
    margin-bottom: 0.3rem;
  }

  // -webkit-appearance: none; or -webkit-appearance: button;

</style>
