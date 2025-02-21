<script setup lang="ts">
import Sec1Img from "@/components/images/ProfileSec1Baby.vue"
</script>

<template>
    <section id="profile-1" class="active-content">
        <div class="content-box">
            <h4>
                <span class="line-wrap">WOOS? 위성우?</span>
            </h4>
            <h5>
                <span class="line-wrap">“74년식 소문자 필기체 - 이탤릭 <b style="font-family: 'League Script', serif; font-weight: 600; font-style: normal; font-size:2.4rem; line-height:1.8rem;">a</b>형”</span> 
            </h5>
            <p> 
                <span class="line-wrap">1974년 물지 않는 호랑이띠. 소심하며 삐딱한 A형입니다. </span>
                <span class="line-wrap">MBTI보다 혈액형을 더 믿어요. 그래도 성격을 딱 설명한다면,</span>
                <span class="line-wrap">INTJ에 제일 가깝죠. 전략가형 이라는데 그건 잘 모르겠고,</span>
				<span class="line-wrap">그냥 “프로 일 벌리는 타입”인 것 같아요.</span>
            </p>
        </div>
        <Sec1Img class="profile-img" />
    </section>
</template>

<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Grandiflora+One&family=League+Script&family=Stylish&display=swap';

#profile-1 {
    height : 600px;
	margin:calc((50vh - 300px) - 3rem) 0;
	margin-left:-2rem;
	padding:0;

	.content-box {
		position:absolute;
		top: 50%;
		left : calc(25% + 2rem);
		transform: translate(-50%, -50%);
		width : 25.1rem;
	}
	.profile-img {
		position:absolute;
		max-width : 600px;
		min-width:450px;
	    width : 45%;
		left : calc(75% - 2rem);
		top: 50%;
		transform: translate(-50%, -50%);
	}
}
@media screen and (max-width:999px) {
#profile-1 {
    .content-box {
		left : 17.6rem;
		margin-top : calc((1000px - 100vw) * 0.45);
		margin-left : calc((1000px - 100vw) * 0.09);
	}
	.profile-img {
		left: calc(100% - 3.6rem - 225px);
		margin-top : calc((100vw - 1000px) * 0.30);
		margin-left : calc((100vw - 1000px) * 0.043);
	}
}}
@media screen and (max-width:599px){
#profile-1 {
    .content-box {
		left : 53%;
		margin-left: 0;
		margin-top : 180px;
	}
	.profile-img {
		left : 50%;
		margin-left: 0;
		margin-top : -120px;
	}
}}
</style>
