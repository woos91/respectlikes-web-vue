<script setup lang="ts">
import LogoKr from '@/components/images/LogoKr.vue'
import Sec1Img from "@/components/images/AboutSec1Flying.vue"
import Sec1Bg from "@/components/images/AboutSec1bg.vue"

</script>

<template>
    <section id="about-1" class="active-content">
        <div class="content-box">
            <h3 class="line-wrap"><LogoKr id="logoKr"/><span class="about-title-text">취향존중?</span></h3>
            <p>
                <span class="line-wrap">"취향존중" (Respect for your likes)은 25년차 </span>
                <span class="line-wrap">디자인·웹 베테랑 '<router-link to="/profile">Creator Woos</router-link>'와 디자인, 개발 </span>
                <span class="line-wrap">퍼펙트 크루가 협업하는 솔루션 파트너입니다. </span>
                <span class="line-wrap">창의성과 기술 경험이 결합된 맞춤형 솔루션으로 </span>
                <span class="line-wrap">브랜드의 고유한 아이덴티티를 구현하며, 당신의 </span>
                <span class="line-wrap">비즈니스 목표를 위한 종합 프로페셔널 파트너 </span>
                <span class="line-wrap">역할을 수행합니다.</span>
            </p>
        </div>
        <Sec1Img class="about-img" />
        <Sec1Bg class="about-bg" />

    </section>
</template>

<style>
#about-1 {
    display: flex;
    align-items: flex-start;
    flex-wrap: nowrap;
    margin-bottom: 3.5rem;
    margin-top :8.3rem;

    .content-box {
        min-width: 20.1rem;
        margin-left: 5%;
        margin-top: 14rem;
    }
    .about-img {
        width: calc(40% + 10rem);
        margin-left: calc(50% - 28rem);
        margin-top: 0%;
        transform: translateX(5rem);
        animation-name: floating;
        animation-duration: 1.2s;
        animation-timing-function: ease-in-out;
        animation-fill-mode: forwards;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }
    .about-bg {
        position: absolute;
        width: calc(100% + 6rem);
        top: -1.1rem;
        left: -3rem;
        min-width: 800px;
    }
    a, a:active, a:visited {
        font-weight : 600;
        text-decoration: underline;
    }
}
@media screen and (min-width:800px){
#about-1 {
    
}}
/* @media screen and (max-width:799px) and (min-width:600) { */
@media screen and (max-width:799px) {
#about-1 {

}}
@media screen and (max-width:599px){
#about-1 {
    height: 68vh;
    margin-top: 12vh;

    .content-box {
        min-width: 20.1rem;
        margin-left: calc(50% - 10.05rem);
        margin-top :19rem;
    }
    .about-img {
        min-width: 22rem;
        margin-top:4rem;
    }
    .about-bg {
        left: -4rem;
        min-width: 1080px;
        margin-top:-3rem;
        transform-origin: left top;
        transform: rotate(10deg) translateY(-2rem);

        path#flash1 {
            transform: rotate(-10deg) translate(-3rem, -5rem);
        }
        path#flash2 {
            transform: rotate(-10deg) translate(-45rem, -7rem);
        }
        path#cloud2 {
            transform: translate(-24rem, -4rem);
        }
    }
    
}}
</style>
