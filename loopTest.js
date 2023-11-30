let str = ["Alan","Will","Max","Tony","Jack"];
console.log(str);
str.unshift("Jack");
str.splice(1,4,"Tony","Max","Will","Alan");
str.pop();
console.log(str);

// let newArr = [];
// for (let i = str.length - 1 ; i >= 0 ; i--){
//     newArr.push(str[i])
// }
// console.log(newArr)

let arr = new Array(100);
for(let  i = 0;i <arr.length; i++ ){
    arr[i] = i+1;
}
console.log(arr);

// for(let i = 0 ;i%2 == 0;i++){
//     arr[i]
// }
// console.log(arr)

let i = 2;
for(let i = 2 ; i % 2 == 0 ; i++){
    console(i)
}