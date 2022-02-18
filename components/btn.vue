<template>
    <v-btn
                block
                plain
                text
                elevation="2"
                @click="loader='loading'"
                >Login</v-btn>
</template>
<style scoped lang="scss">
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1;
}
.v-btn:not(.v-btn--round).v-size--default {
    padding: 21px 7px;
    color: #fff;
    background: #2a5dc4;
}

</style>
<script>

export default{
    data () {
    return {
        loading: false,
    }
    }
}
</script>
