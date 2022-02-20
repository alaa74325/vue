<template>
    <div class="left-content">
        <div class="activity"> 
            <div class="container-m">
                <div class="head-content">
                    <h3>Activity</h3>
                    <nuxt-link to="">See all</nuxt-link>
                </div>
                <div class="added-task">
                    <h4>Tasks Added To You</h4>
                    <div class="mentions">
                        <n-link to=""><img src="../../assets/images/user1.jpg" class="img" /></n-link>
                        <n-link to=""><p>Mentions</p> <span>2 Stories Mentions You</span></n-link>
                    </div>
                </div>
                <div class="new-content">
                    <h4>New</h4>
                    <UserNewFollowBack></UserNewFollowBack>
                    <UserNewPhoto></UserNewPhoto>
                    <UserNewPhoto></UserNewPhoto>
                    <UserNewFollowBack></UserNewFollowBack>
                    <UserNewPhoto></UserNewPhoto>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
.left-content{
    width:100%;
    >div{
        background: #fff;
        border-radius: 15px;
        width: 100%;
    }
    .activity .container-m{
        display: block;
    }
    a{
        text-decoration: none;
        color:$spanColor;
        font-size: 14px;
    }
    .head-content{
        display: flex;
        justify-content: space-between;
        margin: 10px auto;
        h3{
            font-size: 18px;
            color:$h3Color;
        }
    }
    .added-task{
        margin: 30px auto 20px;
        h4{
            font-size: 15px;
            color:$h3Color;
        }
        .mentions{
            display: flex;
            margin-top:15px
            a{
                font-size: 16px;
                border-style: none;
                height: 40px;
            }
            p{
                color:$h3Color;
                font-size: 14px;
                margin: 6px 0 -2px !important;
                font-weight: 500 !important;
            }
            span{
                font-size: 12px;
                font-weight: 500 !important;
                color:$spanColor;
            }
            img{
                    width: 40px;           
                    border-radius: 50%;
                    height: 40px;
                    margin-top:7px;
                    border-radius: 50%;
                    margin-right: 10px 
                }
        }

    }
    .new-content{
        h4{
            font-size: 14px;
            color:$h3Color;
            margin-bottom: 10px;
        }
    }
}
</style>