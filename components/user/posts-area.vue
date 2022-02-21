<template>
    <div class="posts-content">
        <div class="search-area">
            <div class="container-m">
                <div class='search-input'>
                    <input type="text" placeholder="Search for creators,inspirations,projects">
                    <i class="uil uil-search"></i>
                </div>
            </div>
        </div>
        <UserCardPost/>
    </div>
</template>
<style scoped lang="scss">
.container-m{
    width: 92% !important;
    display: block;
}
.search-input{
    width: 100%;
    position: relative;
    font-weight: 400;
    input{
        width: 100%;
        background: #f3f5f7;
        border-radius: 20px;
        line-height: 42px !important;
        font-size: 16px;
        color:#5a5f6a;
        outline: none;
        padding-left: 47px;
    }
    i{
            position: absolute;
            top: 10%;
            left: 15px;
            font-size: 20px;
            font-weight: 400;
    }
}
.posts-content{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
    .search-area{
        width:100%;
        border-radius: 15px;
        background: #fff;
        margin-bottom: 20px;
    }
}
</style>