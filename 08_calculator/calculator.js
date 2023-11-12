const add = function(num1,num2) {
	return num1+num2
};

const subtract = function(num1,num2) {
	return num1-num2
};

const sum = function(nums) {
	all=0;
  for(i=0;i<nums.length;i++){
    all+=nums[i]
  }
  return all
};

const multiply = function(nums) {
  all=1;
  for(i=0;i<nums.length;i++){
    all*=nums[i]
  }
  return all
};

const power = function(num1,num2) {
  mult=num1
	while(num2>1){
    num1*=mult
    num2-=1
  }
  return num1
};

const factorial = function(num1) {
	if(num1==1||num1==0){
    return 1;
  }
  else{
    return num1*factorial(num1-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
