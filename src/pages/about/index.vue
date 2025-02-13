<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import LogoKr from '@/components/images/LogoKr.vue'
import Sec1Img from "@/components/images/AboutSec1Flying.vue"
import Sec1Bg from "@/components/images/AboutSec1bg.vue"
import Sec2Img from "@/components/images/AboutSec2Board.vue"
import Sec3Img1 from "@/components/images/AboutSec3-1.vue"
import Sec3Img2 from "@/components/images/AboutSec3-2.vue"
import Sec3Img3 from "@/components/images/AboutSec3-3.vue"
import LogoSignature from '@/components/images/LogoSignature.vue'

onMounted(()=>{
	setLineWrap();
	window.addEventListener("appScroll", setScroll);
	setActiveContents(0);
})
onUnmounted(()=>{
	window.removeEventListener("appScroll", setScroll);
})
function setLineWrap() {
	let lines = document.querySelectorAll(".con-about .line-wrap");
	lines.forEach((item) => {
		let itm = item as HTMLElement;
		itm.style.transitionDelay = String(Math.floor(Math.random()*1000))+'ms';
	})
}
function setScroll(event:any){
	setActiveContents(event.detail.scrollY);
}

function setActiveContents(scTY:number) {
	let 
	winH = window.innerHeight,
	cArea = 0.6, out = ((1-cArea)/2)*winH,
	min = out,
	max = winH - min;
	let wrap = document.querySelector(".con-about");
	if (!wrap) return;
	let itms = wrap.querySelectorAll(".active-content");
	itms.forEach((item, i) => {
		let 
		itm = item as HTMLElement,
		box = itm.getBoundingClientRect(),
		h = box.height,
		y = box.y;
		if (i==1) {
			console.log(itm);
			console.log(y+h, "winH", winH);
		}
		if (y+h < min || y > max) {
			itm.classList.remove("_active");
		} else {
			itm.classList.add("_active");
		}
	})
}

</script>

<template>
	<div>
		<div class="con-about">
			<div>
				<section id="about-1" class="active-content">
					<div class="content-box">
						<h3 class="line-wrap"><LogoKr id="logoKr"/><span class="about-title-text">취향존중?</span></h3>
						<p>
							<span class="line-wrap">"취향존중" (Respect for your likes)은 25년차 </span>
							<span class="line-wrap">디자인·웹 베테랑 '<b>Creator Woos</b>'와 디자인, 개발 </span>
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
				<section id="about-2" class="active-content">
					<Sec2Img class="about-2-img" />
					<div class="content-box">
						<h4>
							<span class="line-wrap">비전과 미션</span>
						</h4>
						<h5>
							<span class="line-wrap">“당신의 취향을 존중하며 </span>
							<span class="line-wrap">창의적인 솔루션을 제공한다!”</span> 
						</h5>
						<p> 
							<span class="line-wrap">우리는 프로젝트를 그저 완성하는 </span>
							<span class="line-wrap">것 만이 아니라, 브랜드에 당신의 </span>
							<span class="line-wrap">비전을 녹여내기에 노력을 다합니다.</span>
							<span class="line-wrap">도출된 최선의 디자인과, 더 나은 </span>
							<span class="line-wrap">개발 솔루션으로 당신의 브랜드가 </span>
							<span class="line-wrap">더욱 빛나고 돋보이기를 기대합니다. </span>
						</p>
					</div>
				</section>

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
									<span class="line-wrap">아직은 없는, 세상에 있었으면 하는 </span>
									<span class="line-wrap">신선한 아이디어를 끊임없이 </span> 
									<span class="line-wrap">상상합니다.</span>
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
				

				<section id="about-4" class="active-content">
					<div class="content-box">
						<p>
							<span class="line-wrap"><LogoSignature class="about-logo" /></span>
						</p>
						<p>
							<span class="line-wrap">"취향존중"은 당신의 생각이 독특한 맛과 향을 가진 특별한 결과가 되도록 돕습니다.</span>
						</p>
						<h4>
							<span class="line-wrap">당신의 취향, 우리가 존중하겠습니다.</span>
						</h4>
						
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<style scoped>
.con-about {
	margin : 0 auto;

	svg {
		opacity:0.5;
		z-index:0;
		pointer-events: none;
	}
	p {
		line-height : 1.78rem;
	}
	h3 {
		font-size : 1.5rem;
		margin: 0.8rem 0;
		
		svg#logoKr {
			height: 3.69rem;
			opacity:1;
			z-index:1;
		}
		span.about-title-text {
			font-size: 0;
			position: relative;
		}
		span.about-title-text::after {
			content: "";
			/* border-bottom : 1px dotted white; */
			background-image: linear-gradient(to right, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 0%);
			background-position: top;
			background-size: 4px 1px;
			background-repeat: repeat-x;
			display:inline-block;
			width:75px;
			height:1px;
			transform: translateY(-1.2rem);
			margin : 0 0.4rem;
		}
		span.about-title-text::before {
			content: "?";
			font-size: 1.64rem;
			display:inline-block;
			position:absolute;
			left:100%;
			transform: translateY(1.1rem);
		}
	}
	section {
		margin-bottom:2rem;
		position:relative;
		width: calc(100% + 4rem);
		margin-left: -2rem;
		box-sizing: border-box;
		padding-left: 2rem;
		padding-right: 2rem;
		
	}
	.content-box {
		position: relative;
		z-index:1;
	}
	h4 {
		margin-bottom: 0.6rem;
	}
	h4, h4 > .line-wrap {
		font-size: 2.15rem;
		font-weight:100 !important;
	}
	h5 {
		margin-bottom: 0.9rem;
	}
	h5, h5 > .line-wrap  {
		font-size: 1.10rem;
		font-weight:700 !important;
	}
	p {
		margin-bottom: 1rem;
	}

	.line-wrap {
		display: block;
		opacity:0;
		transform : translateY(0.5rem);
		transition-property: opacity, transform;
		transition-duration: 400ms;
		transition-timing-function: ease-in;
	}
	._active .line-wrap {
		opacity:1;
		transform : translateY(0);
		transition-property: opacity, transform;
		transition-duration: 700ms;
		transition-timing-function:cubic-bezier(.43,1.51,.58,1.09);
	}
	
	#about-1 {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;

		.content-box {
			min-width : 20.1rem;
			margin-left:5%;
		}

		.about-img {
			width: calc(100% - 10% - 16rem);
            margin-left: 5%;
            margin-top: 7%;
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
		}
	}
	#about-2 {
		display: flex;
		align-items: center;
		flex-wrap: nowrap;
		justify-content: center;
		margin-top:3.6rem;

		.about-2-img {
			width: calc(100% - 5% - 22rem);
            margin-right: 5%;
		}
		.content-box {
			min-width : 14.6rem;
		}
	}
	#about-3 {
		padding-top:6.2rem;

		h4 {
			display:none;
		}

		ul.list-con {
			display: flex;
			align-items: center;
			flex-wrap: nowrap;
			justify-content: center;
			list-style: none;
			text-align: center;

			li {
				margin: 0 1rem;
				max-width : calc(100% / 3 - 1rem);
				position:relative;

				svg {
					width : 90%;
				}
				.content-box {
					min-width: unset;
                    max-width: unset;
                    width: 13.9rem;
					margin: 1rem auto;
				}
			}
		}
		
		.about-2-img {
			width: calc(100% - 5% - 28rem);
            margin-right: 5%;
		}
	}
	#about-4 {
		display: flex;
		padding: 5rem 0;
		text-align: center;
		justify-content: center;
		align-items: center;
		min-height: 80vh;
		margin-top: -10vh;

		svg {
			opacity:1;
		}
		h4 {
			margin-top:-1rem;
		}
	}
}
@media screen and (min-width:800px){
	.con-about {
		min-width : calc(800px - 4rem);
		max-width: 1200px;
	}
}
/* @media screen and (max-width:799px) and (min-width:600) { */
@media screen and (max-width:799px) {
	.con-about {
		width : 100%;
	}
}
@media screen and (max-width:599px){
	.con-about {
		width : 100%;
	}
}
</style>
