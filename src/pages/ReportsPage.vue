<template>
  <div class="reports-page">
    <h1>Generador de reportes TK</h1>
    <div class="table">
      <div>Titulo         Fecha Creación       Acción</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "reportsPage",
//   components: {
//   },
};
</script>

<style lang="scss" scoped>
    // @import "@/scss/variables.scss";

  .reports-page{
    background: gray;
    height: calc(100% - 4.62rem);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

</style>
