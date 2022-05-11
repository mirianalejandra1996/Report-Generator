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
                <tr>
                    <td scope="row" class="table__field table__text-body--small left">
                            Reporte de usuario 1
                    </td>
                    <td scope="row" class="table__field table__text-body center">
                            04/02/2020
                    </td>
                    <td class="table__field right flex">
                            <span class="table__text-body--bold">Descargar</span>
                            <img class="download-image" src="../../assets/icons/download.svg" alt="download">
                    </td>
                </tr>
                <tr>
                    <td scope="row" class="table__field table__text-body--small left">
                            Reporte de usuario 1
                    </td>
                    <td scope="row" class="table__field table__text-body center">
                            04/02/2020
                    </td>
                    <td class="table__field right flex">
                            <span class="table__text-body--bold">Descargar</span>
                            <img class="download-image" src="../../assets/icons/download.svg" alt="download">
                    </td>
                </tr>
                <tr>
                    <td scope="row" class="table__field table__text-body--small left">
                            Reporte de usuario 1
                    </td>
                    <td scope="row" class="table__field table__text-body center">
                            04/02/2020
                    </td>
                    <td class="table__field right flex">
                            <span class="table__text-body--bold">Descargar</span>
                            <img class="download-image" src="../../assets/icons/download.svg" alt="download">
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
    
    .download-image{
        width: 1.25rem;
        margin-left: 0.3rem;
    }

    .table__container {
       padding: 0rem 2rem 2rem;
        margin-top: 5rem;
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
  
    td, th {
        padding: 1rem 0;
    }

    .table__field {
    border: 0;
    // height: 66px;
    position: relative;
    }
   
    // ! Removing last vertical line
    tr .table__field:not(:last-child)::after {
       content: '';
    background-color: #C4C4C4;
    width: 4px;
    height: 45%;
    position: absolute;
    right: 0;
    top: calc(50% - 0.7rem);
    }
    
    tr + tr { 
        border-top: 1px solid $gray;
        border-bottom: 1px solid $gray;
    }

    .table__body tr:last-of-type {
        // background: blue
        border-bottom: none;
    }

    .table__body tr:first-of-type {
        // background: blue
        border-top: none;
    }


    .flex {
            text-align: end;
    display: flex;
    justify-content: flex-end;
    align-items: center;
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
    color: $white;
    font-weight: 400;
}

.table__text-body{
    font-size: $fontSizeNormal;
    color: $white;
    font-weight: 400;
}

.table__text-body--small{
    font-size: $fontSizeSmall;
    color: $white;
    font-weight: 400;
}

.table__text-body--bold{
    font-size: $fontSizeNormal;
    color: $white;
    font-weight: 700;
}

</style>
