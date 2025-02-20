<script setup lang="ts">
import Sec4Img from "@/components/images/ProfileSec4Barista.vue"
</script>

<template>
	<section id="profile-4" class="active-content">
		<Sec4Img class="profile-img" />
        <div class="content-box">
            <h5>
                <span class="line-wrap">커피 내리는 디자이너?</span>
				<span class="line-wrap">그냥 커피 덕후</span> 
            </h5>
            <p> 
                <span class="line-wrap">가죽공예, 금속공예, 목공, 미싱질… </span>
				<span class="line-wrap">손으로 하는 꼼지락거리는 건 다 좋아합니다. 하지만 </span>
				<span class="line-wrap">항상 맘 한구석엔 인생 최애템인 커피! 예전부터 </span>
				<span class="line-wrap">공부하고 연습하며 즐겨오던 커피쟁이였었죠. 결국 </span>
				<span class="line-wrap">2024년에 EUCA(유럽커피협회)에서 브루잉, 로스팅, </span>
				<span class="line-wrap">큐-그레이더 등. 바리스타 마스터 자격증 취득. </span>
				<span class="line-wrap">이제 예쁘게 카페 차리는 일만 남았나? 합니다.</span>
            </p>
        </div>
    </section>
</template>

<style scoped>
#profile-4 {
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
		width:20.72rem;
		position:absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		left: calc(79% - 2rem);
	}
}
@media screen and (max-width:999px) {
#profile-4 {
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
#profile-4 {
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
