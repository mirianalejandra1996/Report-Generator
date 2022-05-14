 <template>
    <Datepicker v-model="date" :format="format" />
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import { ref } from 'vue';

    export default {
        name: "CalendarComponent",
        components: { Datepicker },
        setup() {
        const date = ref(new Date());
        const format = (date) => {
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();

            return `${day}/${month}/${year}`;
        }
        
        return {
            date,
            format,
        }
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

/* First letter of each weekday, instead of Monday, is M */
.dp__calendar_header_item:first-letter {
    visibility:visible;
}

/* Calendar Icon container */
    .dp__input_icons{
        width: auto;
        height: 25px;
        color: #707070;
        
    }

/* Calendar Icon */
.dp__input_wrap > .dp__input_icon:first-of-type{
    position: absolute;
    left: auto !important;
    right: 0 !important;
}

/* X button is not visible */
.dp__clear_icon{
    right: auto !important;
    left: 0 !important;
    display: none;
}

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

/* Input Container*/
.dp__input_wrap{
    width: 100%;
    height: 4rem;
}

/* Input */
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

/* global colors of datepicker component */
.dp__theme_light {
    --dp-menu-border-color: #fff;
  --dp-success-color: #4562e6;
}
</style>
