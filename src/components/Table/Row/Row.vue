<template>

  <!-- <tr> -->
  <tr ref="exportable_row">
    <td scope="row" class="table__field table__text-body--small left">
            {{title}}
    </td>
    <td scope="row" class="table__field table__text-body center">
            {{date}}
    </td>
    <td class="table__field right flex" @click="exportExcel">
            <span class="table__text-body--bold">Descargar</span>
            <img class="download-image" src="@/assets/icons/download.svg" alt="download">
    </td>
  </tr>
</template>

<script>
import {pad} from "@/helpers/formatter";
import * as XLSX from 'xlsx';

export default {
    name: "RowComponent",
    data(){
        return {
            title: null,
            date: null,
            dataToExport: [
                {
                name: 'Jorge',
                occupation: 'Best Admin'
                },
                {
                name: 'Héctor',
                occupation: 'Worst Admin'
                },
                {
                name: 'gmq',
                occupation: ':shrug:'
                }
            ]
        }
    },
     methods: {
    exportExcel: function () {
   
        console.log('quiero esto', this.reportData);

      let data = XLSX.utils.json_to_sheet(
        this.dataToExport,
        {
        header: ["transaction_date", "business_name", "credit", "rate"]
        }
        )
        data["A1"].v = "Fecha"
        data["B1"].v = "Empresa solicitante"
        data["C1"].v = "Depósitos"
        data["D1"].v = "Tasa"
      const workbook = XLSX.utils.book_new()
      const filename = 'devschile-admins'
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
        this.title = this.reportData.title;

        const day = new Date(this.reportData.birth_date).getDate();
        const month = new Date(this.reportData.birth_date).getMonth() + 1;
        const year = new Date(this.reportData.birth_date).getFullYear();

        this.date = `${pad(day,2)}/${pad(month,2)}/${pad(year,4)}`;
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