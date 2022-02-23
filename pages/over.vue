<template>
    <div>
        <loader :start="spin"></loader>
        <button @click='mySpin()'>reload</button>
    </div>
</template>
<script>
export default {
    layout: "empty",
    data:()=>({
        spin:false,
    }),
    
    methods(){
        
    }
    
};
</script>

