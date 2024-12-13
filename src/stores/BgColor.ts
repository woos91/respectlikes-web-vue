import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export type ActiveColor = {
	num: number,
	r: number, g: number, b: number,
	rValue: number, gValue: number, bValue: number,
	rAcc: number, gAcc: number, bAcc: number,
	value: string
};
const
	minColorRange = 50,
	maxColorRange = 150,
	colorRange = (maxColorRange - minColorRange) / 2,
	colorPivot = minColorRange + colorRange,
	resultColorNo = (valueNo: number) => (Math.round(Math.sin(valueNo) * colorRange + colorPivot));

const
	setColor = (): ActiveColor => {
		let
			spd: number = 0.04,
			rValue: number = Math.random() * (Math.PI * 2),
			gValue: number = Math.random() * (Math.PI * 2),
			bValue: number = Math.random() * (Math.PI * 2),
			rAcc: number = Math.random() * (spd * 0.3) + (spd * 0.85),
			gAcc: number = Math.random() * (spd * 0.3) + (spd * 0.85),
			bAcc: number = Math.random() * (spd * 0.3) + (spd * 0.85),
			r: number = resultColorNo(rValue),
			g: number = resultColorNo(gValue),
			b: number = resultColorNo(bValue);
		return {
			num: 0,
			r: r, g: g, b: b,
			rValue: rValue, gValue: gValue, bValue: bValue,
			rAcc: rAcc, gAcc: gAcc, bAcc: bAcc,
			value: r + ',' + g + ',' + b
		};
	},
	changeClolor = (color: ActiveColor): ActiveColor => {
		let col: ActiveColor = {
			num: color.num + 1,
			r: 0, g: 0, b: 0,
			rValue: color.rValue, gValue: color.gValue, bValue: color.bValue,
			rAcc: color.rAcc, gAcc: color.gAcc, bAcc: color.bAcc, value: color.value
		};
		col.rValue += col.rAcc;
		col.gValue += col.gAcc;
		col.bValue += col.bAcc;
		if (col.rValue > Math.PI * 2) col.rValue -= Math.PI * 2;
		if (col.gValue > Math.PI * 2) col.gValue -= Math.PI * 2;
		if (col.bValue > Math.PI * 2) col.bValue -= Math.PI * 2;
		col.r = resultColorNo(col.rValue);
		col.g = resultColorNo(col.gValue);
		col.b = resultColorNo(col.bValue);
		col.value = col.r + ',' + col.g + ',' + col.b;
		return col;
	};
interface BgColorState {
	color1: ActiveColor,
	color2: ActiveColor,
	color3: ActiveColor
}
const initialState: BgColorState = {
	color1: setColor(),
	color2: setColor(),
	color3: setColor()
}

export const useBgColorData = defineStore('bgColor', () => {
	const bg = ref(initialState);
	// const doubleCount = computed(() => count.value * 2)
	function change() {
		bg.value.color1 = changeClolor(bg.value.color1);
		bg.value.color2 = changeClolor(bg.value.color2);
		bg.value.color3 = changeClolor(bg.value.color3);
	}
	return { bg, change }
})
