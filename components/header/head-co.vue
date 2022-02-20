<template>
    <div class="head-content">
        <div class="container-m">
            <div class="logo col-3-m">
                    <img src="">
            </div>
            <div class="menu col-6-m">
                <ul>
                    <li><n-link to=""><i class="uil uil-estate active-li"></i></n-link></li>
                    <li><n-link to=""><i class="uil uil-compass"></i></n-link></li>
                    <li><n-link to=""><i class="uil uil-bag-alt"></i></n-link></li>
                    <li><n-link to=""><i class="uil uil-bell"></i></n-link></li>
                    <li><n-link to=""><i class="uil uil-envelopes"></i></n-link></li>
                </ul>
            </div>
            <div class="right-menu col-3-m">
                <ul>
                    <li><n-link to=''><i class="uil uil-clipboard-notes"></i></n-link></li>
                    <li><n-link to=""><img src="../../assets/images/profilePic.jpg"></n-link></li>
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
            }
        }
    }
}

</style>
<script>
export default{
    methods: {
        active:function(event){
            console.log(this.active);
        }
    },
}   
</script>
