var number = "1879-03-14",
    output = [],
    sNumber = number.toString();

for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}
var remove=output.filter(x=>!Number.isNaN(x));
var pathnumber=remove.reduce((a,b)=>a+b,0);
var final=0;
if(pathnumber>10){
  var answer=pathnumber.toString().split("");
  for(var i=0;i<answer.length;i++){
    final=parseInt(final)+parseInt(answer[i]);
  }
}
console.log(final); 
