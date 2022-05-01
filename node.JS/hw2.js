let abc = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let sum = "";
for(i=0; i<abc.length; i+=2){
    sum += abc[i+1] + " " + abc[i] + " "
}
console.log(sum);