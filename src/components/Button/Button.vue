<template>
  <button :class="['button', isBigger && 'bigger', isDisabled && 'disabled']"><span class="button__text">{{text}}</span></button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
      text: {
        type: String,
        required: true,
      },
      isBigger: {
        type: Boolean,
        default: false,
      },
      isDisabled: {
        type: Boolean,
        default: false,
      }
    }
}
</script>

<style lang="scss" scoped>
    @import "@/scss/abstracts/variables.scss";

    .button{
    background: $yellow;
    margin-top: 1.875rem;
    border: none;
    border-radius: 3.125rem;
    height: 2.688rem;
    width: 11.688rem;
    cursor: pointer;
    transition: .2s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
  }

  .button:hover{
    background: #e6ac0c;
    transition: .2s ease-in-out;
  }

  .bigger{
    width: 13.875rem;
    height: 3.438rem;
    margin-top: 0.5rem;
  }

  .disabled{
      background-color: $mediumGray;
   }

   .button.disabled:hover{
    background-color: $mediumGray;
    cursor: no-drop;
  }

  .button__text{
    font-size: 1rem;
    font-weight: 400;
    color: $black;
    font-family: 'ArgentumSans', sans-serif;
    margin-bottom: 0.3rem;
  }
  
</style>
