<template>
  <div class="reports-page">
    <h1>Generador de reportes TK</h1>
    <Table/>
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
    height: calc(100% - 4.62rem);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    margin-top: 5rem;
  }

</style>
