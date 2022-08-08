<template>
    <div class="header-content">
        <div class="container-m">
            <div class="logo col-3-m">
                    <h1>Nadres</h1>
            </div>
            <!--  v-if="$auth.loggedIn"-->
            <nav class="menu col-6-m" id="menu">
                <n-link to="/user"><i class="uil uil-estate"></i></n-link>
                <n-link to="/task"><i class="uil uil-compass"></i></n-link>
                <n-link to="/groups"><i class="uil uil-bag-alt"></i></n-link>
                <n-link to="/activity"><i class="uil uil-bell"></i></n-link >
                <n-link to="/message"><i class="uil uil-envelope-heart"></i></n-link >
            </nav>
            <div class="right-menu col-3-m"  >
                <NuxtLink to=""><img src="../../assets/images/profilePic.jpg"></NuxtLink>
                <div class="account">
                    <p>Your Name</p>
                    <nuxt-link to="">More Details</nuxt-link>
                    <a >Log Out</a>
                </div>
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
                position: relative;
                img{
                    width: 37px;
                    height: 35px;
                    border-radius: 10%;
                    border:2px solid rgb(215, 211, 211);
                    float:right
                }
            }
    }
}
.account::before{
    content: "";
    position: fixed;
    top: -20px;
    background: red;
    height: 20px;
    width: 40px;
    border-top-right-radius:3px;
    border-top-left-radius:3px ;
}

.account{
    display: none;
    transition: all 0.8s  ease-in-out;
    padding: 10px;
    border-radius: 5%;
    position: fixed;
    top: 50px;
    width: 200px;
    height: 116px;
    right: 0;
    background: rgb(228, 218, 218);
    margin-right: 3%;
}
.right-menu:hover{
    position: relative;
    .account{
        display: block;
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
import axios from 'axios';
export default{
    data(){
        return{
            menuShow:true,
        }
    },
    computed:{
        
    },
    methods: {
        
    },
    /* async created(){
        const response= await axios.get('user',{
            headers:{
                Authorization:'Bearer' + localStorage.setItem('token')
            }
        });
        
    }    */
} 

</script>
