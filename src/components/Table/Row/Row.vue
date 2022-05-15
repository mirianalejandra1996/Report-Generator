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
   
    // ! Add all fields a vertical line except last vertical line of column
    // | A || B || C |
    tr .table__field:not(:last-child)::after {
        background-color: $gray;
        content: '';
        height: 45%;
        position: absolute;
        right: 0;
        top: calc(50% - 0.7rem);
        width: 4px;
    }
    
    // Create horizontal lines between rows
    tr + tr { 
        border-bottom: 1px solid $gray;
        border-top: 1px solid $gray;
    }

    // Remove last line of row
    .table__body tr:last-of-type {
        border-bottom: none;
    }

    // Remove first line of row
    .table__body tr:first-of-type {
        border-top: none;
    }

    // For download field (contains a text + image)
    .flex {
        align-items: end;
        cursor: pointer;
        display: flex;
        justify-content: flex-end;
        text-align: end;
        transition: .1s ease-in-out;
    }

    .flex:hover {
        background-color: $blueMediumLighter;
        transition: .2s ease-in-out;
    }


// Alignment of text fields
  .right {
      text-align: end;
  }

  .center {
      text-align: center;
  }

  .left {
      text-align: start;
  }


.table__text-body{
    color: $white;
    font-size: $fontSizeNormal;
    font-weight: 400;
}

.table__text-body--small{
    color: $white;
    font-size: $fontSizeSmaller;
    font-weight: 400;
}

.table__text-body--bold{
    color: $white;
    font-size: $fontSizeNormal;
    font-weight: 700;
}

.download-image{
    margin-left: 0.3rem;
    width: 1.25rem;
}
</style>