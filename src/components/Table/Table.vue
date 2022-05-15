<template>
    <div class="table__container">
      <table class="table">
        <thead class="table__header">
          <tr>
            <th class="table__header-text left">Título</th>
                    <th class="table__header-text center">Fecha de creación</th>
                    <th class="table__header-text right">Acción</th>
                </tr>
            </thead>
            <tbody class="table__body">
              <Row v-for="report in reports" :key="report.id" :reportData="report"/>
            </tbody>
        </table>
        <p v-if="reports.length === 0" class="table__msgEmpty">No hay ningún registro</p>
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
        background-color: $blueMedium;
        border-radius: 10px;
        margin-top: 3.75rem;
        min-height: 9rem;
        padding: 0rem 2rem 2rem;
        width: 43.125rem;
    }

  .table {
        background-color: $blueMedium;
        border-collapse: collapse;
        color: $white;
        padding: 1rem;
        table-layout: fixed;
        width: 100%;

        &__header {
            border-bottom: 4px solid $gray;

            &-text {
              color: $white;
              font-size: $fontSizeNormal;
              font-weight: 400;
            }
        }

        &__msgEmpty{
            margin-top: 1rem;
        }
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
