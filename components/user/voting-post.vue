<template>
    <div class="voting-post" id="e">
        <div class="container-m">
            <UserPostBodyHead></UserPostBodyHead>
            <div class="voting-content">
                <h4>What is your favourite Programming Language?</h4>
                <section>		
                    <ul>
                        <li class="radio">
                            <span class="pre" v-if="vote">50%</span>
                            <input type="radio" name="radio" id="r1" checked="checked">
                            <label for="r1">Javascript<span v-if="vote" class="progress"></span></label>
                        </li>
                        <li class="radio">
                            <span class="pre" v-if="vote">30%</span>
                            <input type="radio" name="radio" id="r2">
                            <label for="r2">Python<span v-if="vote" class="progress"></span></label>
                        </li>
                        <li class="radio">
                            <span class="pre" v-if="vote">20%</span>
                            <input type="radio" name="radio" id="r3">
                            <label for="r3">C++<span v-if="vote" class="progress"></span></label>
                        </li>	
                    </ul>
                </section>
                <button class="btn-vote" @click="vote=!vote">Vote</button>
                <div class="who-voting">
                    <div class="box">
                        <n-link to=""><img src="../../assets/images/user1.jpg"></n-link>
                        <n-link to=""><img src="../../assets/images/user2.jpg"></n-link>
                        <n-link to=""><img src="../../assets/images/user3.jpg"></n-link>
                        <n-link to=""><p>Total Votes: 25 5 Days Left</p></n-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {  
    data:()=>({
        vote:false
    }),
}
</script>
<style scoped lang="scss">
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
a i.icon{
    color:$fancyColor;
    text-align: center;
    display: block;
    font-size: 23px;
}
.funcy-active{
    color:$fancyColor
}
.voting-post{
    width:100%;
    border-radius: 20px;
    background: #fff;
    margin-bottom: 20px;
    a{
        text-decoration: none !important;
    }
    .container-m{
        display: block;
        width: 92% !important;
    }
    .voting-content{
        width: 100%;
        position: relative;
        padding-bottom: 10px;
        h4{
            font-size: 16px;
            color:$hColor;
        }
        .btn-vote{
            background: $fancyColor;
            padding: 5px 8px;
            border-radius: 7px;
            color: #fff;
            position: absolute;
            right: 0;
            bottom: 20px;
        }
    }
}
/* Voting content area styling */
ul {
    margin: 0;
    margin-top: 20px;
    padding: 0;
}
li {
    padding-bottom: 5px;
    display:flex;
} 
label, input {
    cursor: pointer;
    line-height:20px
}
label{
    position:relative;
    padding-bottom:15px;
    font-size:18px;
    width: 88%;
}
.pre{
    position: absolute;
    z-index: 10;
    font-size:15px;
    top:0;
    left:0;
    background: #fff;
    font-weight: 500;
    line-height: 22px;
    transition: 8s ease-in-out;
}
label span{
    width: 50%;
    height: 3px;
    border-radius: 3px;
    background:$fancyColor;
    position: absolute;
    bottom: 0;
    left: 0;
    animation: with-a 0.8s;
}
@keyframes with-a {
    0%{
        width: 0;
    }
    100%{
        width: 50%;
    }
}
input {
    margin: 0;
    max-width: 10%;
    height: auto;
    color: #1b1b1b;
    vertical-align: middle;
    -webkit-appearance: none;
    -moz-appearance: none;
            appearance: none;
    border: .08em solid #aeb2bb;
}
/* End reset for the demo */
.radio {
    display: flex;
    position: relative;
}
input[type="radio"] {
    width: 1.25em; height: 1.25em;
    margin-right:15px;
}	
input[type="radio"] {	
    border-radius: 50%;
    width:20px;
    height:20px;
}
input[type="radio"]:checked {
    background-image: url("data:image/svg+xml,%3Csvg height='55' width='55' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m11.4 21.5-5.93-5.93-2.01 2.01 7.94 7.94 17.1-17.1-2.01-2.01z' fill='%23fff'/%3E%3C/svg%3E");
    background-size: 120% 120%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: $fancyColor;
}
/* Who voting */
.who-voting{
    .box{
        display: flex;
        margin-top: 15px;
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            border:2px solid #fff;
        }
        img:nth-child(1){
            display: inline-block;
            margin-left: -8px;
        }
        p{
            color:$hColor;
            margin-left: 10px;
            span{
                color: $h3Color !important;
                font-size: 17px;
                font-weight: 500;
            }
        }
    }
}
</style>