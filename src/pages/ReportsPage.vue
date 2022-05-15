<template>
  <div class="reports-page">
    <h1 class="title">Generador de reportes TK</h1>
    <Table :reports="reports" />
    <Button text="Crear Reporte" @click="toggleModal" />
    <!-- <Modal :isModalOpen="isModalOpenP" @close-modal="toggleModal" /> -->
    <Modal :isModalOpen="isModalOpenP" @close-modal="toggleModal" @generateReport="createReport"/>
  </div>
</template>

<script>
import Table from '@/components/Table/Table';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

export default {
  name: "reportsPage",
  // emits: ["updatedcount"],
  emits: ["close-modal"],
  data(){
    return {
      isModalOpenP : false,
       reports: [
          // {id: "00001" , title: "Reporte de usuario 1", birth_date : "04/02/2020" , end_date : "10/02/2020"},
          // {id: "00002" , title: "Reporte de usuario 2", birth_date : "19/04/2020" , end_date : "11/12/2020"},
          // {id: "00003" , title: "Reporte de usuario 3", birth_date : "22/06/2021" , end_date : "12/04/2021"},
        //   {id: "00004" , title: "Reporte de usuario 4", birth_date : "01/03/2021" , end_date : "13/09/2022"},
        //   {id: "00005" , title: "Reporte de usuario 5", birth_date : "27/08/2022" , end_date : "14/11/2023"},
      ],
    }
  },
  components: {
    Table,
    Button,
    Modal,
},
  methods : {
    toggleModal() {
      this.isModalOpenP = !this.isModalOpenP
    },
    createReport(report){

        const newReport = {
          id: this.reports.length + 1,
          title: report.reportDescription,
          birth_date: report.initDate,
          end_date: report.endDate
        }
        
        console.log('miraaa, ', report)
        console.log('el nuevo', newReport)
        this.reports.push(newReport)
    }
  },
};
</script>

<style lang="scss" scoped>
    @import "@/scss/abstracts/variables.scss";

// -----------------
  .reports-page{
        width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
  }

  .title {
    margin-top: 3.438rem;
  }
</style>
