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
                <Row v-for="report in reports" :key="report.id" :date="report.birth_date" :title="report.title"/>
            </tbody>
        </table>
    </div>
</template>

<script>
import Row from './Row/Row';

export default {
  name: "TableComponent",
  data() {
    return {
      reports: [
          {id: "00001" , title: "Reporte de usuario 1", birth_date : "04/02/2020" , end_date : "10/02/2020"},
          {id: "00002" , title: "Reporte de usuario 2", birth_date : "19/04/2020" , end_date : "11/12/2020"},
          {id: "00003" , title: "Reporte de usuario 3", birth_date : "22/06/2021" , end_date : "12/04/2021"},
        //   {id: "00004" , title: "Reporte de usuario 4", birth_date : "01/03/2021" , end_date : "13/09/2022"},
        //   {id: "00005" , title: "Reporte de usuario 5", birth_date : "27/08/2022" , end_date : "14/11/2023"},
      ],
    }
  },
  components: {
    Row,

  }
};
</script>

<style lang="scss" scoped>

    @import "@/scss/abstracts/variables.scss";
    
    th {
    // td, th {
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
