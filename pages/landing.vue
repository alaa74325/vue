<template>
    <div class="landing-page">
        <div class="inf-box  co-sm-12">
            <h1 class="logo">Nadres</h1>
            <p>Matching Communitites<br>With Great Environment</p>
            <div class="details">
                <div class="org-box">
                    <h4>For Organizations</h4>
                    <p>
                        We are the best environment for educational platform 
                        to identify and make  team members get in touch with 
                        wherever they are.
                    </p>
                    <div class="butns">
                        <n-link to="/signUp-org">Sign Up</n-link>
                        <n-link to="/login-org">Login</n-link>
                    </div>
                </div>
                <div class="mem-box">
                    <h4>For Students</h4>
                    <p>
                        Join over millions of Students, Practice for educational 
                        purpose skills, prepare for tasks, and get envlobved in teams.
                    </p>
                    <div class="butns">
                        <n-link to="/signUp-std">Sign Up</n-link>
                        <n-link to="/login-std">Login</n-link>
                    </div>
                </div>
            </div>
            
        </div>
        <div class="slider-box  co-sm-12">
            <div>
                <img src="../assets/images/undraw_connection_re_lcud.svg">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$activeColor:#0061ff;
$h3Color:#1b2232;
$pColor:#484e5a;
$hColor:#474748;
$spanColor:#9ba3b5;
.container-m{
    width: 90% !important;
    padding:7px 0;
    margin:0  auto !important;
    display:flex;
    justify-content: space-between;
}
.landing-page{
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: 
        linear-gradient(to top,rgb(145, 138, 229), #45bbfe, rgba(221, 238, 255, 0) 
        60%, rgba(255, 255, 255, 0.5));
    .inf-box{
        width: 50%;
        padding: 0 5%;
        
        h1.logo{
            color:$activeColor;
            font-family: 'Satisfy', cursive;
            font-size: 30px;
            padding: 0;
            margin-top: 6%;
            line-height: 40px;
        }
        >p{
            font-size: 25px;
            color:$spanColor;
            margin-top: 15%;
            padding-left: 6%;
        }
        .details{
            padding-left: 6%;
            display: flex;
            font-weight: 500;
            justify-content: space-between;
            h4{
                font-size: 19px;
                font-weight: 700;
                color: $hColor;
            }
            p{
                color:$spanColor;
                width: 100%;
                margin: 25px 0;
            }
            >div{
                width: 47%;
                margin-top: 20px;
            }
            .butns{
                display: flex;
                a{
                    background: #45bbfe;
                    padding: 6px 13px;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 500;
                    text-decoration: none;
                    margin-right: 30px;
                    min-width: 80px !important;
                    display: inline-block;
                    border-radius: 10px;
                    text-align: center;
                }
            }
        }

    }
    .slider-box{
        width:50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        img{
            width: 96%;
            margin: 0 2%;
            display: inline-block;
        }
    }
} 
@media (max-width:1000px) {
    .login-page,.sign-up{
        justify-content: flex-end;
        flex-wrap: wrap;
        flex-direction: column-reverse;
        height: 100% !important;
        >div{
            width: 100% !important;
            height: 100% !important;
        }
        .slider-content{
            overflow: hidden;
            .d-md-block {
                display: block!important;
            }
        }
    }
}
</style>
<script>
export default {
    layout: "empty"
};
</script>