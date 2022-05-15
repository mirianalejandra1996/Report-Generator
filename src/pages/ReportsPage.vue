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
  emits: ["close-modal"],
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
