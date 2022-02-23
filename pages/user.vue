<template>
    <div class="user-page">
        <div class="container-m">
            <div class="left-side col-3-m">
                <UserLeftSide></UserLeftSide>
            </div>
            <div class="posts-content col-6-m">
                <UserPostsArea></UserPostsArea>
            </div>
            <div class="right-side col-3-m" >
                <UserRightSide></UserRightSide>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style scoped lang="scss">
$iconColor:#94949f;
$bodyColor:#f3f5f7;
$activeColor:#0061ff;
/* general classes*/
.user-page{
    background: $bodyColor;
    >div.container-m{
        >div{
            margin-top: 20px;
            overflow: hidden;
            height: 100%;
        }
    }
}
@media (max-width:1024px) {
    .col-6-m{
        width: 65%;
    }
    .col-3-m{
        width: 32%;
    }
    .container-m{
        width: 93%;
    }
    .left-side{
        display: none;
    }
}
@media (max-width:900px) {
    .posts-content{
        width: 100%;
    }
    .right-side,.left-side{
        display: none;
    }
}
</style>