<template>
  <datepicker v-model="picked" />
</template>


<script>
import Datepicker from 'vue3-datepicker'

export default {
  name: "CalendarComponent",
  components: {
    Datepicker
  },
  data() {
    return {
      picked: new Date(),
    }
  }
}

</script>


<!-- <template>
    <Datepicker v-model="date"></Datepicker>
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css'
    
    export default {
      name: "CalendarComponent",
        components: { Datepicker },
        data() {
            return {
                date: null,
            };
        }
    }
</script> -->







 <!-- name: "CalendarComponent", -->