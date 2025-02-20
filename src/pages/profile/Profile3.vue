<script setup lang="ts">
import Sec3Img from "@/components/images/ProfileSec3Master.vue"

</script>

<template>
    <section id="profile-3" class="active-content">
        <div class="content-box">
            <h5>
                <span class="line-wrap">25년 짬밥 - 웹 제작의 살아있는 전설 </span> 
				<span class="line-wrap">그리고 자바스크립트 마법사</span> 
            </h5>
            <p> 
                <span class="line-wrap">벌써 25년째 이 바닥서 구르고 있어요. 하나소프트에서는 </span>
				<span class="line-wrap">메가패스몰과 문화상품권몰 등을, 신세계 인터네셔날 </span>
				<span class="line-wrap">다닐 땐 VOV, BOONTHESHOP 같은 패션 사이트를 </span>
				<span class="line-wrap">론칭했죠. 스타일쉽에서는 컨버스, 휠라, 네파등 수많은 </span>
				<span class="line-wrap">브랜드들의 온라인 브랜드 홍보 및 판매를 성공적으로 </span>
				<span class="line-wrap">진행했습니다. 디자인만 하지 않아요. 자바스크립트와 </span>
				<span class="line-wrap">프론트엔드 개발도 저는 진심입니다. React와 Vue </span>
				<span class="line-wrap">같은 프레임워크는 물론, 코드 한 줄로 사용자 경험을 </span>
				<span class="line-wrap">업그레이드하는 데 일가견이 있죠. 복잡한 인터랙션? </span>
				<span class="line-wrap">최적화 작업? “로켓처럼 빠른” 웹사이트로 해드립니다.</span>
				<span class="line-wrap">자바스크립트 마법사? 모자 쓰고 지팡이 들지는 않지만,</span>
				<span class="line-wrap">가끔 코드로 마법을 부리기는 합니다. </span>
            </p>
        </div>
        <Sec3Img class="profile-img" />
    </section>
</template>

<style scoped>
#profile-3 {
	min-height : calc(max(780px, 95vh - 2rem));

	.content-box {
		position:absolute;
		top: 50%;
		left : calc(25% + 2rem);
		transform: translate(-50%, -50%);
		width : 22.15rem;
	}
	.profile-img {
		position:absolute;
		max-width : 695px;
		min-width:450px;
	    width : 55%;
		left : calc(75% - 2rem);
		top: 50%;
		transform: translate(-50%, -50%);
	}
}
@media screen and (max-width:999px) {
#profile-3 {
    .content-box {
		left : 17.6rem;
		margin-top : calc((1000px - 100vw) * 0.45);
		margin-left : calc((1000px - 100vw) * 0.06);
	}
	.profile-img {
		left: calc(100% - 3.6rem - 225px);
		margin-top : calc((100vw - 1000px) * 0.30);
		margin-left : calc((100vw - 1000px) * 0.043);
	}
}}
@media screen and (max-width:599px){
#profile-3 {
    .content-box {
		left : 51%;
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
