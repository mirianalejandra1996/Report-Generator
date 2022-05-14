 <template>
    <Datepicker v-model="date"></Datepicker>
    <!-- <Datepicker v-model="date"></Datepicker> -->
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    // import '@vuepic/vue-datepicker/dist/main.css'
  
    
    export default {
        name: "CalendarComponent",
        components: { Datepicker },
        data() {
            return {
                date: null,
            };
        }
    }
</script>
 
<style >
  @import '@vuepic/vue-datepicker/dist/main.css';


/* Clock button */
.dp__button{
    display: none;
}

/* Days of others months (not current) */
.dp__calendar_header{
    color: #757575;
    font-weight: 400;
    margin-top: 7px;
}

/* Header Calendar Days */
.dp__calendar_header_item {
    display:block;
    visibility:hidden;
    padding-left: 12px;
}

.dp__calendar_header_item:first-letter {
    visibility:visible;
}

/* Calendar Icon container */
    .dp__input_icons{
        /* background: gray; */
        width: auto;
            height: 25px;
            color: #707070;
        
    }

/* .dp__input_wrap > .dp__input_icon:first-of-type{ */
/* .dp__input_wrap > svg:last-of-type{ */
.dp__input_wrap > .dp__input_icon:last-of-type{
    /* position: absolute; */
    /* left: 0 !important; */
    /* right: auto !important; */
    /* background: orange; */
    /* background: #fff; */

}

    /* ---------------------- */
        /* Calendar Icon */
/* .dp__input_icon:first-of-type{ */
.dp__input_wrap > .dp__input_icon:first-of-type{
/* .dp__input_wrap > svg:first-of-type{ */
    position: absolute;
    left: auto !important;
    right: 0 !important;
    /* background: blue; */

}



/* .dp__input_icon:last-of-type{
    position: absolute;
    right: auto !important;
    left: 0 !important;
} */

.dp__arrow_top{
    display: none;
}

.dp__main{
    width: 260px;
    height: 3.2rem;
}

.dp__main > div {
    height: 100%;
}


/* Input */
.dp__input_wrap{
    width: 100%;
    height: 4rem;
}

.dp__input{
    width: 100%;
    height: 100%;
    font-weight: 400;
    color: #565656;
    font-size: 0.8rem;
    padding: 10px 15px;
}

.dp__month_year_row{
    padding-left: 10px;
    font-size: .9rem;
    font-weight: 600;
    color: #181818;
    padding-top: 0.2rem;
}

/* Arrow left container*/
.dp__month_year_col_nav:first-of-type{
    position: absolute;
    right: 45px;
}

/* Arrow right container*/
.dp__month_year_col_nav:last-of-type{
    position: absolute;
    right: 5px;
}

/* Arrow icons */
.dp__inner_nav svg {
    /* height: 20px; */
    width: 15px;
}


/* Month and year container */
.dp__month_year_select{
    width: auto;
    margin-left: 0.5rem;
}

/* Each cell of the days */
.dp__cell_inner{
    border-radius: 50%;
}

.dp__action_row{
    justify-content: end;
}

/* Date resume footer calendar */
.dp__selection_preview{
    display: none;
}

/* Days that belongs to other month */
.dp__cell_offset{
    color: #fff;
}

/* Underline of header's calendar */
.dp__calendar_header_separator{
    background: #fff;
}

/* Calendar container */
.dp__calendar_wrap{
    font-size: .8rem;
}

.dp__theme_light {
  --dp-menu-border-color: #fff;
  --dp-success-color: #4562e6;
}
</style>
