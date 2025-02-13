
<script setup lang="ts">
import Sec2Img from "@/components/images/AboutSec2Board.vue"
</script>

<template>
    <section id="about-2" class="active-content">
        <Sec2Img class="about-2-img" />
        <div class="content-box">
            <h4>
                <span class="line-wrap">비전과 미션</span>
            </h4>
            <h5>
                <span class="line-wrap">“당신의 취향에 맞는 창의적 솔루션 제공!”</span> 
            </h5>
            <p> 
                <span class="line-wrap">우리는 프로젝트를 그저 완성하는 것만이 아니라,</span>
                <span class="line-wrap">브랜드에 당신의 비전을 녹여내기에 노력합니다.</span>
                <span class="line-wrap">도출된 최선의 디자인과, 더 나은 개발 솔루션으로</span>
                <span class="line-wrap">당신의 브랜드가 더 빛나고 돋보이기를 기대합니다.</span>
            </p>
        </div>
    </section>
</template>

<style scoped>
#about-2 {
    margin-top:10.6rem;
    min-height:35rem;
    position:relative;

    .about-2-img {
        width: calc(30% + 20rem);
        position : absolute;
        min-width: 33.17rem;
        top : calc(min(100vw, 66.66rem) * 0.2 - 28.4rem + 50%);
    }
    .content-box {
        position: absolute;
        right: calc(min((1000px - min(100vw, 1000px)) * 0.2, (100% - 26.4rem) / 2) + 2rem);
        min-width : 21.0rem;
        bottom : calc(min(100vw, 66.66rem) * 0.2 - 21.2rem + 50%);
    }
}
@media screen and (max-width:999px) {
#about-2 {
    
    .about-2-img {
    }
    .content-box {
    }
}}
@media screen and (max-width:599px){
#about-2 {

    
    .about-2-img {
        left: calc((-600px + min(100vw, 600px)) / 2 + 2rem);
    }
    .content-box {
    }
}}
</style>
