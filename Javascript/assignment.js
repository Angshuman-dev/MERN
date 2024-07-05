// Find 100 prime number

// var start=2,count=0;total_count=100;

// for ()


//Find
var num='153'
// console.log(num.charAt(0))
var len=num.length;
var sum=0;
console.log(len)
 for (var i=0;i<len;i++){
     sum+=num.charAt(i)**len;
 }

 if(sum==num){
 console.log("palindrome")
 }
 else {
    console.log("not palindrome")
 }



