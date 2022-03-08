<template>
    <div>
        <button @click="me">Date</button>
        <p>date: {{day}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            day:0,
        }
    },
    methods:{
        me(){
            const d=new Date();
            let day = d.getDate();
            console.log(d);
            console.log(day)
            return day;
        }
    }
}
</script>
