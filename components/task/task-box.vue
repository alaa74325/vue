<template>
    <div>
        <ul v-for="task in tasks" :key="task.id">
            <div class="task-box">
                <div class="container-m div-flex-sp">
                    <div class="div-flex">
                        <i class="uil uil-play-circle start-w"></i>
                        <p>Start from<br><i class="uil uil-clock"></i> <span>9:00am</span></p>
                    </div>
                    <div>
                        <p>{{task.name}}<br><i class="uil uil-paperclip"></i><n-link :to="task.link">www.zoom.com</n-link><i class="uil uil-comment-alt-dots"></i><span>8 comments</span></p>
                    </div>
                    <div class="progress-t">
                        <p>24% complete</p>
                        <span></span>
                    </div>
                    <div class="reminder-value">
                        <!-- <p class="time-date">{{valuedDate}}</p>
                        <p class="time-date">{{valuedTime}}</p> -->
                        <button class="reminder-me" @click="addReminder">
                            <i class="uil uil-stopwatch"></i>Set Reminder</button>
                    </div>
                </div>
                <div class="reminder-pop" v-if="reminder">
                    <div class="pop-box">
                        <h4>Set Reminder</h4>
                        <span>No Reminder</span>
                        <span>In an Hour</span>
                        <span>In Two Hours</span>
                        <div class="body-pop">
                            <input type="time" value="14:20" v-model="valueTime">
                            <input type="date" id="start" v-model="valueDate" >
                        </div>
                        <button @click="reminderDone(valueDate,valueTime)">Done</button>
                        <button  @click="addReminder">Cancel</button>
                    </div>
                </div>
        </div>
        </ul>
    </div>
    
</template>
<script>
import {mapState,mapGetters,mapActions,mapMutations} from 'vuex';
export default{
    computed: {
        ...mapState(['tasks']),
    },
    methods:{
        ...mapActions(['gettasks']),
    }
}    
</script>
<style lang="scss" scoped>
$h3Color:#1b2232;
$pColor:#484e5a;
$hColor:#474748;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
$bodyColor:#f3f5f7;
$blueColor:#45bbfe;
$activeColor:#0061ff;
.reminder-value{
    p{
        text-align: center;
        color: $blueColor !important;
        font-size: 16px !important;
        margin: 0 !important;
    }

}
/* styling picking time  */
input[type=time] {
    border: none;
    color: $hColor;
    width: 80%;
    margin: 15px 0;
    outline: none;
    font-size: 26px;
    font-weight: 600;
}
input[type=time]::-webkit-datetime-edit-fields-wrapper {
    display: flex;
    justify-content: center;
}
input[type="time"]::-webkit-calendar-picker-indicator {
    color:$blueColor;
    font-size: 25px;
}
input[type=time]::-webkit-datetime-edit-text {
    padding: 7px 4px;
}
input[type=time]::-webkit-datetime-edit-hour-field {
    background-color: #f2f4f5;
    border-radius: 15%;
    padding: 7px 13px;
}
input[type=time]::-webkit-datetime-edit-minute-field {
    background-color: #f2f4f5;
    border-radius: 15%;
    padding: 7px 13px;
}
input[type=time]::focus{
    color: $h3Color !important;
}
input[type=time]::-webkit-datetime-edit-ampm-field {
    background-color:$blueColor;
    border-radius: 15%;
    color: #fff;
    padding: 7px 13px;
    font-size: 25px !important;
}
input[type=time]::-webkit-clear-button {
    display: none;
}
input[type=time]::-webkit-inner-spin-button {
    display: none;
}
.reminder-pop{
    position: fixed;
    width: 100%;
    height: 100vh;
    background: rgba(15,22,38,0.92157);
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    overflow: hidden;
    h4{
        color:$hColor;
        margin: 30px 0;
        font-size: 27px;
        font-weight: 600;

    }
    span{
        color:$pColor;
        background: $bodyColor;
        border-radius: 8px;
        padding: 8px;
        margin: 0 8px 25px;
        display: inline-block;
    }
    input{
        display: block;
        outline: none;
        text-align: center;
        margin: 10px auto;
        width: 80%;
    }
    input[type=date]{
        color:$hColor;
        font-size: 20px;
        margin-bottom: 15px;
    }
    .pop-box{
        width: 31%;
        margin: auto;
        background: #fff;
        border-radius: 12px;
        padding: 10px 15px 30px;
        color: #333;
        text-align: center;
        margin: 0 10%;
        button{
            border-style: none;
            background: #00b1ff;
            color: #fff;
            padding: 8px 16px;
            margin: 10px 5px;
            width: 37%;
            font-weight: 500;
            font-size: 17px;
            border-radius: 8px;
        }
        button:last-of-type{
            background: #e02e2e;
        }
    }
}
.container-m{
    width: 91% !important;
}
.div-flex-sp{
    display: flex;
    justify-content: space-between;
}
.div-flex{
    display: flex;
}
.task-box{
    width: 100%;
    border-radius: 13px;
    background: #FFF;
    margin: 10px 0;
    a{
        text-decoration: none;
        color:#45bbfe;
        font-size: 13px;
        font-style: none;
        font-weight: 400;
        margin-right: 10px;
    }
    p{
        font-size: 14px;
        color: $h3Color;
        font-weight: 600;
        margin: 0;
        padding: 0;
        span{
            color:$spanColor;
            font-size: 12px;
            font-weight: 500;
        }
        i{
            font-size: 19px;
            color:$spanColor;
            margin-right:4px;
        }
    }
    i.start-w{
        color:$blueColor;
        font-size:30px;
        margin-right: 7px;
    }
    .progress-t{
        p{
            color: $spanColor;
            
        }
        span{
                width:50%;
                background: #45bbfe;
                height: 3px;
                border-radius: 1.5px;
                display: block;
                margin: 10px 0px 0;
        }
        
    }
    
}
.reminder-me{
    padding: 2px 5px 5px;
    font-size: 13px;
    color:$blueColor;
    border-radius: 7px;
    background: $bodyColor;
    font-weight: 600;
    margin-top: 8px;
    i{
        font-size: 18px;
    }
    
}
@media (max-width: 650px) {
    .task-box{
        .container-m{
            justify-content: space-between;
            flex-wrap: wrap;
            >div{
            width: 45%;
            }
            >div:nth-of-type(2){
                width: 55%;
            }
        }
    }
}
</style>

<script>
export default{
    data(){
        return{
            reminder:false,
            valueTime:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(11,5),
            valueDate:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
            valuedDate:'',
            valuedTime:'',
            currentTime:'',
        }
    },
    methods:{
        addReminder:function(){
            console.log("hi");
            return this.reminder=!this.reminder;
        },
        reminderDone:function(vDate,vTime){
            this.valuedDate=vDate;
            this.valuedTime=vTime;
            return this.reminder=!this.reminder;
        }
    }
}
</script>
