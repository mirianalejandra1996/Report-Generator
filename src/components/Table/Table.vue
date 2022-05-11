<template>

    <div class="table__container">
    <!-- <table class="table"> -->
        <table class="table" border=1 frame=void rules=rows>
            <thead class="table__header">
                <tr>
                    <th class="table__text-header left">Título</th>
                    <th class="table__text-header center">Fecha de creación</th>
                    <th class="table__text-header right">Acción</th>
                    <!-- <th class="table__text-header right" scope="col">Acción</th> -->
                    <!-- <th class="left">Titulo</th>
                    <th class="center">Fecha de creación</th>
                    <th scope="col" class="right">Acción</th> -->
                </tr>
            </thead>
            <tbody class="table__body">
                <tr>
                    <td scope="row" class="table__text-body--small left">Reporte de usuario 1</td>
                    <td scope="row" class="table__text-body center">04/02/2020</td>
                    <td class="table__text-body--bold right">Descargar</td>
                </tr>
                <tr>
                    <td scope="row" class="table__text-body--small left">Reporte de usuario 1</td>
                    <td scope="row" class="table__text-body center">04/02/2020</td>
                    <td class="table__text-body--bold right">Descargar</td>
                </tr>
               
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  name: "TableComponent",
};
</script>

<style lang="scss" scoped>

    @import "@/scss/abstracts/variables.scss";

    .table__container {
        padding: 0rem 2rem 2rem;
        margin-top: 5rem;
        border-radius: 10px;
        background-color: #4562E6;
        width: 55rem;
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
  
    td, th {
        padding: 1rem 0;
    }

    tr { 
        border: 1px solid $gray;
    }

// ! Experimento
// border-right: 1px solid;
// line-height: 10px;
    td + td { 
        border-left:4px solid $gray; 
        border-right: 4px solid $gray;
    }
        // td + td { 
        //     border-left:4px solid $gray; 
        // }

  .right {
      text-align: end;
  }

  .center {
      text-align: center;
  }

  .left {
      text-align: start;
  }

    
.table__text-header {
    font-size: $fontSizeNormal;
    font-size: 1.2rem;
    color: $white;
    font-weight: 400;
}

.table__text-body{
    font-size: $fontSizeNormal;
    font-size: 1.2rem;
    color: $white;
    font-weight: 400;
}

.table__text-body--small{
    font-size: $fontSizeNormal;
    font-size: 1rem;
    color: $white;
    font-weight: 400;
}

.table__text-body--bold{
    font-size: $fontSizeNormal;
    font-size: 1.2rem;
    color: $white;
    font-weight: 700;
}

</style>
