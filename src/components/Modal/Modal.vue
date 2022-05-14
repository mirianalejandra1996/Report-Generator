<template>
      <div @click="$emit('closeModal')" class="modal__container" :class="isModalOpen && 'visible'">
      </div>
        <div class="modal" :class="!isModalOpen && 'close'">
          <h1 class="modal__title">Reporte por fecha de nacimiento</h1>
          <h1 class="modal__subtitle">Ingresa los siguientes datos para generar tu reporte</h1>

          <form class="form">
            <!-- First row -->
            <div class="form__input-box">
              <label class="form__input-label--upper">Descripción del reporte</label>
              <input type="text" class="form__input" v-model="formValues.reportDescription" />
            </div>
            <!-- 2 inputs in a row -->
            <h3 class="form__title">Fecha de nacimiento</h3>
            <div class="form__flex-container">
              <Pickerdate label="Prueba" v-model="formValues.initDate" :dateValue="formValues.initDate"/>

            </div>
              <div class="form__button-container">
                <Button :isDisabled="true" :isBigger="true" text="Generar Reporte"/>
              <div>
                <pre>
                  {{JSON.stringify(formValues, null,2)}}
                </pre>
              </div>
              </div>
          </form>
        </div>
</template>

<script>
 import { ref } from 'vue';
import Button from '../Button/Button'
import Pickerdate from '../Pickerdate/Pickerdate'


export default {
    name: 'ModalComponent',
    data(){
      return {
        formValues: {
          reportDescription: '',
          initDate: '',
          endDate: '',
        },
      }
    },
      props: {
      isModalOpen: {
        type: Boolean,
        default: false,
      },
    },
    components: {
      Pickerdate,
      Button,
    },
    setup() {
            const test = 'hola';
            const date = ref(new Date());
            const format = (date) => {
                const day = date.getDate();
                const month = date.getMonth() + 1;
                const year = date.getFullYear();

                return `${day}/${month}/${year}`;
            }
            console.log('props', this);
            console.log('date', date);
            console.log('fecha', test);

            return {
                date,
                format,
            }
        },
}
</script>



<style lang="scss" scoped>
    @import "@/scss/abstracts/variables.scss";

.calendar-image{
  position: absolute;
    right: 6px;
    bottom: 50%;
    transform: translateY(50%);
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
}

.form__title{
      font-size: .8rem;
    left: 12px;
    background: #fff;
    color: #565656;
    font-weight: 300;
}
.form__input-box{
     margin: 15px 0;
    width: 100%;
    position: relative;
    height: 3.438rem;
}

.form__input-label--upper {
   margin-bottom: 5px;
    position: absolute;
    top: -14px;
    font-size: .8rem;
    left: 12px;
    background: #fff;
    padding: 3px;
    font-weight: 300;
    color: $darkGray;
}

.form__input-label{
      margin-bottom: 5px;
    position: absolute;
    top: -14px;
    font-size: .8rem;
    left: 6px;
    background: #fff;
    padding: 3px;
    font-weight: 300;
    color: $darkGray;
}

.form__input{
        width: 100%;
    padding: 10px 15px;
    font-size: 0.8rem;
    text-transform: none;
    border-radius: 6px;
    outline-width: 0;
    height: 100%;
    font-weight: 400;
    color: #565656;
    font-family: 'ArgentumSans';
    // ! to make border with less than 1px, I used a box shadow to control it.
    box-shadow: 0px 0px 0px 0.3px $darkGray;
}

.form__flex-container{
  display: flex;
    gap: 1rem;
    width: 100%;
}

.form__flex-container .form__input-box{
  margin: 15px 0;
    width: 50%;
  }

  .form__button-container{
        width: 100%;
    display: flex;
    justify-content: center;
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
    width: 37.438rem;
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

.form{
    display: flex;
    flex-direction: column;
    width: 100%;
        margin-top: 1.5rem;
    height: 100%;
}

  .modal.close {
        transform: translate(-50%, -200%);
  }
</style>
