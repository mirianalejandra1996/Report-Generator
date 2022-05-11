<template>
  <div class="reports-page">
    <h1>Generador de reportes TK</h1>
    <Table/>
    <Button/>
  </div>
</template>

<script>
import Table from '@/components/Table/Table';
import Button from '@/components/Button/Button';

export default {
  name: "reportsPage",
  components: {
    Table,
    Button,
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


</style>
