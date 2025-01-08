let toUSDString = (num)=>{
	if (!num) return "0";
	else return "$"+num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
export default toUSDString;
