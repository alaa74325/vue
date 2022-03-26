<template>
    <div class="calendar">
       <!-- <div class="calendar-h div-flex-sp">
            <i class="uil uil-angle-left-b"></i>
            <p>March 2022</p>
            <i class="uil uil-angle-right-b"></i>
        </div>
        <div class="week-h">
            <p>Sat</p>
            <p>Sun</p>
            <p>Mon</p>
            <p>Tue</p>
            <p>Wed</p>
            <p>Thu</p>
            <p>Fri</p>
        </div>
        <div >
            <p v-for="day in days" :key="day">{{day}}</p>
        </div>-->
        <v-date-picker
        v-model="date"
        :event-color="date => date[9] % 2 ? '#fc6a6a' : '#45bbfe'"
        :events="functionEvents"
        width="100%"
        active-bacground="#45bbfe "
        hide-header="true"
        ></v-date-picker>
    </div>
</template>

<style lang="scss" scoped>
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
$bodyColor:#f3f5f7;
.div-flex-sp{
    display: flex;
    justify-content: space-between;
}
.v-picker__title {
    display: none !important;
}
.v-date-picker-table {
    position: relative;
    padding-bottom: 10px;
    height: auto !important; 
}
.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){
    display: none !important;
}
.v-date-picker-table--date .v-btn {
    height: 34px !important;
    width: 34px !important;
}  

.v-card > *:first-child:not(.v-btn):not(.v-chip):not(.v-avatar),
 .v-card > .v-card__progress + *:not(.v-btn):not(.v-chip):not(.v-avatar) {
    padding: 0;
}
tr {
    padding: 3px 0;
}
.v-date-picker-table .v-btn {
    font-size: 16px;
}    
.v-date-picker-table .v-btn {
    font-size: 15px !important;
}
.theme--light.v-date-picker-table th,
 .theme--light.v-date-picker-table
  .v-date-picker-table--date__week {
    color: rgba(0, 0, 0, 0.38);
    font-size: 14px;
    font-weight: 700;
}  
.v-date-picker-table--date .v-date-picker-table__events {
    bottom: 12px;
}  
.calendar{
    width: 100%;
}
</style>
<script>
export default{
    data(){
        return{
            arrayEvents: null,
            date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }
    },
    mounted () {
    this.arrayEvents = [...Array(6)].map(() => {
        const day = Math.floor(Math.random() * 30)
        const d = new Date()
        d.setDate(day)
        return d.toISOString().substr(0, 10)
    })
    },
    methods: {
    functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['#0061ff', '#45bbfe']
        return false
    },
    },
};
</script>
