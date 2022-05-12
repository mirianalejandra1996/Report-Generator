<template>
  <h1>Calendar</h1>
  <h1>{{siquesi}}</h1>
  <h1>{{bid ? 'siiiiiiiipi,' : ' nooooopiiii'}}</h1>
</template>

<script>
export default {
  name: "TableComponent",
  data() {
    return {
      siquesi: 'no',
    }
  },
  props : {
    bid: {
      type: Boolean,
      required: true,
    } 
  }
};
</script>

<style lang="scss" scoped>

    @import "@/scss/abstracts/variables.scss";
    
</style>
