<template>
  <tr>
    <td scope="row" class="table__field table__text-body--small left">
            {{formattedData.title}}
    </td>
    <td scope="row" class="table__field table__text-body center">
        {{formattedData.dateCreation}}
    </td>
    <td class="table__field right flex" @click="exportExcel">
            <span class="table__text-body--bold">Descargar</span>
            <img class="download-image" src="@/assets/icons/download.svg" alt="download">
    </td>
  </tr>
</template>

<script>
import {dateFormatted, pad} from "@/helpers/formatter";
import * as XLSX from 'xlsx';

export default {
    name: "RowComponent",
    data(){
        return {
            formattedData: null,
        }
    },
     methods: {
    exportExcel: function () {
   
        const report = [{
            "Reporte Nº" : this.formattedData.id,
            "Fecha de creación" : this.formattedData.dateCreation,
            "Descripción del reporte": this.formattedData.title,
            "Fecha de Nacimiento": this.formattedData.dateBirth,
            "Fecha de Fallecimiento": this.formattedData.dateEnd,
        }]

      let data = XLSX.utils.json_to_sheet(report)
      const workbook = XLSX.utils.book_new()
      const filename = `REPORT${this.formattedData.id}`
      XLSX.utils.book_append_sheet(workbook, data, filename)
      XLSX.writeFile(workbook, `${filename}.xlsx`)
    }
  },
    props: {
        reportData: {
            type: Object,
            required: true,
        }
    },
    created (){
        const formattedData = {
            id: pad(this.reportData.id,4),
            title: this.reportData.title,
            dateBirth:dateFormatted(this.reportData.birth_date),
            dateEnd: dateFormatted(this.reportData.end_date),
            dateCreation: dateFormatted(this.reportData.dateCreation)
        }

        this.formattedData = formattedData;
    },
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
    text-transform: capitalize;
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
        border-bottom: none;
    }

    .table__body tr:first-of-type {
        border-top: none;
    }


    .flex {
        text-align: end;
        display: flex;
        justify-content: flex-end;
        align-items: end;
        cursor: pointer;
        transition: .1s ease-in-out;
    }

    .flex:hover {
        background-color: #3a56d1;
        transition: .2s ease-in-out;
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