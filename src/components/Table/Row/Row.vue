<template>
  <tr>
    <td scope="row" class="table__field table__text-body--small left">
            {{title}}
            <!-- {{report.title}} -->
    </td>
    <td scope="row" class="table__field table__text-body center">
            <!-- {{report.initDate}} -->
            {{date}}
    </td>
    <td class="table__field right flex">
            <span class="table__text-body--bold">Descargar</span>
            <img class="download-image" src="@/assets/icons/download.svg" alt="download">
    </td>
  </tr>
</template>

<script>
export default {
    name: "RowComponent",
    props: {
        title : {
            type: String,
            required: true,
        },
        date : {
            type: String,
            required: true,
        }
    }
}
</script>

<style lang="scss" scoped>

    @import "@/scss/abstracts/variables.scss";
    td, th {
        padding: 1rem 0;
    }

    .table__field {
    border: 0;
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
        align-items: end;
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

.download-image{
        width: 1.25rem;
        margin-left: 0.3rem;
    }
</style>