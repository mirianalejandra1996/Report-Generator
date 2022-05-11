<template>
  <div class="reports-page">
    <h1 class="title">Generador de reportes TK</h1>
    <Table/>
    <Button  @click="toggleModal" />
      <div @click="toggleModal" class="modal__container" :class="!isModalOpen && 'visible'">
      </div>
        <div class="modal" :class="isModalOpen ? 'close' : '' ">
          <h1 class="modal__title">Reporte por fecha de nacimiento</h1>
          <h1 class="modal__subtitle">Ingresa los siguientes datos para generar tu reporte</h1>
        </div>
  </div>
</template>

<script>
import Table from '@/components/Table/Table';
import Button from '@/components/Button/Button';

export default {
  name: "reportsPage",
  data(){
    return {
      isModalOpen : false,
    }
  },
  components: {
    Table,
    Button,
  },
  methods : {
    toggleModal() {
      console.log('open!',this.isModalOpen)
      this.isModalOpen = !this.isModalOpen
    },
  },
};
</script>

<style lang="scss" scoped>
    @import "@/scss/abstracts/variables.scss";

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

.modal__container{
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.342);
  display: none;
  justify-content: center;
  align-items: center;
}

.modal__container.visible{
  display: flex;
}

.modal{
       width: 33.438rem;
    height: 26.438rem;
    background: #FFF;
    border-radius: 10px;
    display: flex;
    transition: transform 1s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 2rem;
}

.modal__title {
    font-weight: 900;
    font-size: 1.55rem;
    color: $black;
}

.modal__subtitle {
       font-size: 1rem;
    font-weight: 300;
    margin-top: 0.8rem;
   color: $darkGray;
}

  .modal.close {
        transform: translate(-50%, -200%);
  }
</style>
