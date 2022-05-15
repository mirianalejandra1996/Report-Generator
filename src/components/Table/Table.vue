<template>
    <div class="table__container">
            <table class="table">
            <thead class="table__header">
                <tr>
                    <th class="table__text-header left">Título</th>
                    <th class="table__text-header center">Fecha de creación</th>
                    <th class="table__text-header right">Acción</th>
                </tr>
            </thead>
            <tbody class="table__body">
                <Row v-for="report in reports" :key="report.id" :reportData="report"/>
            </tbody>
        </table>
    </div>
</template>

<script>
import Row from './Row/Row';

export default {
  name: "TableComponent",
  props: {
    reports : {
      type: Object,
      required: true,
    },
  },
  components: {
    Row,

  },
};
</script>

<style lang="scss" scoped>

    @import "@/scss/abstracts/variables.scss";
    
    th {
        padding: 1rem 0;
    }

    .table__container {
       padding: 0rem 2rem 2rem;
        margin-top: 3.75rem;
        border-radius: 10px;
        background-color: #4562E6;
        width: 43.125rem;
    }

  .table {
        background-color: #4562E6;
        border-collapse: collapse;
        padding: 1rem;
        color: #FFF;
        table-layout: fixed;
        width: 100%;

        &__header {
            border-bottom: 4px solid $gray;
        }

  }
  
  .table__text-header {
    font-size: $fontSizeNormal;
    color: $white;
    font-weight: 400;
}

 .right {
      text-align: end;
  }

  .center {
      text-align: center;
  }

  .left {
      text-align: start;
  }

</style>
