<script setup lang="ts">
import Sec2Img from "@/components/images/ProfileSec2Brother.vue"
</script>

<template>
	<section id="profile-2" class="active-content">
		<Sec2Img class="profile-img" />
        <div class="content-box">
            <h5>
                <span class="line-wrap">전직 미대 오빠 경력</span> 
            </h5>
            <p> 
                <span class="line-wrap">93학번 홍익대학교 광고멀티미디어 디자인 전공. </span>
                <span class="line-wrap">머리 길고 그림 그리는… 보통 상상하는 바로 그거.</span>
                <span class="line-wrap">미대오빠였죠. (가끔 교회 오빠도)</span>
				<span class="line-wrap">그러나 이제는 2000년에 졸업한 화석 선배일 뿐.</span>
				<span class="line-wrap">키도 작은 편이 아니라 국방부 의장대 출신으로써,</span>
				<span class="line-wrap">각 잡힌 군 생활 덕분에 지금도 삐뚤어진 픽셀은 </span>
				<span class="line-wrap">못 참습니다. 예전 오빠 시절엔 꽃남방도 깔끔하게 </span>
				<span class="line-wrap">소화해 냈지만 지금은 그저 꽃등심 정도나 완벽히 </span>
				<span class="line-wrap">소화하는 정도로 만족을...</span>
            </p>
        </div>
    </section>
</template>

<style scoped>
#profile-2 {
	min-height : calc(max(780px, 90vh - 2rem));

	.profile-img {
		position:absolute;
		max-width : 43.73rem;
		min-width : 26.66rem;
		width : 50%;
		left : calc(25% + 3rem);
		top: 50%;
		transform: translate(-50% ,-50%);
	}
	.content-box {
		width:19.72rem;
		position:absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		left: calc(79% - 2rem);
	}
}
@media screen and (max-width:999px) {
#profile-2 {
    .content-box {
		margin-top : calc((1000px - 100vw) * 0.50);
		margin-left : calc((100vw - 1000px) * 0.30);
	}
	.profile-img {
		/* left : 17.6rem; */
		margin-top : calc((100vw - 1000px) * 0.305);
		margin-left : calc((1000px - 100vw) * 0.255);
	}
}}
@media screen and (max-width:599px){
#profile-2 {
    .content-box {
		left : 53%;
		margin-left: 0;
		margin-top : 200px;
	}
	.profile-img {
		left : 50%;
		margin-left: 0;
		margin-top : -120px;
	}
    
}}
</style>
