<template>
  <div class="reports-page">
    <h1 class="title">Generador de reportes TK</h1>
    <Table :reports="reports" />
    <Button text="Crear Reporte" @click="toggleModal" />
    <Modal :isModalOpen="isModalOpenP" @close-modal="toggleModal" @generateReport="createReport"/>
  </div>
</template>

<script>
import Table from '@/components/Table/Table';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';

export default {
  name: "reportsPage",
  data(){
    return {
      isModalOpenP : false,
       reports: [],
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
          birth_date: report.birthDate,
          end_date: report.endDate,
          dateCreation: report.dateCreation,
        }
        
        // Ordered by date of creation
        const ordered = this.reports.sort((a,b)=> a.dateCreation - b.dateCreation)

        this.reports = ordered
        this.reports.push(newReport)
        localStorage.setItem('registers', JSON.stringify(this.reports))
        this.isModalOpenP = false
    }
  },
  created (){
    let database = JSON.parse(localStorage.getItem('registers'));
    if (database === null){
      this.reports = [];
    } else {
      this.reports = database;
    }
  }
};
</script>

<style lang="scss" scoped>
   @import "@/scss/abstracts/variables.scss";

  .reports-page{
    align-items: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
  }

  .title {
    margin-top: 3.438rem;
  }
</style>
