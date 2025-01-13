const letterSlicer = (el:HTMLElement, className:string="slice_letter") =>{
	const str:string = el.innerText, num:number=str.length;
	let spans = '';
	el.innerText = '';
	for (let i=0, letter; i<num; i++) {
		letter = str.substring(i,i+1);
		spans +='<span class="'+className+' slice_order_'+i+'" data-slice-order="'+i+'" style="display:inline-block">';
		spans +=letter!=" "?letter:'&nbsp;';
		spans +='</span>';
	}
	el.innerHTML = spans;
}
export default letterSlicer;