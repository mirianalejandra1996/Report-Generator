<template>
  <div class="reports-page">
    <h1 class="title">Generador de reportes TK</h1>
    <Calendar/>
    <!-- <Table/> -->
    <Button text="Crear Reporte" @click="toggleModal" />
    <Modal :isModalOpen="isModalOpenP" @close-modal="toggleModal"/>
  </div>
</template>

<script>
// import Table from '@/components/Table/Table';
import Button from '@/components/Button/Button';
import Modal from '@/components/Modal/Modal';
import Calendar from '@/components/Calendar/Calendar';

export default {
  name: "reportsPage",
  data(){
    return {
      isModalOpenP : false,
    }
  },
  components: {
    // Table,
    Button,
    Modal,
    Calendar,
},
  methods : {
    toggleModal() {
      console.log('open!',this.isModalOpenP)
      this.isModalOpenP = !this.isModalOpenP
    },
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
