<template>
      <div @click="cancelRegister" class="modal__container" :class="isModalOpen && 'visible'">
      </div>
        <div class="modal" :class="!isModalOpen && 'close'">
          <h1 class="modal__title">Reporte por fecha de nacimiento</h1>
          <h1 class="modal__subtitle">Ingresa los siguientes datos para generar tu reporte</h1>

          <form class="form" @submit.prevent="handleSubmit">
            <!-- ---------------------------------------------- -->
            <!-- First row -->
            <div class="form__input-box">
              <label class="form__input-label--upper">Descripción del reporte</label>
              <input type="text" class="form__input" v-model="formValues.reportDescription" />
            </div>
            <!-- ---------------------------------------------- -->
            <!-- 2 inputs in a row -->
            <h3 class="form__title">Fecha de nacimiento</h3>
            <div class="form__flex-container">
              <Pickerdate label="Inicio" v-model="formValues.birthDate" :dateValue="formValues.birthDate"/>
              <Pickerdate label="Fin" v-model="formValues.endDate" :dateValue="formValues.endDate"/>
            </div>
              <div class="form__button-container">
                <div class="form__err-container"><span v-if="errorMsg">{{errorMsg}}</span></div>
                <Button :isDisabled="isDisabled" :isBigger="true" text="Generar Reporte"/>
              </div>
          </form>
        </div>
</template>

<script>
import Button from '../Button/Button'
import Pickerdate from '../Pickerdate/Pickerdate'
import moment from 'moment';

export default {
    name: 'ModalComponent',
    emits: ['closeModal','generateReport'],
    data(){
      return {
        formValues: {
          reportDescription: '',
          birthDate: '',
          endDate: '',

        },
        errorMsg: '',
        isDisabled: false,
      }
    },
    components: {
      Pickerdate,
      Button,
    },
    props: {
      isModalOpen: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleSubmit(){
        this. errorMsg = ""
    // ! Control empty fields
        if (!this.formValues.reportDescription || !this.formValues.birthDate || !this.formValues.endDate){
          this. errorMsg = "Campos deben ser rellenados"
          return 
        }

      // ! Only accept letters and spaces
        var expression = /^[a-zA-Z\s]*$/;

        if(!expression.test(this.formValues.reportDescription)){ //
            this. errorMsg = "Solo ingresar letras en la descripción"
            return 
        }

        const birthDate = new Date(this.formValues.birthDate).getTime()
        const endDate = new Date(this.formValues.endDate).getTime()
        if(birthDate === endDate){
          this.errorMsg = "Debe ingresar fechas diferentes"
          return
        }

        if(birthDate > endDate){
          this.errorMsg = "Fecha de inicio debe ser antes que fecha fin"
          return
        }
          this.errorMsg = "";
          this.addReport()
      },
      addReport(){
        this.$emit('generateReport', {...this.formValues, dateCreation: moment()})
        this.cleanForm()
      },
      cancelRegister(){
        this.$emit('closeModal')
        this.cleanForm()
      },
      cleanForm(){
        this.formValues.reportDescription = ''
        this.formValues.endDate = ''
        this.formValues.birthDate = ''
        this. errorMsg = ""
      }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/scss/abstracts/variables.scss";

.modal{
    align-items: center;
    background: $white;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 28rem;
    justify-content: start;
    left: 50%;
    padding: 2rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: transform 1s;
    width: 37.438rem;

    &__container{
      align-items: center;
      background-color: rgba(0, 0, 0, 0.342);
      display: none;
      height: 100vh;
      justify-content: center;
      left: 0;
      position: fixed;
      top: 0;
      width: 100%;
    }

    &__container.visible{
      display: flex;
    }

    &__title {
      color: $black;
      font-size: $fontSizeNormalBigger;
      font-weight: 900;
    }

    &__subtitle {
      color: $darkGray;
      font-size: $fontSizeNormal;
      font-weight: 300;
      margin-top: 0.8rem;
    }
    
    &.close {
      transform: translate(-50%, -200%);
    }
}

.form{
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-top: 1.5rem;
    width: 100%;

    &__title {
      background: $white;
      color: $darkGray;
      font-size: $fontSizeSmall;
      font-weight: 300;
      left: 12px;
    }

    &__input-box{
      height: 3.438rem;
      margin: 15px 0;
      position: relative;
      width: 100%;

      .form__input-label--upper {
        background: $white;
        color: $darkGray;
        font-size: $fontSizeSmall;
        font-weight: 300;
        left: 12px;
        margin-bottom: 5px;
        padding: 3px;
        position: absolute;
        top: -14px;
      }

      .form__input-label{
        background: $white;
        color: $darkGray;
        font-size: $fontSizeSmall;
        font-weight: 300;
        left: 6px;
        margin-bottom: 5px;
        padding: 3px;
        position: absolute;
        top: -14px;
      }

      .form__input{
        border-radius: 6px;
        // ! to make border with less than 1px, I used a box shadow to control it.
        box-shadow: 0px 0px 0px 0.3px $darkGray;
        color: $darkGray;
        font-family: 'ArgentumSans';
        font-size: $fontSizeSmall;
        font-weight: 400;
        height: 100%;
        outline-width: 0;
        padding: 10px 15px;
        text-transform: none;
        width: 100%;
      }
    }

    &__flex-container{
      display: flex;
      gap: 1rem;
      width: 100%;

      .form__input-box{
        margin: 15px 0;
        width: 50%;
      }

    }

    &__err-container {
      color: $red;
      font-size: $fontSizeNormal;
      font-weight: 500;
      height: 1rem;
      margin-bottom: 0.5rem;
      margin-top: 0.8rem;
    }

     &__button-container{
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
      }
}

</style>
