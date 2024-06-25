//2.
//ip: hello raju
//op: ujaro lleh

const prompt=require('prompt-sync')()
const str = prompt('Enter a string: '); //hello raju
c=1
for(i of str){
    if(i==" "){
        break
    }
    c++
}
count=0
res=""
for(j=str.length-1;j>=0;j--){
    
    if(str[j]!=" "){
        res+=str[j]
    }
    count++
    if(count==c){
        res+=" "
    }
}
console.log(res)