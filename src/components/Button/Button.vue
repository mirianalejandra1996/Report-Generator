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
      align-items: center;
      background: $yellow;
      border-radius: 3.125rem;
      border: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      cursor: pointer;
      display: flex;
      height: 2.688rem;
      justify-content: center;
      margin-top: 1.875rem;
      transition: .2s ease-in-out;
      width: 11.688rem;

      &__text{
        color: $black;
        font-family: 'ArgentumSans', sans-serif;
        font-size: $fontSizeNormal;
        font-weight: 400;
        margin-bottom: 0.3rem;
      }


      &:hover{
        background: $darkYellow;
        transition: .2s ease-in-out;
      }

       &.bigger{
        height: 3.438rem;
        margin-top: 0.5rem;
        width: 13.875rem;
      }

      &.disabled{
        background-color: $mediumGray;
      }

      &.disabled:hover{
        background-color: $mediumGray;
        cursor: no-drop;
      }
  }
 
</style>
