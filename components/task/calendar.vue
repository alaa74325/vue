<template>
    <div class="calendar">
        <v-date-picker
        v-model="date2"
        :event-color="date => date[9] % 2 ? '#fc6a6a' : '#45bbfe'"
        :events="functionEvents"
        width="100%"
        color="#45bbfe"
        no-title="true"
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
.calendar{
    width: 100%;
    margin-top: 28px;
}
</style>
<script>
export default{
    data(){
        return{
            date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        }
    },
    methods: {
    functionEvents (date) {
        const [,, day] = date.split('-')
        if ([12, 17, 28].includes(parseInt(day, 10))) return true
        if ([1, 19, 22].includes(parseInt(day, 10))) return ['#0061ff', '#45bbfe']
        return false
    }
    },
    mounted(){
    }
};
</script>
