<template>
    <div >{{counter}}
        <button @click="acounter">click</button>
    </div>
</template>
<script>
export default {
    computed:{
        counter(){
            return this.$store.getters.counter;
        }
    },
    methods:{
        acounter(){
            this.$store.commit("acounter");
        }
    },
    
}
</script>
