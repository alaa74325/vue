<template>
    <div class="posts-content">
        <div class="search-area">
            <div class="container-m">
                <div class="filter-box">
                    <n-link to="" :class="{add_active:addBook}"  @click="hi"><i class="uil uil-plus"></i><span>Books</span></n-link>
                    <n-link to=""><i class="uil uil-plus"></i><span>Groups</span></n-link>
                    <n-link to=""><i class="uil uil-plus"></i><span>Students</span></n-link>
                </div>
                <div class='search-input'>
                    <input type="text" placeholder="Search for creators,inspirations,projects">
                    <i class="uil uil-search"></i>
                    <n-link to="">Search</n-link>
                </div>
            </div>
        </div>
        <UserPhotoPost/>
        <UserVotingPost />
        <UserPhotosPost/>
        <UserFilePost/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            addBook:true,
        }
    },
    methods:{
        hi:function(e){
            console.log(e.$el);
        }
    }
}
</script>
<style scoped lang="scss">
$bodyColor:#f3f5f7;
$spanColor:#aeb2bb;
$filter-color:#89a0fd;
.container-m{
    width: 92% !important;
    display: block;
}
.add_active i{
    color:red;
}
.search-input{
    width: 100%;
    position: relative;
    font-weight: 400;
    margin-bottom: 10px;
    input{
        width: 100%;
        background: $bodyColor;
        border-radius: 20px;
        line-height: 42px !important;
        font-size: 16px;
        color:$spanColor;
        outline: none;
        padding-left: 47px;
    }
    i{
            position: absolute;
            top: 10%;
            left: 15px;
            font-size: 17px;
            font-weight: 400;
            color: $spanColor;
    }
    a{
            background: $filter-color;
            color: #fff;
            font-size: 15px;
            font-weight: 700;
            border-radius: 15px;
            position: absolute;
            text-decoration: none;
            right: 6px;
            top: 5px;
            line-height: 32px;
            padding: 0 17px;
            text-transform: uppercase;
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
.filter-box{
    display: flex;
    margin: 10px auto;
    a{
        line-height: 30px;
        padding: 5px ;
        margin-right: 10px;
        background:$bodyColor;
        border-radius: 12px;
        display: flex;
        text-decoration: none;
        font-size: 15px;
        font-weight: 700;
        color: $spanColor;
        *{
            margin-right: 5px;
        }
        i{
            font-size: 16px;
            color: $filter-color;
        }
    }
}
@media (max-width:425px) {
    .filter-box a{
        line-height: 25px;
        padding: 3px;
        font-size: 14px;
    }
    .search-input{ 
        input{
            font-size: 14px;
            padding-left: 5px;
        }
        i{
            display: none !important;
        }
        a {
            font-size: 13px;
            font-weight: 500;
            right: 3px;
            padding: 0 12px;
        }
    } 
}
</style>