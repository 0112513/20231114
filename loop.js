// for(let i = 0; i < 10 ; i++){
//     console.log(i)
// }

// for (let i =10 ; i > 0 ;i--){
//     console.log(i)
// }

// let i = 10;
// while(i > 0){
//     console.log(i);
//     i--;
// }

// for(let i = 0 ;i < 10; i++){
//     for(let j = 0;j < i ;j++){
//         console.log(j+1)
//     }
// }

let arr = [81,82,83,84,85,86,87,88,89]
// arr.forEach(function(e))
//forEach會針對陣列進行 "便歷"
arr.forEach(e =>{
    console.log(e)
})
// arr.forEach(function(e,index)){}
//印出每個元素的索引位置
arr.forEach((e,index) => {
    console.log(index)
})

let newArray = arr.reduce((total,item) => {
    // console.log(total)
    return total + item ;
})
console.log(newArray)

let sum = 0;
for(let i = 0;i <arr.length;i++){
    sum += arr[i]
}
console.log(sum);

//filter(過濾) 會改變陣列長度
let filterArr = arr.filter(item => {
    return item < 90 ;
})
console.log(filterArr);


//map(映射) 不會改變陣列長度
let mapArr = arr.map(item => {
    return "可口可樂" +" " + item;
})
console.log(mapArr)