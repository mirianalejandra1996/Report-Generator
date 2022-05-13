<template>
  <h1>Calendar</h1>
  <h1>{{startDay.format("DD/MM")}} - {{endDay.format("DD/MM")}}</h1>
  <h1>day: {{day.format("DD/MM")}}</h1>
  <!-- <Row v-for="report in reports" :key="report.id" :date="report.birth_date" :title="report.title"/> -->
  <!-- <Row v-for="(week, index) in calendar" :key="index"/> -->
  <!-- <Row v-for="(week, index) in calendar" :key="index"/> -->
  <div v-for="(week, index) in calendar" :key="index">
    <!-- <div v-for="(week, index) in calendar" :key="index"> -->
      <h4>0</h4>
    <!-- </div> -->
  </div>
</template>

<script>
import moment from "moment"

export default {
  name: "TableProofComponent",
  data() {
    return {
      fecha: null,
      startDay: null,
      endDay: null,
      day: null,
      calendar: null,
    }
  },
  methods: {
    getDate(){
       const value = moment();

       const startDay = value.clone().startOf("month").startOf("week");
       const endDay = value.clone().endOf("month").endOf("week");

        this.startDay = startDay;
        this.endDay = endDay;

       const day = startDay.clone().subtract(1, "day")

       this.day = day

       const calendar = []

      //  The algorithm

      while(day.isBefore(endDay,"day")){
        // Our calendar is a matrix --> An array of arrays
        calendar.push(
          // we have to clone it to have a new instance of the next day
          Array(7).fill(0).map(() => day.add(1,"day").clone())
        )
      }

      // Each iteration is gonna giving us the week
      this.calendar = calendar

    }
  },
  created() {
    console.log('creado calendar')

   this.getDate()

    
  },

};
</script>

<style lang="scss" scoped>

    @import "@/scss/abstracts/variables.scss";
    
</style>
