
<script setup lang="ts">
import LogoSignature from '@/components/images/LogoSignature.vue'

</script>

<template>
    <section id="about-4" class="active-content">
        <div class="content-box">
            <p>
                <span class="line-wrap"><LogoSignature class="about-logo" /></span>
            </p>
            <p>
                <span class="line-wrap">"취향존중"은 당신의 생각이&nbsp;</span>
                <span class="line-wrap">독특한 맛과 향을 가진 특별한&nbsp;</span>
                <span class="line-wrap">결과가 되도록 돕습니다.</span>
            </p>
            <h4>
                <span class="line-wrap">당신의 취향, 우리가&nbsp;</span>
                <span class="line-wrap _device_txt">존중하겠습니다.</span>
            </h4>
        </div>
    </section>
</template>

<style scoped>
#about-4 {
    display: flex;
    padding: 5rem 0;
    text-align: center;
    justify-content: center;
    align-items: center;
    min-height: 90vh;
    margin-top: -10vh;

    p {
        margin-bottom: 0.2rem;
        svg {
            opacity:1;
        }
    }
    h4 {
        margin-top:-0.9rem;
    }
    span.line-wrap {
        display:inline-block;
    }
}
@media screen and (min-width:800px){

}
/* @media screen and (max-width:799px) and (min-width:600) { */
@media screen and (max-width:799px) {

}
@media screen and (max-width:599px){
#about-4 {
    min-height: calc(100vh - 7rem);

    span.line-wrap {
        display:block;
    }
    p {
        line-height: 1.4rem;
        margin-bottom: 0.42rem;
    }
    h4 {
        margin-top: 0.4rem;
        line-height: 2.2rem;

        span.line-wrap  {
            font-size: 1.55rem;
        }
        span.line-wrap._device_txt {
            font-size:0;
        }
        ._device_txt::after {
            content:"존중합니다.";
            display: inline;
            font-size: 1.55rem;
            font-weight: 100 !important;
        }
    }
}}
</style>
