// let arr=["小明",1,true,undefined,null,"",[1,2,3],{name :"阿欽",type:"人類"},{name:"javascript",type:"程式語言",opption:["難","好難","超級難"]}]

// console.log(arr);
// console.log(arr[8],opption["2"]);


let arr = ["today","is","a","good","day"];
//陣列P開頭的方法 陣列從尾巴進行操作
console.log(arr);
arr.push("cool");
console.log(arr);
// 刪除最後一個東西
arr.pop();
// console.log(arr.pop());
console.log(arr);

// shift從頭開始操作 unshift是從頭加一個東西
arr.unshift("Hot");
console.log(arr);
arr.shift("body");
// console.log(arr.shift());
// console.log(arr);

//從自己想要開始的地方進行操作
// splice(要操作的索引位置,從索引位置開始要操作的元素數量,要添加的內容(沒有填入等於刪除))
// arr.splice(0,0,"are","hot");
// console.log(arr);
// arr.splice(0,4);
// console.log(arr);

// 判斷陣列是否包含條件字串
console.log(arr.includes("today"));
//陣列組成字串
console.log(arr.join(" "));