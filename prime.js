function checkPrime(num){
  
for(let i=2;i<=Math.sqrt(num);i++){
  if(i%num==0){
    return false
  }
}
  return true
}

let number=13;
console.log(checkPrime(number))