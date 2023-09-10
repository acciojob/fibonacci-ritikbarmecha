function fibonacci(num) {
// your code here
	if(num==1 || num==0){
		return num;
	}
let ans=fibonacci(num-1)+fibonacci(num-2);
	return ans;
}

module.exports = fibonacci;
