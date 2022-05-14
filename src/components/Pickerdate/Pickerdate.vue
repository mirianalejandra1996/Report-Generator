 <template>
    <div class="form__input-box">
        <label class="form__input-label">{{label}}</label>
        <Datepicker :format="format" v-bind="$attrs" @change="$emit('update:dateValue', event.target.value)"/>
    </div>
</template>

<script>
    import Datepicker from '@vuepic/vue-datepicker';
    import { ref } from 'vue';

    export default {
        name: "CalendarComponent",
        components: { Datepicker },
        props: {
            label: {
                type: String,
                required: true,
            },
            dateValue : {
                type: [Object, String],
            }
        },
         methods: {
            changeUsername() {
                this.$emit('modelValue')
            }
        },
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
        },
    }
</script>
 
<style >
  @import '@vuepic/vue-datepicker/dist/main.css';

/* Input container */
.form__input-box{
    margin: 15px 0;
    height: 3.438rem;
    position: relative;
    width: auto;
}

/* Label of input */
.form__input-label {
    background: #fff;
    color: #565656;
    font-size: .8rem;
    font-weight: 300;
    left: 6px;
    margin-bottom: 5px;
    padding: 3px;
    position: absolute;
    top: -14px;
    z-index: 2;
}

/* Clock button */
.dp__button{
    display: none;
}

/* Days of others months (not current) */
.dp__calendar_header{
    color: #757575;
    font-weight: 500;
    margin-top: 7px;
}

/* Header Calendar Days */
.dp__calendar_header_item {
    display:block;
    padding-left: 12px;
    visibility:hidden;
}

/* First letter of each weekday, instead of Monday, is M */
.dp__calendar_header_item:first-letter {
    visibility:visible;
}

/* Calendar Icon container */
    .dp__input_icons{
        color: #707070;
        height: 25px;
        width: auto;
    }

/* Calendar Icon */
.dp__input_wrap > .dp__input_icon:first-of-type{
    left: auto !important;
    position: absolute;
    right: 0 !important;
}

/* X button is not visible */
.dp__clear_icon{
    display: none;
    left: 0 !important;
    right: auto !important;
}

.dp__arrow_top{
    display: none;
}

.dp__main{
    height: 3rem;
    width: 260px;
}

.dp__main > div {
    height: 100%;
}

/* Input Container*/
.dp__input_wrap{
    height: 3.438rem;
    width: 100%;
}

/* Input */
.dp__input{
    color: #565656;
    font-size: 0.8rem;
    font-weight: 400;
    height: 100%;
    padding: 10px 15px;
    width: 100%;
        border: none;
    box-shadow: 0px 0px 0px 0.3px #565656;
}

.dp__month_year_row{
    color: #181818;
    font-size: .9rem;
    font-weight: 600;
    padding-left: 10px;
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
    width: 15px;
}


/* Month and year container */
.dp__month_year_select{
    margin-left: 0.5rem;
    width: auto;
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
  --dp-text-color: #565656;
  /* --dp-border-color: #ddd; */
  /* --dp-border-color: rgb(184, 184, 184); */
  /* --dp-border-color: #fff; */
}
</style>
