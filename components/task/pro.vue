<template>
    <div class="progress-box">
        <div class="container-m div-flex-sp">
            <p>Designing Homepage<br><span class="fancy">Sport Coach</span><span>-Gordon</span></p>
            <p>03:45:00</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
$h3Color:#1b2232;
$hColor:#484e5a;
$pColor:#5a5f6a;
$spanColor:#9ba3b5;
$fancyColor:#945dff;
$bodyColor:#f3f5f7;

.container-m{
    display: block !important;
    width: 91% !important;
}
.div-flex-sp{
    display: flex !important;
    justify-content: space-between;
}

P{
    color:$h3Color;
    font-size: 15px;
    font-weight: 600;
    margin: 3px 0;
    span{
        color: $spanColor;
        font-size: 13px;
    }
    .fancy{
        color:$fancyColor
    }
}
.progress-box{
    background: $bodyColor;
    border-radius: 15px;
    margin-bottom: 10px;
}
</style>