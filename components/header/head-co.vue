<template>
    <div class="header-content">
        <div class="container-m">
            <div class="logo col-3-m">
                    <h1>Nadres</h1>
            </div>
            <nav class="menu col-6-m" id="menu">
                <n-link to="/user"><i class="uil uil-estate"></i></n-link>
                <n-link to="/task"><i class="uil uil-compass"></i></n-link>
                <n-link to="/group"><i class="uil uil-bag-alt"></i></n-link>
                <n-link to="/activity"><i class="uil uil-bell"></i></n-link >
                <n-link to="/message"><i class="uil uil-envelope-heart"></i></n-link >
            </nav>
            <div class="right-menu col-3-m">
                <NuxtLink to=""><img src="../../assets/images/profilePic.jpg"></NuxtLink>
                <button class="menu-btn">
                    <i class="uil uil-bars" v-if="!menuShow" @click="menuShowing"></i>
                    <i class="uil uil-multiply" v-else @click="menuShowing"></i>
                </button>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
/* Varibles */
$iconColor:#94949f;
$bodyColor:#f3f5f7;
$activeColor:#0061ff;
/* general classes*/
.menu-btn{
    display: none;
    i{
        color: $iconColor;
        font-size: 21px;
        line-height: 34px;
    }
}
.col-3-m{
    width: 24%;
}
.col-6-m{
    width:48%
}
.container-m{
    width: 90% !important;
    padding:7px 0;
    margin:0  auto !important;
    display:flex;
    justify-content: space-between;
}
a.nuxt-link-active i{
    color:$activeColor;
}
/* Start styling */
.logo h1{
    color:$activeColor;
    font-family: 'Satisfy', cursive;
    font-size: 25px;
    padding: 0;
    margin: 0;
    line-height: 40px;
}

.header-content{
    width:100%;
    background: #fff;
    overflow: hidden;
    justify-content: space-between;
    align-content: center;
    position: fixed;
    z-index: 100;
    div.container-m{
        >nav{
            display: flex;
            justify-content: center;
            a {
                text-decoration: none;
                align-items: center;
                display: grid;
                color:$iconColor;
                display: inline-block;
                margin: 0 18px;
                line-height: 40px;
                transition: all 1.5s linear;
                position: relative;
                i{
                    box-sizing: border-box;
                    text-align: center;
                    font-size: 24px;
                    font-weight: 200;
                }
            }
            a:hover{
                top:-5px;
            }
        }
        .right-menu{
                display: flex;
                justify-content: flex-end;
                >*{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin:0 0 0 12px ;
                    i{
                        text-align: center;
                    }
                    img{
                        width: 100%;
                        height: 35px;
                    }
                }
            }
    }
}
@media (max-width:767px) {
    .display-menu{
        left: 0 !important;
    }
    .menu-btn{
        display: block;
    }
    button{
        outline:none;
        i{
            transition: all 2s linear;
        }
    }
    .menu{
        width: 85px;
        position: relative;
        height: 100vh;
        background: #fff;
        position: fixed;
        top: 0;
        left: -85px;
        z-index: 1000;
        transition: all .5s ease;
        display: flex;
        flex-direction: column;
        justify-content: center;
        a{
            margin:15px auto 0 !important;
            
        }
        
    }
}
</style>
<script>
export default{
    data(){
        return{
            menuShow:false,
        }
    },
    computed:{
        
    },
    methods: {
        menuShowing:function(){
            document.getElementById("menu").classList.toggle("display-menu");
            return this.menuShow=!this.menuShow;
        }
    },
} 

</script>
