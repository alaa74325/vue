<template>
    <div class="calendar">
        <div class="calendar-h div-flex-sp">
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
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            days:30,
        }
    },
};
</script>
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
    .week-h{
        font-weight: 600;
        p{
            color: $spanColor;
        }
    }
    div{
        display: flex;
        flex-wrap: wrap;
        p{
        text-align: center;
        font-size: 15px;
        font-weight: 600;
        color: $pColor;
        width: calc(100% / 7);
        } 
    }
    .calendar-h{
        flex-wrap: nowrap;
        margin: 30px 0 0;
        p{
            
            color: $pColor;
            font-size: 20px;
            font-weight: 600;
            width: 70%;
        }
        i{
            font-size: 23px;
            color: $spanColor;
        }
    }
}
</style>