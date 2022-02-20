<template>
    <div class="user-page">
        <div class="container-m">
            <div class="left-side col-3-m">
                <UserLeftSide/>
            </div>
            <div class="posts-content col-6-m">
                <UserPostsArea/>
            </div>
            <div class="right-side col-3-m" >
                <UserRightSide/>
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
</style>