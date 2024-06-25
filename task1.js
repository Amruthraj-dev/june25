//1.
//ip: [[1,2,3,4],2,5]
//op: [[1,3,4,5]]

let arr=[7,4,[1,2,3,4],2,5]
let res=[]
numarr=[]

for(i of arr){
if(Array.isArray(i)){
    subarr=i
}
else{
    numarr.push(i)
}


}

for(j of subarr){
    if(!numarr.includes(j)){
        res.push(j)
    }
}

for(i of numarr){
    if(!subarr.includes(i)){
        res.push(i)
    }
}


console.log(res)




