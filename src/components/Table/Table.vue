<template>

    <div class="table__container">
    <!-- <table class="table"> -->
        <table class="table" border=1 frame=void rules=rows>
            <thead class="table__header">
                <tr>
                    <th class="table__text-header left">Título</th>
                    <th class="table__text-header center">Fecha de creación</th>
                    <th class="table__text-header right">Acción</th>
                </tr>
            </thead>
            <tbody class="table__body">
                <tr>
                    <td scope="row" class="table__text-body--small left">
                        <div class="table__field left">
                            Reporte de usuario 1
                        </div>
                    </td>
                    <td scope="row" class="table__text-body center">
                        <div class="table__field center">
                            04/02/2020
                        </div>
                    </td>
                    <td class="table__text-body--bold right">
                        <div class="table__field right">
                            Descargar
                        </div>
                    </td>
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

    .table__field {
    display: flex;
    justify-content: space-between;
    border: 0;
    height: 66px;
    }

    .table__field::after {
        content: '';
    display: inline-block;
    background-color: $gray;
    width: 5px;
    height: 90%;
     
    }

// Removing last vertical line
tr td:last-of-type .table__field::after{
    content: none;
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
