<template>
    <div class="inner-slider">
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="@/assets/images/undraw_teaching_re_g7e3.svg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/images/undraw_welcoming_re_x0qo (1).svg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="@/assets/images/undraw_thought_process_re_om58 (1).svg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss"  scoped>

$background-slider:#2a5dc4;
$btn-background:#6E95E9;
$font-collor:#999;
$border-color:#d9d9d9;
$font-family: 'Montserrat', sans-serif;
div.inner-slider{ 
    overflow: hidden; 
    background-color:#2a5dc4;
    .carousel-item{
        padding-top: 80px;
        height: 100vh;
    }
    img {
        width: 60% !important;
        height: 90%;
        margin: 0 auto;
    }
}
.carousel-indicators [data-bs-target] {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

</style>