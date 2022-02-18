<template>
    <div>
        <v-text-field
                        outlined
                        label="Email"
                        append-icon="mdi-at"
                        ></v-text-field>
        <v-text-field
                            outlined
                            label="Password"
                            append-icon="mdi-lock"
        ></v-text-field> 
    </div>
</template>
<style scoped lang="scss">
.v-application--is-ltr, .v-text-field .v-label {
    background: #fff;
    padding: 0 1px;
}
</style>