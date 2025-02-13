
<script setup lang="ts">

import Sec3Img1 from "@/components/images/AboutSec3-1.vue"
import Sec3Img2 from "@/components/images/AboutSec3-2.vue"
import Sec3Img3 from "@/components/images/AboutSec3-3.vue"

</script>

<template>
    <section id="about-3">
        <h4>
            <span class="line-wrap">우리의 약속</span>
        </h4>
        <ul class="list-con">
            <li class="_con_1 active-content">
                <Sec3Img1 class="about-3-img1" />
                <div class="content-box">
                    <h5>
                        <span class="line-wrap">맞춤형 솔루션</span>
                    </h5>
                    <p>
                        <span class="line-wrap">웹사이트 제작, CI/BI, 인쇄 디자인</span>
                        <span class="line-wrap">모든 영역에서 고객의 취향을</span> 
                        <span class="line-wrap">존중합니다.</span>
                    </p>
                </div>
            </li>
            <li class="_con_2 active-content">
                <Sec3Img2 class="about-3-img2" />
                <div class="content-box">
                    <h5>
                        <span class="line-wrap">창의적 접근</span>
                    </h5>
                    <p>
                        <span class="line-wrap">아직은 없는, 세상에 있었으면 </span>
                        <span class="line-wrap">하는 신선한 아이디어를 </span> 
                        <span class="line-wrap">끊임없이 상상합니다.</span>
                    </p>
                </div>
            </li>
            <li class="_con_3 active-content">
                <Sec3Img3 class="about-3-img3" />
                <div class="content-box">
                    <h5>
                        <span class="line-wrap">소통과 협력</span>
                    </h5>
                    <p>
                        <span class="line-wrap">전 과정에서 더 소통하여, </span>
                        <span class="line-wrap">당신의 기대를 뛰어넘는 결과에</span> 
                        <span class="line-wrap">이르기를 추구합니다.</span>
                    </p>
                </div>
            </li>
        </ul>
    </section>
</template>

<style scoped>
#about-3 {
    padding-top:6.2rem;

    h4 {
        display:none;
    }

    ul.list-con {
        display: flex;
        position:relative;
        align-items: center;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        list-style: none;
        text-align: center;
        padding : 0;

        li {
            margin: 1rem;
            max-width : calc(100% / 3 - 1rem);
            position:relative;
            min-width: 13.9rem;

            svg {
                min-width: 15.2rem;
                max-width: 15.2rem;
            }
            .content-box {
                min-width: unset;
                max-width: unset;
                min-width: 13.9rem;
                margin: 1rem auto;
            }
        }
    }
    
    .about-2-img {
        width: calc(100% - 5% - 28rem);
        margin-right: 5%;
    }
}
@media screen and (max-width:799px) {
    #about-3 {
        ul.list-con {
            flex-direction: column;
            li {
                margin: 0rem;
            }
            li._con_1 {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                
                .content-box {
                    text-align: left;
                }
            }
            li._con_2 {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row-reverse;
                
                .content-box {
                    text-align: right;
                }
            }
            li._con_3 {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: row;
                
                .content-box {
                    text-align: left;
                }
            }
        }
}}
@media screen and (max-width:599px){
#about-3 {

    ul.list-con {
        li {
            margin-bottom : 2rem;
            min-width: calc(100% - -2rem);

            svg {
                max-width: 12.9rem;
                min-width: 12.9rem;
                margin: -4rem -2rem 3rem;

            }
            .content-box {
                margin: 6rem -3rem 2rem;
            }
        }
    }
}}
</style>
