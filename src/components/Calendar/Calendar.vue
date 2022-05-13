<template>
  <h1>Calendar</h1>
  <h1>{{startDay.format("DD/MM")}} - {{endDay.format("DD/MM")}}</h1>
  <h1>day: {{day.format("DD/MM")}}</h1>

<div class="calendar">
  <!-- <ol class="calendar__header">
    <li  v-for="(nameDay, index) in daysName" :key="index">{{nameDay}}</li>
  </ol> -->
  <div class="calendar__header">
    <div  v-for="(nameDay, index) in daysName" :key="index">{{nameDay}}</div>
  </div>
  <div class="calendar__body">
    <div  v-for="(week, index) in calendar" :key="index">
      <h4 class="calendar__day" v-for="(day, index) in week" :key="index">{{day.format("D").toString()}}</h4>
    </div>
</div>
</div>
</template>

<script>
import moment from "moment"

export default {
  name: "TableProofComponent",
  data() {
    return {
      fecha: null,
      daysName: ['S','M','T','W','T','F','S'],
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

    .calendar {
      // display: grid;
      // grid-template-columns: repeat(7,1fr);
          width: 400px;
    min-height: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid blue;
    }

    .calendar__header{
          // display: flex;
    width: 100%;
    justify-content: space-between;
    border: 1px solid orange;
        display: grid;
    grid-template-columns: repeat(7, 1fr);
    }

    .calendar__body {
      position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
      // -------------
      display: grid;
      grid-template-columns: repeat(7,1fr);
    }

    .calendar__day{
      border: 1px solid green;
    }
    
</style>
