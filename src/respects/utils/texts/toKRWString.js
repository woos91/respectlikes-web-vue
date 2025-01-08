
let toKRWString = (num)=>{
	if (!num) return "0";
	else return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"원";
}
export default toKRWString;
