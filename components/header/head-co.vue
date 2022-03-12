<template>
    <div class="head-content">
        <div class="container-m">
            <div class="logo col-3-m">
                    <h1>Nadres</h1>
            </div>
            <div class="menu col-6-m display-menu" id="menu">
                <ul>
                    <li><n-link to="" @click="active"><i class="uil uil-estate active-li"></i></n-link></li>
                    <li><n-link to=""  @click="active"><i class="uil uil-compass"></i></n-link></li>
                    <li><n-link to="" @click="active"><i class="uil uil-bag-alt"></i></n-link></li>
                    <li><n-link to=""  @click="active"><i class="uil uil-bell"></i></n-link></li>
                    <li><n-link to=""  @click="active"><i class="uil uil-envelope-heart"></i></n-link></li>
                </ul>
            </div>
            <div class="right-menu col-3-m">
                <ul>
                    <li><n-link to=""><img src="../../assets/images/profilePic.jpg"></n-link></li>
                    <li>
                        <button class="menu-btn">
                            <i class="uil uil-bars" v-if="menuShow" @click="menuShowing"></i>
                            <i class="uil uil-multiply" v-if="!menuShow" @click="menuShowing"></i>
                        </button>
                    </li>
                </ul>
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
    width: 84% !important;
    padding:10px 0;
    margin:0  auto !important;
    display:flex;
    justify-content: space-between;
}

.active-li{
    color:$activeColor;
}
/* Start styling */
.logo h1{
    color:$activeColor;
    font-family: 'Satisfy', cursive;
    font-size: 25px;
    padding: 0;
    margin: 0;
}

.head-content{
    width:100%;
    background: #fff;
    overflow: hidden;
    justify-content: space-between;
    align-content: center;
    div.container-m{
        >div{
            ul{
                margin: 0;
                padding: 0;
                text-decoration: none;
                list-style: none;
                display: flex;
                justify-content: center;;
                li{
                    margin: 0 18px;
                    a {
                        text-decoration: none;
                        font-size: 24px;
                        font-weight: 200;
                        align-items: center;
                        display: grid;
                        color:$iconColor;
                        i{
                            box-sizing: border-box;
                            text-align: center;
                        }
                    }
                    
                }
            }
        }
        .right-menu{
            ul{
                justify-content: flex-end;
                li{
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin:0 0 0 15px ;
                    i{
                        text-align: center;
                    }
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
                li:last-of-type{
                    width: auto !important;
                    
                }
            }
        }
    }
}
@media (max-width:767px) {
    .display-menu{
        display:none;
    }
    .menu-btn{
        display: block;
    }
    button{
        outline:none;
        i{
            transition: 1s linear;
        }
    }
    .menu{
        width: 85px;
        height: 100vh;
        background: #0061ff;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1000;
        transition: 1s linear;
        ul{
            display: block !important;
            li{
                margin:30px auto 0 !important;
                a{
                    color: #fff !important;
                }
            }
        }
        
    }
    .active-li{
        color:black
    }
}
</style>
<script>
export default{
    computed:{
        menuShow(){
            return this.$store.getters.menuShow;
        }
    },
    methods: {
        active: function(){
            console.log("hi");
            $this.$el.classList.add("active-li");
        },
        menuShowing:function(){
            console.log("hi");
            document.getElementById("menu").classList.toggle("display-menu");
            return!menuShow;
        }
    },
} 

</script>
