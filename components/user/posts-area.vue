<template>
    <div class="posts-content">
        <div class="search-area"></div>
        <UserCardPost/>
    </div>
</template>
<style scoped lang="scss">
.posts-content{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    .search-area{
        height: 100px;
        width:100%;
        border-radius: 20px;
        background: #fff;
        margin-bottom: 20px;
    }
}
</style>